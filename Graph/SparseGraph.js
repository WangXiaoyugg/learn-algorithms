/**
 * 稀疏图
 */

class SparseGraph {
    constructor(n, directed) {
        this.n = n;
        this.m = 0;
        this.directed = directed;
        let g = [];
        for (let i = 0; i < n; i++) {
            g.push([])
        }
        this.g = g;
    }

    V() {
        return this.n;
    }

    E() {
        return this.m;
    }

    // 默认不处理平行边
    addEdge(v, w) {
        
        console.assert(v >= 0 && v < this.n);
        console.assert(w >= 0 && w < this.n);

        this.g[v].push(w);
        // 处理自环边
        if (v != w && !this.directed) {
            this.g[w].push(v);
        }
        this.m++;
    }

    hasEdge(v, w) {
        console.assert(v >= 0 && v < this.n);
        console.assert(w >= 0 && w < this.n);
        for (let i = 0; i < this.g[v].length; i++) {
            if (g[v][i] === w) {
                return true;
            }
        }
        return false;
    }

    show () {
        for (let i = 0; i < this.n; i++) {
            let str = `顶点 ${i} : `;
            for (let j = 0; j < this.g[i].length; j++) {
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
        this.index = 0;
    }

    begin() {
        this.index = 0;
        if (this.g.g[this.v].length) {
            return this.g.g[this.v][this.index];
        }
        return -1;
    }

    next() {
        this.index++;
        if (this.index < this.g.g[this.v].length) {
            return this.g.g[this.v][this.index]
        }
        return -1;
    }

    end() {
        return this.index >= this.g.g[this.v].length;
    }
}

module.exports = {
    SparseGraph,
    SAdjIterator: AdjIterator,
}