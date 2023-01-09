//
// // hash table to hold other hash tables.
// let graph = {};
//
// // we then need to create a hashtable for each node
//
// // start node
// graph["start"] = {};
// graph["start"]["a"] = 6;
// graph["start"]["b"] = 2;
//
// // A node
// graph["a"] = {};
// graph["a"]["finish"] = 1;
//
// // B node
// graph["b"] = {};
// graph["b"]["a"] = 3;
// graph["b"]["finish"] = 5;
//
// // finish node
// graph["finish"] = {}; // the finish node doesn't have any neighbors.
//
// // next is a hash table to store the costs of each node
// const costs = {
//   a: 6,
//   b: 2,
//   finish: Infinity,
// };
//
// // next is a hash table to store the node parents
// const parents = {
//   a: "start",
//   b: "start",
//   finish: null,
// };
//
// const processed = [];
//
// const findLowestCostNode = (costs) => {
//   let lowestCost = Infinity;
//   let lowestCostNode = null;
//
//   for (const node in costs) {
//     let cost = costs[node];
//     if (cost < lowestCost && !processed.includes(node)) {
//       lowestCost = cost;
//       lowestCostNode = node;
//     }
//   }
//   return lowestCostNode;
// };
//
// let node = findLowestCostNode(costs);
//
// let count = 0;
//
// while (node !== "finish") {
//   let cost = costs[node];
//   let neighbors = graph[node];
//
//   Object.keys(neighbors).forEach((n) => {
//     let newCost = cost + neighbors[n];
//
//     // by having costs[finsish] = Infinity it will always be larger
//     // than the newCost variable triggering an update to the cost
//     // of the finish
//     if (costs[n] > newCost) {
//       costs[n] = newCost;
//       parents[n] = node;
//     }
//
//     processed.push(node);
//     node = findLowestCostNode(costs);
//   });
// }
//
// console.log("Lowest cost path from start to finish is: ", costs.finish);
//
// console.log("parents of nodes: ", parents);

// find the lowest weight node path from start to finish work backwards from
// the parents hash table starting at finish

// ============= next exercise ============

const exerciseTwo = () => {
  // create the graph hash table
  const graph = {
    start: {
      a: 5,
      b: 2,
    },
    a: {
      c: 4,
      d: 2,
    },
    b: {
      a: 8,
      d: 7,
    },
    c: {
      d: 6,
      finish: 3,
    },
    d: {
      finish: 1,
    },
    finish: {},
  };
  console.log(graph);

  // create the cost table
  let costs = {
    a: 5,
    b: 2,
    c: Infinity,
    d: Infinity,
    finish: Infinity,
  };

  // create the parents hash table
  const parents = {
    a: "start",
    b: "start",
    c: null,
    d: null,
    finish: null,
  };

  // array to hold already processed nodes
  let processed = [];

  // find lowest cost node
  const findLowestCostNode = (costs) => {
    let lowestCost = Infinity;
    let lowestCostNode = null;

    for (node in costs) {
      //
      const cost = costs[node];
      const nodeNotProcessed = !processed.includes(node);
      //
      if (cost < lowestCost && nodeNotProcessed) {
        lowestCost = cost;
        lowestCostNode = node;
      }
    }
    console.log("lowest cost node: ", lowestCostNode);
    return lowestCostNode;
  };

  const runAlgorithm = () => {
    // get lowest cost node
    let node = findLowestCostNode(costs);
    let count = 0;

    while (node !== "finish" && count < 10) {
      //
      // get the cost of the lowestCostNode
      let cost = costs[node];

      // get hash table that holds node neighbors
      let neighborNodes = graph[node];

      // loop through neighborNodes
      for (const neighborNode in neighborNodes) {
        //
        // store the new cost if we move from lowest cost node to current neighbor
        // node
        const newCost = cost + neighborNodes[neighborNode];

        if (costs[neighborNode] > newCost) {
          costs[neighborNode] = newCost;
          parents[neighborNode] = node;
        }
      }
      // mark node as processed
      processed.push(node);

      // find next lowest cost node
      node = findLowestCostNode(costs);
      count += 1;
    }
  };

  // after the algorithm runs the parents hash table will be updated
  runAlgorithm();

  // now we use the parents table to reverse engineer the best path
  const findLowestCostPath = (parents) => {
    //
    // we know that finish will be at the end of the path so it can be
    // added to the array
    let path = ["finish"];

    let node = "finish";

    let count = 0;

    while (node !== "start") {
      //
      // get the parent of node --> first itteration = d
      const parentNode = parents[node];

      // add the parent node to the left side of the path array
      path.unshift(parentNode);

      // update node
      node = parentNode;
    }

    return console.table(path);
  };

  findLowestCostPath(parents);
};

exerciseTwo();
