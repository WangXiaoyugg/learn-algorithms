const  { SparseGraph, SAdjIterator }= require('./SparseGraph')
const  { DenseGraph, DAdjIterator }= require('./DenseGraph')
const ReadGraph  = require('./ReadGraph')
const Component = require('./Component')

function main() {
    // let n = 20;
    // let m = 100;

    // // 时间复杂度：O(E)， E 为边的数量
    // let g1 = new SparseGraph(n, false);
    // for (let i = 0; i < m; i++) {
    //     let a =  Math.floor((Math.random() * n));
    //     let b =  Math.floor((Math.random() * n));
    //     g1.addEdge(a, b);
    // }

    // for (let v = 0; v < n; v++) {
    //     let str = `${v} : `;
    //     let adj = new SAdjIterator(g1, v)
    //     for (let w =  adj.begin(); !adj.end(); w = adj.next()) {
    //         str += `${w} `
    //     }

    //     console.log(`${str}`)
        
    // }
    
    // console.log()
    // console.log('------------------------------------------------------')
    // console.log()

    // // 时间复杂度 O(V^2): 顶点的数量
    // let g2 = new DenseGraph(n, false);
    // for (let i = 0; i < m; i++) {
    //     let a =  Math.floor((Math.random() * n));
    //     let b =  Math.floor((Math.random() * n));
    //     g2.addEdge(a, b);
    // }

    // for (let v = 0; v < n; v++) {
    //     let str = `${v} : `;
    //     let adj = new DAdjIterator(g2, v)
    //     for (let w =  adj.begin(); !adj.end(); w = adj.next()) {
    //         str += `${w} `
    //     }

    //     console.log(`${str}`)
        
    // }

    // let filename = 'testG1.txt';
    // let g1 = new SparseGraph(13, false);
    // let readGraph1 = new ReadGraph(g1, filename);
    // g1.show();

    // console.log();

    // let g2 = new DenseGraph(13, false);
    // let readGraph2 = new ReadGraph(g2, filename);
    // g2.show();

    let filename1 = 'testG1.txt';
    let g1 = new SparseGraph(13, false);
    let readGraph1 = new ReadGraph(g1, filename1);
    let cp1 = new Component(g1, SAdjIterator);
    console.log(`testG1.txt , Component count: ${cp1.count()}`)

    console.log();

    let filename2 = 'testG2.txt';
    let g2 = new DenseGraph(7, false);
    let readGraph2 = new ReadGraph(g2, filename2);
    let cp2 = new Component(g2, DAdjIterator);
    console.log(`testG2.txt , Component count: ${cp2.count()}`)

    
}

main();