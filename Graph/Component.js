
class Component {
    constructor(graph, Iterator) {
        this.G = graph;
        // 记录图中每个顶点是否被访问过
        this.visited = [];
        // 图中的连通分量
        this.ccount = 0;
        this.Iterator = Iterator;

        // 判断点是否相邻
        this.id = [];

        for (let i = 0; i < this.G.V(); i++) {
            this.visited[i] = false;
            this.id[i] = -1;
        }

        for (let i = 0; i < this.G.V(); i++ ) {
            if (!this.visited[i]) {
                this.dfs(i)
                this.ccount++;
            }
        }
    }

    /**
     * 
     * @param {v} v 为顶点索引 
     */
    dfs(v) {
        this.visited[v] = true;
        this.id[v] = this.ccount;
        let adj = new this.Iterator(this.G, v);
        for (let i = adj.begin(); !adj.end(); i = adj.next()) {
            if (!this.visited[i]) {
                this.dfs(i);
            }
        }
    }
    // 返回连通分量的数量
    count() {
        return this.ccount;
    }

    isConnected(v, w) {
        console.assert( v >= 0  && v < this.G.V())
        console.assert( w >= 0  && v < this.G.V())
        return id[v] === id[w];
    }

}

module.exports = Component;