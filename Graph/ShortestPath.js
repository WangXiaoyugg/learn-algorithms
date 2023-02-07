/**
 * 最短路径
 */

const { assert } = require("console");

class ShortestPath {
    constructor(graph, Iterator,  s) {
        assert(s >= 0 && s < graph.V());
        this.G = graph; // 图的引用
        this.s = s;  // 起始点
        this.visited = []; // 记录dfs的过程中节点是否被访问
        this.from = [];  // 记录路径，from[i] 表示产值路径i的上一个节点
        this.ord = []; // 记录路径中节点的次序，ord[i] 表示i节点在路径中的次序
        this.Iterator = Iterator;

        for(let i = 0; i < this.G.V(); i++) {
            this.visited[i] = false;
            this.from[i] = -1;
            this.ord[i] = -1;
        }
        // 辅助队列， 从 s 开始广度优先遍历整张图
        let queue = [];

        queue.push(this.s);
        this.visited[s] = true;
        this.ord[s] = 0;

        while(queue.length) {
            let v = queue.shift();
            let adj = new this.Iterator(this.G, v);
            for (let i = adj.begin(); !adj.end(); i = adj.next()) {
                if (!this.visited[i]) {
                    queue.push(i);
                    this.visited[i] = true;
                    this.from[i] = v;
                    this.ord[i] = this.ord[v] + 1;
                }
            }
        }
    }

    hasPath(w) {
        assert(w >= 0 && w < this.G.V()) 
        return this.visited[w];
    }

    // 查询s 点到 w 点的路径
    path(w, res) {
        assert(w >= 0 && w < this.G.V())
        let stack = [];
        let p = w;
        while(p != -1) {
            stack.push(p);
            p = this.from[p]
        }
        // 从栈中依次取出元素，获得顺序从 s 到 w 的路径
        while(stack.length){
            res.push(stack[stack.length - 1]);
            stack.pop();
        }
    }

    // 打印从 s 点 到 w点的路径
    showPath(w) {
        assert(w >= 0 && w < this.G.V())
        let res = [];
        this.path(w, res);
        let str = '';
        for (let i = 0; i < res.length; i++) {
            str += `${res[i]}`
            if (i === res.length - 1) {
                console.log(str)
            } else {
                str += ` -> `
            }
        }
    }

    // 查看从 s 点到 w 点的最短路径长度
    length(w) {
        assert(w >= 0  && w < this.G.V());
        return this.ord[w];
    }
}

module.exports = ShortestPath;