const UnionFind = require('./unionFind')
const UnionFindTwo = require('./unionFindTwo')
const UnionFindThree = require('./unionFindThree')
const UnionFindFour = require('./unionFindFour')
const UnionFindFive = require('./UnionFindFive')
const UnionFindSix = require('./UnionFindSix')




class UnionFindTestHelper {

    // 测试基础版的UnionFind, n为数据规模
    static testUnionFindOne(n) {
        const unionFindOne = new UnionFind(n);
        let startTime = new Date().getTime();
        
        for (let i = 0; i < n; i++) {
            let p =  Math.floor(Math.random() * n);
            let q = Math.floor(Math.random() * n);
            unionFindOne.union(p, q);
        }

        for (let i = 0; i < n; i++) {
            let p =  Math.floor(Math.random() * n);
            let q = Math.floor(Math.random() * n);
            unionFindOne.isConnected(p, q);
        }

        let endTime = new Date().getTime();
        console.log(`unionFindOne: ${2 * n} ops,  ${(endTime - startTime) / 1000} s`)

    }

    // 测试基础版的UnionFindTwo, n为数据规模
    static testUnionFindTwo(n) {
        const unionFindTwo = new UnionFindTwo(n);
        let startTime = new Date().getTime();
        
        for (let i = 0; i < n; i++) {
            let p =  Math.floor(Math.random() * n);
            let q = Math.floor(Math.random() * n);
            unionFindTwo.union(p, q);
        }

        for (let i = 0; i < n; i++) {
            let p =  Math.floor(Math.random() * n);
            let q = Math.floor(Math.random() * n);
            unionFindTwo.isConnected(p, q);
        }

        let endTime = new Date().getTime();
        console.log(`unionFindTwo: ${2 * n} ops,  ${(endTime - startTime) / 1000} s`)

    }

    // 测试基础版的UnionFindThree, n为数据规模
    static testUnionFindThree(n) {
        const unionFindThree = new UnionFindThree(n);
        let startTime = new Date().getTime();
        
        for (let i = 0; i < n; i++) {
            let p =  Math.floor(Math.random() * n);
            let q = Math.floor(Math.random() * n);
            unionFindThree.union(p, q);
        }

        for (let i = 0; i < n; i++) {
            let p =  Math.floor(Math.random() * n);
            let q = Math.floor(Math.random() * n);
            unionFindThree.isConnected(p, q);
        }

        let endTime = new Date().getTime();
        console.log(`unionFindThree: ${2 * n} ops,  ${(endTime - startTime) / 1000} s`)
    }

    // 测试基础版的UnionFindFour, n为数据规模
    static testUnionFindFour(n) {
        const unionFindFour= new UnionFindFour(n);
        let startTime = new Date().getTime();
        
        for (let i = 0; i < n; i++) {
            let p =  Math.floor(Math.random() * n);
            let q = Math.floor(Math.random() * n);
            unionFindFour.union(p, q);
        }

        for (let i = 0; i < n; i++) {
            let p =  Math.floor(Math.random() * n);
            let q = Math.floor(Math.random() * n);
            unionFindFour.isConnected(p, q);
        }

        let endTime = new Date().getTime();
        console.log(`unionFindFour: ${2 * n} ops,  ${(endTime - startTime) / 1000} s`)
    }

    // 测试基础版的UnionFindFive, n为数据规模
    static testUnionFindFive(n) {
        const unionFindFive = new UnionFindFive(n);
        let startTime = new Date().getTime();
        
        for (let i = 0; i < n; i++) {
            let p =  Math.floor(Math.random() * n);
            let q = Math.floor(Math.random() * n);
            unionFindFive.union(p, q);
        }

        for (let i = 0; i < n; i++) {
            let p =  Math.floor(Math.random() * n);
            let q = Math.floor(Math.random() * n);
            unionFindFive.isConnected(p, q);
        }

        let endTime = new Date().getTime();
        console.log(`unionFindFive: ${2 * n} ops,  ${(endTime - startTime) / 1000} s`)
    }

    // 测试基础版的UnionFindSix, n为数据规模
    static testUnionFindSix(n) {
        const unionFindSix = new UnionFindSix(n);
        let startTime = new Date().getTime();
        
        for (let i = 0; i < n; i++) {
            let p =  Math.floor(Math.random() * n);
            let q = Math.floor(Math.random() * n);
            unionFindSix.union(p, q);
        }

        for (let i = 0; i < n; i++) {
            let p =  Math.floor(Math.random() * n);
            let q = Math.floor(Math.random() * n);
            unionFindSix.isConnected(p, q);
        }

        let endTime = new Date().getTime();
        console.log(`unionFindSix: ${2 * n} ops,  ${(endTime - startTime) / 1000} s`)
    }
}

module.exports = UnionFindTestHelper;