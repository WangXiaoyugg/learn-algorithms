class UnionFindFour {
    constructor(count) {
        this.count = count;
        this.parent = new Array(count);
        // rank[i] 表示以 i 为根的集合中所表示的树的层数
        this.rank = new Array(count);
        for (let i = 0; i < count; i++) {
            this.parent[i] = i;
            this.rank[i] = 1;
        }
    }

    // 查找节点 p
    find(p) {
        console.assert(p >= 0  && p  < this.count);
        while(p != this.parent[p]) {
            p = this.parent[p]
        }
        return p;
    }

    // 判断 节点p 和 节点 q 是否连接
    isConnected(p, q) {
        return this.find(p) === this.find(q);
    }

    // 节点 p 和 节点 q 进行合并
    union(p, q) {
        let pRoot = this.find(p);
        let qRoot = this.find(q);
        if (pRoot === qRoot) {
            return ;
        }
        
        if (this.rank[pRoot] < this.rank[qRoot]) {
            this.parent[pRoot] = qRoot;
        } else if (this.rank[qRoot] < this.rank[pRoot]) {
            this.parent[qRoot] = pRoot;
        } else {
            this.parent[pRoot] = qRoot;
            this.rank[qRoot] += 1;
        }
    }
}

module.exports = UnionFindFour;