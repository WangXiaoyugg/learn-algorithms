/**
 * 寻路
 */
const assert = require("assert");

class Path {
    // 寻找图从 s 点到其他点的路径
    constructor(graph, Iterator ,s) {
        this.visited = [];
        this.from = [];
        this.G = graph;
        this.Iterator = Iterator;

        console.assert( s >= 0  && s < this.G.V());

        for (let i = 0; i < this.G.V(); i++) {
            this.visited[i] = false;
            this.from[i] = -1;
        }
        this.s = s;
        
        // dfs 寻路算法
        this.dfs(s);

    }

    dfs(v) {
        this.visited[v] = true;
        let adj = new this.Iterator(this.G, v);
        for (let i = adj.begin(); !adj.end(); i = adj.next()) {
            if (!this.visited[i]) {
                this.from[i] = v;
                this.dfs(i);
            }
        }
    }

    // 查询从 s 点到 w 点是否有路径
    hasPath(w) {
        assert(w >= 0 && w < this.G.V());
        return this.visited[w];
    }

    // 查询从 s 点 到 w 点的路径，存放在 res 中；
    path(w, res) {
        assert(this.hasPath(w));
        let stack = [];
        let p = w;
        
        while(p != -1) {
            stack.push(p);
            p = this.from[p];
        }

        
        while(stack.length) {
            res.push(stack[stack.length - 1])
            stack.pop();
        }
    }

    // 打印从 s 点 到 w 点的路径
    showPath(w) {
        assert(this.hasPath(w));
        let res = [];
        this.path(w, res);
        let str = '';
        for (let i = 0; i < res.length; i++) {
            str += `${res[i]}`;
            if (i === res.length - 1) {
                console.log(str);
            } else {
                str += `->`;
            }
        }

    }
}

module.exports = Path;