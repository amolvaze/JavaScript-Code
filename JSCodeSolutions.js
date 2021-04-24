// Code for the students records manupulation.

function manipulateStudentRecord(obj, operation, prop, newValue) {
  // write your code here
  let result = { ...obj };
  switch (operation) {
    case "delete":
      delete result[prop];
      break;
    case "edit":
      if (result[prop]) result[prop] = newValue;
      break;
    default:
      return result;
  }

  return result;
}

// Code to return the array of string of values with common values can be returned as it is for the matching keys and if the different keys then latest one.

function computeParameterValue(sources) {
  // Write your code here
  let rows = sources.length;
  let cols = sources[0].length;
  let map = new Map();
  let list = [];
  let result = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let split = sources[i][j].split(":");
      let parameter = split[0];
      let value = split[1];
      if (!map.has(parameter)) list.push(parameter);
      map.set(parameter, value);
    }
  }

  for (let i = 0; i < list.length; i++) {
    result.push(map.get(list[i]));
  }

  return result;
}

// Code to return the min abs difference.

function minDiff(arr) {
  // Write your code here
  let sortedArray = arr.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < sortedArray.length - 1; i++) {
    sum += sortedArray[i + 1] - sortedArray[i];
  }
  return sum;
}

// Function to return list of movies using a list by fetching data from an API end point.
// API endpoint: https://jsonmock.hackerrank.com/api/movies?Year=<year>

const axios = require("axios");
async function getMovieList(year) {
  // write your code here
  let result = [];
  try {
    const res = await axios.get(
      `https://jsonmock.hackerrank.com/api/movies?Year=${year}`
    );

    res.data.data.forEach((d) => result.push(d.Title));
  } catch (err) {
    console.log(err);
  }
  return result;
}

// code for function inventory list - to implement add, remove and get list functions
// function should return object with 3 functions named add, remove and get list.
function getInventoryList() {
  let list = [];
  let result = {
    add: function (name) {
      if (name) {
        list.push(name);
      }
    },
    remove: function (name) {
      let index = list.indexOf(name);
      if (index !== -1) {
        list.splice(index, 1);
      }
    },
    getList: function () {
      return [...list];
    },
  };
  return result;
}

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
// A is input array to function

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  function Integer(i) {
    this.intval = i;
  }

  Integer.prototype.value = function () {
    return this.intval;
  };

  let result = [];

  for (let i = 0; i < A.length; i++) {
    let integer = new Integer(A[i]);
    result.push(integer);
  }

  return result;
}
