class UnionFind {
    constructor(n) {
        this.count = n;
        this.id = new Array(n);
        for (let i = 0; i < n; i++) {
            this.id[i] = i;
        }
    }

    // 查找节点 p
    find(p) {
        console.assert(p >= 0  && p  < this.count);
        return this.id[p]
    }

    // 判断 节点p 和 节点 q 是否连接
    isConnected(p, q) {
        return this.find(p) === this.find(q);
    }

    // 节点 p 和 节点 q 进行合并
    union(p, q) {
        let pId = this.find(p);
        let qId = this.find(q);
        if (pId === qId) {
            return ;
        }

        for (let i = 0; i < this.count; i++) {
            if (this.id[i] == pId) {
                this.id[i] = qId;
            }
        }
    }
}

module.exports = UnionFind;