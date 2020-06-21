//Given sample alphanumerical string -- find the first character that doesn’t repeat on string

Link:- https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0 - Obj concepts

function firstNonRepeatedCharacter(string) {
    for (var i = 0; i < string.length; i++) {
        var c = string.charAt(i);
        if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
            return c;
        }
    }
    return null;
}

var someString = 'aabcbd';
console.log(firstNonRepeatedCharacter(someString));

------------------------------------------------------------------

//Write a program to encode a string in below format: 

//aabbbcc => a2b3c2

//aaa => a3                                

//aabbaa => a2b2a2    


function encodeString (string) {  
  var dic = {};
   string.split('').forEach(function(s) {
     dic[s] ? dic[s]++ : dic[s] = 1;
  });
 
 for (const key in dic) {
   const value = dic[key]
   console.log(`${key}${value}`)
}
  
}


var str = "aabbaa"
console.log(encodeString(str))


----------------------------------------------------------------------------

//Given an array of integers and a target, write a function to return all the pairs that have summations equal to target


function arraypair(array,sum){
        for (var i = 0;i < array.length;i++) {
            var first = array[i];
            for (var j = i + 1;j < array.length;j++) {
                var second = array[j];

                if ((first + second) === sum) {
          console.log(first+" "+second);
                }
            }

        }
}



var arr = [2, 4, 3, 5, 6, -2, 4, 7, 8, 9];
var target = 7;
console.log(arraypair(arr, target))


--------------------------------------------------------------

//Find the second largest smallest number given an array as an input

// largest

function second_largest(arr){
arr.sort(function(a, b){return b - a});
  console.log(arr);
return (arr[1]);
}

// smallest

function second_smallest(arr){
arr.sort(function(a, b){return a - b});
  console.log(arr);
return (arr[1]);
}

var arr = [40, 100, 1, 5, 25, 10];
console.log(second_largest(arr));
console.log(second_smallest(arr));

-------------------------------------------------------------------

//Find Missing Characters in a pangram which is sentence having all characters of the alphabets .e.g “The quick brown fox jumps over the lazy dog.”  
  
function isPangram(sentence) {
    sentence = sentence.toLowerCase().split('');
    var alphabet = ['a', 'b', 'c', 'd','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    for(var i = 0; i < alphabet.length; i++){
      if(sentence.indexOf(alphabet[i]) === -1) {
        return false;
      }
    }
    return true;
  }


var str = 'The quick brown fox jumps over the lazy dog';

console.log(isPangram(str))

-------------------------------------------------------------------------------
  
  //find if a string is palindrome

function palindrome(string) {

  string = string.toLocaleLowerCase();
  return Array.from(string).toString() === Array.from(string).reverse().toString()


}

console.log(palindrome("Nitin"))

-------------------------------------------------------------------------------

// Closures in JS example 1
function addNumbers(first, second){

var resultValue = "Result is: ";

function add(){
	
	return resultValue + (first + second);
}
	return add;
	
	
	
}

var result = addNumbers(10,20)();
document.write(result):

// example 2

var incrementClickCount = (function() {

  var clickCount = 0;
   return function() {
	   
	   return ++clickCount;
	   
   }  	
})();

document.write(incrementClickCount());

--------------------------------------------------------------------------------------------------------
// Function to remove duplicates from Array using filter.

function removeDuplicates(arr) {

var result = arr.filter(
 
function (value, index, arr) {

  return arr.indexOf(value) == index;


}  
  

);
  
console.log(result);  
  
}


var arr = [1,2,1,1,3,5,5,5,7,7,1];
console.log(removeDuplicates(arr))

----------------------------------------------------------------------------------------------------------------

// Function to retrurn even numbers from givrn array using filter method

function evenNumbers(arr) {

var result = arr.filter(
 
function (value, index, arr) {

  
  return value%2 ==0

}  
  

);
  
console.log(result);  
  
}


var arr = [1,2,1,1,3,5,5,5,7,7,14];
console.log(evenNumbers(arr))



How to prevent re-rendering of component in react:- 

Solution:- 

....
state = {myComponentDisplayStatus: false};
....
myComponentDisplayMethod = props => { .... };
....
render() {
  return (
    <>
      ....
      {myComponentDisplayStatus && <MyComponentOne />}
      ....
      {myComponentDisplayStatus ? <MyComponentTwo /> : null}
      ....
    </>
  );
};
....

----------------------------------------------------------------------------------------------------------------

To write code for this function: sum(a)(b)(c)....( n)(). 

This should return the sum of a+b+c....+n. Que in interview at Amazon. 

Resursion is used here

Solution - https://www.youtube.com/watch?v=D5ENjfSkHY4&list=PLlasXeu85E9eLVlWFs-nz5PKXJU4f7Fks&index=13

Using a closure  using ES6 Syntax 

let sum = function (a) {
  let closureFunc = b =>  b ? sum(a + b) : a;
  closureFunc.toString = () => a;
  return closureFunc;
}
alert(sum(10)(2)(3)(4));



without parenthesis using ES6 Syntax

let sum = a => b => b ? sum(a + b) : a;

console.log(sum(10)(20)(3)(4)());
















