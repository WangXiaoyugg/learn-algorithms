const  { SparseGraph, SAdjIterator }= require('./SparseGraph')
const  { DenseGraph, DAdjIterator }= require('./DenseGraph')
const ReadGraph  = require('./ReadGraph')
const Component = require('./Component')
const Path = require('./Path')

function main() {
    let filename = 'testG.txt';
    let g = new SparseGraph(7, false);
    let rg1 = new ReadGraph(g, filename);
    g.show();

    console.log();

    let path = new Path(g, SAdjIterator, 0);
    console.log(`Path from 0 to 6: `);
    path.showPath(6);
    
}

main();