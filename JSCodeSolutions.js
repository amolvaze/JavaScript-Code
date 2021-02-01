// Code for the students records manupulation.

function manipulateStudentRecord(obj, operation, prop, newValue) {
  // write your code here
  let result = {...obj};
  switch(operation){
    case 'delete' :  delete result[prop];
                     break;
    case  'edit' :   if(result[prop]) 
                     result[prop] = newValue;
                     break;
    default:  return result;
      
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
    let result = []
    for(let i=0; i< rows; i++){
        for(let j=0; j< cols; j++){
          let split = sources[i][j].split(":");
          let parameter = split[0];
          let value =     split[1];
          if(!map.has(parameter))
           list.push(parameter);
           map.set(parameter, value);
        }
    }
    
    for(let i=0; i< list.length; i++){
        result.push(map.get(list[i])) 
    }
    
    return result;
}

// Code to return the min abs difference.

function minDiff(arr) {
    // Write your code here
    let sortedArray = arr.sort((a,b) => a-b);
    let sum =0;
    for(let i=0; i< sortedArray.length-1; i++){
        sum += sortedArray[i+1]-sortedArray[i];
    }
     return sum;
    
}
function main() {
