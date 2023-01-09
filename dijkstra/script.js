// hash table to hold other hash tables.
let graph = {};

// we then need to create a hashtable for each node

// start node
graph["start"] = {};
graph["start"]["a"] = 6;
graph["start"]["b"] = 2;

// A node
graph["a"] = {};
graph["a"]["finish"] = 1;

// B node
graph["b"] = {};
graph["b"]["a"] = 3;
graph["b"]["finish"] = 5;

// finish node
graph["finish"] = {}; // the finish node doesn't have any neighbors.

// next is a hash table to store the costs of each node
const costs = {
  a: 6,
  b: 2,
  finish: Infinity,
};

// next is a hash table to store the node parents
const parents = {
  a: "start",
  b: "start",
  finish: null,
};

const processed = [];

const findLowestCostNode = (costs) => {
  let lowestCost = Infinity;
  let lowestCostNode = null;

  for (const node in costs) {
    let cost = costs[node];
    if (cost < lowestCost && !processed.includes(node)) {
      lowestCost = cost;
      lowestCostNode = node;
    }
  }
  return lowestCostNode;
};

let node = findLowestCostNode(costs);

let count = 0;

while (node !== "finish") {
  let cost = costs[node];
  let neighbors = graph[node];

  Object.keys(neighbors).forEach((n) => {
    let newCost = cost + neighbors[n];

    // by having costs[finsish] = Infinity it will always be larger
    // than the newCost variable triggering an update to the cost
    // of the finish
    if (costs[n] > newCost) {
      costs[n] = newCost;
      parents[n] = node;
    }

    processed.push(node);
    node = findLowestCostNode(costs);
  });
}

console.log("Lowest cost path from start to finish is: ", costs.finish);

console.log("parents of nodes: ", parents);

// find the lowest weight node path from start to finish work backwards from
// the parents hash table starting at finish
