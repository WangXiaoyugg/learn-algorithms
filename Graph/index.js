const  { SparseGraph, SAdjIterator }= require('./SparseGraph')
const  { DenseGraph, DAdjIterator }= require('./DenseGraph')
const ReadGraph  = require('./ReadGraph')
const Component = require('./Component')
const Path = require('./Path')
const ShortestPath = require('./ShortestPath');

function main() {
    let filename = 'testG.txt';
    let g = new SparseGraph(7, false);
    let rg1 = new ReadGraph(g, filename);
    g.show();

    console.log();

    // 比较深度优先遍历和广度优先遍历获得路径的不同
    // 广度优先比那里获得的是无权图的最短路径
    let dfs = new Path(g, SAdjIterator, 0);
    console.log(`DFS path from 0 to 6: `);
    dfs.showPath(6);

    let bfs = new ShortestPath(g, SAdjIterator ,0);
    console.log(`BFS path from 0 to 6: `);
    bfs.showPath(6)
    
    console.log();

    
    
}

main();