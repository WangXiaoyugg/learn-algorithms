/**
 * 稠密图
 */

class DenseGraph {
    /**
     * 
     * @param {*} n 顶点个数
     * @param {*} m 边数
     * @param {*} directed 是否有方向
     * 0 代表两个顶点没有边， 1代表两个顶点右边
     */
    constructor(n, directed) {
        this.n = n;
        this.m = 0;
        this.directed = directed;
        // 邻接矩阵存储点信息
        this.g = new Array(n).fill(0).map(() => new Array(n).fill(0));
    }

    // 返回顶点数
    V() {
        return this.n;
    }

    // 返回边数
    E() {
        return this.m;
    }

    /**
     * 添加边
     * @param {*} v 顶点索引
     * @param {*} w 顶点索引
     */
    addEdge(v, w) {
        console.assert( v >= 0 && v < this.n);
        console.assert( w >= 0 && w < this.n);
        
        if (this.hasEdge(v, w)) {
            return;
        }

        this.g[v][w] = 1;
        if (!this.directed) {
            this.g[w][v] = 1;
        }
        this.m++;
    }
    
    /**
     * v 和 w 是否存在边
     * @param {*} v 顶点索引
     * @param {*} w 顶点索引
     * @returns 
     */
    hasEdge(v, w) {
        console.assert( v >= 0 && v < this.n);
        console.assert( w >= 0 && w < this.n);
        return this.g[v][w]
    }

    show() {
        for (let i = 0; i < this.n; i++) {
            let str = ''
            for (let j = 0; j < this.n; j++) {
                str += `${this.g[i][j]} `
            }
            console.log(str);
        }
    }
}

class AdjIterator {
    constructor(graph,  v) {
        this.v = v;
        this.g = graph;
        this.index = -1;
    }

    begin() {
        this.index = -1;
        let res = this.next();
        return res;
        
    }

    next() {
        for (this.index += 1; this.index < this.g.V() ; this.index++) {
            if (this.g.g[this.v][this.index]) {
                return this.index;
            }
        }
        return -1;
    }

    end() {
        return this.index >= this.g.V();
    }
}
module.exports = {
    DenseGraph,
    DAdjIterator: AdjIterator,
}