const fs = require('fs');
const path = require('path');

class ReadGraph {
    constructor(graph, filename) {
        const data = fs.readFileSync(path.join(__dirname, filename), 'utf-8');
        const lines = data.split(/\r?\n/);
        const firstLine = lines.shift();
        // 第一行代表 V 代表顶点数， E 代表边数
        let [V, E] = firstLine.split(' ');
        V = parseInt(V);
        E = parseInt(E);

        console.assert(V === graph.V());

        lines.forEach((line) => {
            // 每一行代表两个顶点
            let [v1, v2] = line.split(' ');
            v1 = parseInt(v1);
            v2 = parseInt(v2);

            console.assert(v1 >= 0 && v1 < V);
            console.assert(v2 >= 0 && v2 < V);
            graph.addEdge(v1, v2);
        })
    }
}


module.exports = ReadGraph;



module.exports = ReadGraph;