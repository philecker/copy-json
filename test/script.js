// Description: Test script for copy-json
import copyJSON from 'copy-json';

var jsonObj = {
  "name": "John",
  "age": 30,
  "cars": [
    {
      "name": "Ford",
      "models": ["Fiesta", "Focus", "Mustang"]
    },
    {
      "name": "BMW",
      "models": ["320", "X3", "X5"]
    },
    {
      "name": "Fiat",
      "models": ["500", "Panda"]
    }
  ]
}

var copiedJSON = copyJSON(jsonObj);

console.log(copiedJSON === jsonObj);