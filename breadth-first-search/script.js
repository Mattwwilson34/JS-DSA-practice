let graph = {};

graph["you"] = ["alice", "bob", "claire"];
graph["bob"] = ["anuj", "peggy"];
graph["alice"] = ["peggy"];
graph["claire"] = ["thom", "jonny"];
graph["anuj"] = [];
graph["peggy"] = [];
graph["thom"] = [];
graph["jonny"] = [];

const personIsSeller = (name) => {
  return name[name.length - 1] === "y";
};

const search = (name) => {
  //
  let searchQue = [...graph[name]];
  let searched = [];

  console.log(searchQue);

  while (searchQue) {
    const person = searchQue.shift();
    console.log(person);

    // check if person has already been searched
    if (!searched.includes(person)) {
      // check if person is a seller
      if (personIsSeller(person)) {
        console.log(`${person} is a mango seller`);
        return true;
      }
      // if person is not a seller add friends to grap and person to searched
      searchQue = [...searchQue, ...graph[person]];
      searched.push(person);
    }
  }
  return false;
};

search("you");
