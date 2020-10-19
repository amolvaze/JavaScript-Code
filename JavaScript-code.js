// Compiled by Amol on 3 Oct, 2020

//Given sample alphanumerical string -- find the first character that doesn’t repeat on string

//Link:- https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0 - Obj concepts

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

//------------------------------------------------------------------

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


//--------------------------------------------------------------

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

// function to return the total no of arguments without using any loop
let x = function() {
	return [].slice.call(arguments).length;
}

console.log(x(1,2,3,4,5)); // output should be 5 as length is 5 


// arguments do not bind well with arrow functions.. never use it with arrow function

let a = () => arguments;
a('hi'); // this wont work due to arrow function with arguments

//To fix it use this
let a = (...n) => { return n; }; // use ...n rather 
console.log(a('hi'));

// if we convert above to regular function, it will print hi.

let a = function() {return arguments; }
a('hi');

// Object.freeze - Dont allow to add new property
// Object.seal - Allows to modify property but not to add new property
// Object.definedProperty - Allows to modify certain property. 


console.log( NaN == NaN) or 
console.log( NaN === NaN) // output should be false 


console.log(typeof undefined === typeof NULL)  // true -->The expression will be evaluated to true, since NULL will be treated as any other undefined variable.
console.log(typeof typeof 1)  // String -- > typeof 1 will return "number" and typeof "number" will return string.

// undefined - Undefined variable or property

// null - Property does exists but holds no value.

// JS Splice Method - to add or remove array elements
/* 
The splice() method adds/removes items to/from an array, and returns the removed item(s).

Note: This method changes the original array. */

var array = [1,2,5];
array.splice(2,0,3,4);
console.log(array);

var array = [1,2,55,67,3];
array.splice(2,2);
console.log(array);

// JS Slice Method 
/* The slice() method returns the selected elements in an array, as a new array object.

The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument. */

// ex.
var array = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var sliceArray = array.slice(1,3); // slice out given array from the index 1 and excludes end idnex that is 3rd Orange
console.log(sliceArray);

//-------------------------------------------------------------------

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

//-------------------------------------------------------------------------------
  
  //find if a string is palindrome

function palindrome(string) {

  string = string.toLocaleLowerCase();
  return Array.from(string).toString() === Array.from(string).reverse().toString()


}

console.log(palindrome("Nitin"))

// Using Arrow Function

let palindrome = (str) => {
  return str.toLowerCase().split("").toString() === str.toLowerCase().split("").reverse().toString()
};

console.log(palindrome("Nitin")); // returns true 

// -------------------------------------------------------------------------------

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

console.log(incrementClickCount()); // output should be 1 

// above ex using an arrow function

var incrementCount = (() =>  {
    var counter=0;
    return function() {
       return ++counter;
    }
})();

console.log(incrementCount());

// Another example
let f;

if(true){
  let i =1;

  f = () => {
    console.log(i);
  }

}

console.log(f);

f();


// Another example 

// Concept of JS Currying

function makeAdder(x) {
 return function(y){
  return x + y;
 }
}

var add5 = makeAdder(5);
console.log(add5(2));

var add10 = makeAdder(10);
console.log(add10(2));

// currying another example 

var sayWhat = function(a) {
   return function(b) {
      return function(c){
   console.log("Saying.."+ a + "to " +b+  "using " + c );
      }
     
   }
}

sayWhat('hello')('tofriends')('javascript')

var sayHi = sayWhat('Hi');
var sayHiToMe = sayHi('Me');
var sayHiToMeUsingNothing = sayHiToMe('nothing'); 

// Output
//Saying..helloto tofriends using javascript
//Saying..Hito Me using nothing

//--------------------------------------------------------------------------------------------------------
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

//----------------------------------------------------------------------------------------------------------------

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



//How to prevent re-rendering of component in react:- 

//Solution:- 

// ....
// state = {myComponentDisplayStatus: false};
// ....
// myComponentDisplayMethod = props => { .... };
// ....
// render() {
//   return (
//     <>
//       ....
//       {myComponentDisplayStatus && <MyComponentOne />}
//       ....
//       {myComponentDisplayStatus ? <MyComponentTwo /> : null}
//       ....
//     </>
//   );
// };
// ....

//----------------------------------------------------------------------------------------------------------------

//To write code for this function: sum(a)(b)(c)....( n)(). 

//This should return the sum of a+b+c....+n. Que in interview at Amazon. 

//Resursion is used here

//Solution - https://www.youtube.com/watch?v=D5ENjfSkHY4&list=PLlasXeu85E9eLVlWFs-nz5PKXJU4f7Fks&index=13

//Using a closure  using ES6 Syntax 

let sum = function (a) {
  let closureFunc = b =>  b ? sum(a + b) : a;
  closureFunc.toString = () => a;
  return closureFunc;
}
alert(sum(10)(2)(3)(4));



// without parenthesis using ES6 Syntax

let sum = a => b => b ? sum(a + b) : a;

console.log(sum(10)(20)(3)(4)());


Difference between JavaScript forEach vs JavaScript Map - https://codeburst.io/javascript-map-vs-foreach-f38111822c0f


var array = [1,2,3,4,5];
// Using forEach 
array.forEach((num, index) => {
  return array[index] = num *2; 
});

console.log(array);

// Using Map
var resultArray = array.map((num, index) => {
    return num * 2;
});

console.log(resultArray);

// -----------------------------Arrays.from------------------------------------------------------


const fromScratch = Array.from({length: 5}, (v,i) => i * i);
const fromScratch = (new Array(5)).fill(0).map((v,i) => i)
 console.log(fromScratch)

 const array = [1,1,2];
// remove duplicate 

const unique = Array.from(new Set(array)); // Set removes duplicates and when Array.from is applied to it, it converts set into an array

// Same Above using speard operator 

const unique = [...new Set(array)]

console.log(unique)

const func = function() {
  //console.log(arguments)
  console.log(Array.from(arguments).join('')) // using Array.from which converts into array and then simply joining
}

func('t','e','c','h');

----------------------------------------------------------JS Mock Interview Questions and Solutions --------------------------------------------

1. let x = { a:1, b:2};  // to convert given object into array and print 1 and 2.
const array = [];

for ( let i in x)
{
 array.push(x[i]);
}

console.log(array);

2. let x = "hi"; // to x x to y
let y = "ih";

const reverseStr = (str) => str.toLowerCase().split('').reverse().join('');
console.log(reverseStr(x) === y);

3. const obj ={  // to make  modification to code to print values of the object. 
	 a:1,
	 b:2,
	 getA(){console.log(this.a); return this; // we need to return this  },
	 getB(){console.log(this.b)}	
};

console.log(obj.getA().getB());

4. [1,2] .print() //1, 2

[1,2] // to print the values of this array

//let print = [1,2];
Arrays.prototype.print = () => {
  let result = '';
  for( let [i, elem] of this )
  {
     if( i == this.length)
      {
            result+= elem;
      }
     else
     {
          result +=`${elem},`;
     }
  }

  console.log(result);

}

5.  // 
const a = function(x){
	this.x= x;
};

a.prototype = {
	 
	 getX() {return this.x; }
	
}

const b = function(x,y){
	this.y= y;
	// this.x = new a(x).x // 
	// or use call here
	a.call(this,x);
	getY(){
		return this.y;
	}
	
};


const newB= new b('x', 'y');
newB.getX();
newB.getY();

6.

//To clone given object using Object.assign gives shallow copy. We need deep cloning here

const obj = {
  a: {
     b: {
       c: 1 }
  }

};

// to clone given object
//const clone = Object.assign({}, obj); // shallow copy but it is only one level object and does not go as reference. 
const clone = JSON.parse(JSON.stringify(obj)); // deep copy converts to string so no reference will be left. 


clone.a.b.c =2 ;
console.log(obj.a.b.c);

7.

// To create new array c which will merge two given array and keep it sorted.

const a = [1,2,5,7,9];
const b = [2,5,7,12, 1000]; // it could be huge array like millions of values. 

// to create array c by merging a and b.

const c = a.concat(b).sort((a,b) => a -b); // using sort takes n logn time 

console.log(c);

//To do in n comparions we can have two pointer approach. so 2n time which is faster than n log n


8.
// const obj = {
//    x:1,
//    getX(){
//     const inner = function()
//      {
//        console.log(this.x);
//      }
//      inner();
//    }
// };

// console.log(obj.getX()); // undefined as this is out of scope.
// to fix above convert inner to arrow function as shown

const obj = {
   x:1,
   getX(){
    const inner = () =>
     {
       console.log(this.x);
     }
     inner();
   }
};

console.log(obj.getX()); 


// // Keepint regular function fix for the above is

// const obj = {
//   x:1,
//     getX(){
//      const inner = function()
//       {
//         console.log(this.x);
//       }
//       inner.bind(this)();
//    }
//  };

// console.log(obj.getX()); 


9. let a = [1,2,5,7];

// to sum all array elements

let result = a.reduce((acc,item) => acc+item );

console.log(result);

10. 

// add(1,2)
// add(1)(2)
// To write ways to add these two functions

function add (x)
{
  if(arguments.length == 2)
   {
     return arguments[0] + arguments[1];
   }
   else return function(y)
   {
         return x +y;
   }
}

function add(x,y) {
 
if( y !== undefined) {
  return x + y;
}
else return function(y)
 {
   return x +y;
 }

}

console.log(add(1,2));

// To find the missing no in given array
11. 
let array = [1,2,4,5,6,7];

let n = array.length;

let total = n * (n + 1)/2;

let arrrayTotal = array.reduce((t,i) => t +i);

console.log(JSON.stringify(total-arrrayTotal));

12. 
function x() {} and let x = function() {} // difference between these 2 functions 

// scope wise function and variables are hoisted. 
// First one is funtion declaration and second one is function is function expression.

(function x() {}) 

// it is also expression once wrapped around with brackets.

// immediately invoked expression or function or annonymous function

(function x() {}) ();

13. Given const till = {
	
	penny: 12,
	nickel: 10,
	dine: 2,
	quarter:12,
	dollar : 30
};

// converting everything to one unit
const value ={
	penny: 1,
	nickel:5,
	dine:10,
	quarter:25,
	dollar:100
};

// 20.47 to return this amount back. To write a function for that

function money(total)
{ 
   let cT = total * 100; // converting into single unit
   let reminder = cT%value.dollar;
   let dollar = cT- reminder;
   // do same thing for everthing or loop thru value object to do ....
}

14. 

let str = "i love javascript" // to reverse this string


const str = "i love javascript" // to reverse this string
const reverseStr = str => str.toLowerCase().split('').reverse().join('');

console.log(reverseStr(str));

// if we need output as javascript love i, then use the following 

const reverseStr = str => str.toLowerCase().split(' ').reverse().join(' ');

15. 

const array = [1,2,3,4];
// to find out max and min sum of the given array. - e.g maxSum - 2+3+4= 9 and minSum = 1+3+4= 6

function findMinMax(array)
{
	let minNo = Math.min.apply(null, array);
	let maxNo = Math.max.apply(null, array);
	let arraySum = array.reduce((acc,item) => acc + item);
	let minSum = arraySum - minNo;
	let maxSum = arraySum- maxNo;
	return JSON.stringify({minSum: minSum, maxSum: maxSum});
	
}

 alert(findMinMax(array));

16. let x =1234; // to find out the length of the no  len= 4 without converting into string

let findLength = (n) => {
  var count = 0;
  if (n >= 1) ++count;

  while (n / 10 >= 1) {
	// console.log(n);
    n /= 10;
    ++count;
  }

  return count;
}

console.log(findLength(x));

16.

const profile  = {
	name: 'techsith',
	getName: () => {console.log(this.name)};
	
};

console.log(profile.getName()); // it will output undefined. To fix change arrow function to regular function as follows

const profile  = {
	name: 'techsith',
	getName: function() {console.log(this.name)}
	
};

console.log(profile.getName());


17.

let x = [1,2,2,4,2,4]; // 2 4's = 2 max nos - to find the count of max nos in given array

let resultArray = Math.max(...x);
let count = 0;
for(let i= 0; i< x.length; i++)
{
  if(resultArray == x[i])
    {
      count+=1;
    }
}

console.log(count);


18. 

const arr = [5,120,15,21];

for(let i=0; i < arr.length; i++)
{
	setTimeout( ()=> {
			console.log(`Index: ${i}, element: ${arr[i]}`);
	}, arr[i] );
	
}

// Output as follows: 

/* Index: 0, element: 5
Index: 2, element: 15
Index: 3, element: 21
Index: 1, element: 120 */


19.

let time = '01:02 PM' // to convert this 12 hr time given time to 24 hr time format.

const conver12To24hr = time => {
  
  let [newTime, modifier] = time.split(' ');
  
   let [hours , minutes] = time.split(':');

   if(hours === 12)
   {
     hours = '00';
   }

   if(modifier === 'PM')
   {
    hours = parseInt(hours, 10) + 12; 
   }
   return `${hours}:${minutes}`;

}

console.log(conver12To24hr(time));

// Another solution for this problem


let time = '03:02PM' // to convert this 12 hr time given time to 24 hr time format.
let solution = time.endsWith('AM') ? time.substr(0,5) : parseInt(time.substr(0,2))+12 + time.substr(2,3);
console.log(solution);

20.

// Concept of method chaining

let x = {
  a() {

  },
  b() {

  }
};

// to print output for 

x.a().b().a().a();// what do we need add for this to work 

//need to add return this.

// Concept of method chaining

let x = {
  a() {
  return this;
  },
  b() {
   return this;
  }
};

21.

let x = 2; // to convert no to hex.
console.log(x.toString(16));

22. Fizbuzz program 

let fizbuzz = () => {
	
for(let i =1; i<=100; i++)
{
	 let str = '';
   if(i%3 == 0) 
	  {
  str +='Fizz';
    }
if(i%5==0)
    {
   str +='Buzz';
     }
 
 console.log(i+str);
     
}
	
}

console.log(fizbuzz());

// Another variation for above to print United, States and United States
let print = () => {
  for(let i=1; i<=100; i++){
    let str ='';
    if(i%3 == 0) {
      str += ' United'
    }
    if(i%5 == 0) {
      str += ' States'
    }
   console.log(i+str);

  }
}

print();

23.

// To find the GCD of two given nos - recusrive way
let findGCD = (a,b) =>
{
  if(!b) {
    return a;
  }

  // make a recrusive call

  return findGCD(b, a%b);
}

console.log(findGCD(5,15));



24. 

 // n kids are sitting in a circle, k toys are available to distribute and i is the position to start from 

 //then to find out the last kid to which the toy is given to e.g 3,5,1 =2

let getLastKid = (n,k,i) => // n = 3, k =5 and i =1 -start position
{
  if( k > n)
  {
    return i+(k%n) -1;    // 1 + (5%3) - 1  = 2
  }

  else
  {
    return i + n -1;    // 1 + 3-1 = 3
  }

}

console.log(getLastKid(3,5,1)); // output should be 2.

25.

// Code to add border values.

const matrix = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1]
];

const addBorderValues = (m) => {
  const cl = m.length;
  const rl = m[0].length;
  let sum = 0;

  for (let c = 0; c < cl; c++) {
    for (let r = 0; r < rl; r++) {
      if (c === 0 || c === cl - 1 || r === 0 ||  r === rl - 1) {
				 sum  += m[c][r];
      }
    }
  }
  return sum;
}

console.log(addBorderValues(matrix))



26.

// custom reduce function 

Array.prototype.myReduce = function(fn, init) {
   var b = 0;
   if( typeof init === 'undefined')
   {
     b=1;
     init= this[0];
   }

   let current = init;
   for(let i =b; i < this.length; i++)
   {
     current = fn(this[i], current);
   }
  return current;
}

console.log(['1','2','3'].myReduce((c,v) => c+v));


27.

function f(a,b,c){
    if(arguments.length===0) return 0;
    if(b===undefined && c===undefined){
        return function(x){
            return function(y){
                return (a+x)*y;
            }
        }
        
    } 
    else if(c===undefined){
        return a+b;
    }
    else {
        return (a+b)*c;
    } 
}

console.log(f(1)(2)(3));
console.log(f(2)(2)(1));
console.log(f(2,2,1));
console.log(f());


28.

// To sum ages for all the kids under the profile object.

const profile = {
name: "Peter",
age: 56,
kids: [{
    name: "jill",
    age : 23,
    kids : [{
      name: "jeter",
      age : 1
    },
     {
      name: "bill",
      age : 2
    }]
}]
}

let result = JSON.stringify(profile).match(/\d+/gi).reduce((a,c)=> a + parseInt(c), 0);

console.log(result);

// Another solution 
const addMemberAge = ({ age, kids = [] }) =>
    [age]
      .concat(...kids.map(addMemberAge))
      .reduce((accumulator, currentValue) => accumulator + currentValue);
	  
  console.log(addMemberAge(profile));

29.

// Education System game - to limit the total sum -

// x + y  >=10 - To print 10 problems such as 1+3=, 3+4= ....etc these 2 nos should not execeed 10 and to print 5 problems.

// Simple solution 

// function is accepting two arguments 

let kidsGame = (num1, num2) => {
   for(var i =0; i< 5; i++)
   {
     var one = Math.floor(Math.random() * num1);
     var two = Math.floor(Math.random() * num2);
     let result = +one+ "+" +two+ "=";
     console.log(result); 
   }
}

console.log(kidsGame(10,10));


30.
const obj = { x:1; }

obj['y'] = 2;

// To prevent above object to modify the value we will use Object.freeze

// Object.definedProperty( obj , {writable: false; } )

const obj = { 
  x:1
   }

// Object.defineProperty(obj, 'y', {
//   //value: 42,
//   writable: false
// });

// Object.freeze(obj);
obj['y'] = 2;
console.log(obj);

31.

// 12521 - to check given no is palindrome or not without converting into string

const isPalindrome = n => {
  let final = 0;
  let givenNumber = n;
  while (givenNumber > 0) {
    let remainder = givenNumber % 10;
    givenNumber = parseInt(givenNumber / 10);
    final = final * 10 + remainder;
  }
  return final === n;
};
console.log(isPalindrome(12521));
console.log(isPalindrome(1252134));

32. // Use of arrow function

const profile = {
	fistName: '',
	lastName: '',
    setName: function(name){
		let splitName = function(n) {
		 let nameArray = n.split(' ');
		 this.firstName = nameArray[0];
		 this.lastName = nameArray[1];
		 }
		 splitName(name);
		
	}	
}

profile.setName('john doe');
console.log(profile.firstName); // it wont print anything

// To fix above, use arrow function as follows
const profile = {
	fistName: '',
	lastName: '',
    setName: function(name){
		 let splitName = (n) => {
		 let nameArray = n.split(' ');
		 this.firstName = nameArray[0];
		 this.lastName = nameArray[1];
		 }
		 splitName(name);
		
	}	
}

profile.setName('john doe');
console.log(profile.firstName);

// Arrow function does not have his own this so arrow function is setting it for profiel object
// and it is able to print it.

33.

// Prototypal inheritance example - all the methods are available 
// automtically even if there are thousand objects.

let Car = function(model) {
  this.model = model;
}

Car.prototype.getModel = function() {
  return this.model;
}

let toyota = new Car('toyota');
console.log(toyota.getModel());

let nissan = new Car('nissan');
console.log(nissan.getModel());


34. // Difference between function declaration and function expression

function fn() 
{
	console.log('function declaration');
}

let fn = function(){
	console.log('function expression'); // annonymous function assigned to variable 
}


35. // JS Closure example - function has access to i variable.

let obj = function() {
  let i =0;
  return {
    setI(k)
    {
      i=k;
    },
    getI(){
      return i;
    }
  }
};

let x = obj();
x.setI(2);
console.log(x.getI());
x.setI(4);
console.log(x.getI());

36 // To remove duplicates from an array using different approaches

let a = [1,2,5,2,1,8];
let length = a.length;
let b = [];
//to remove duplicates from an array
//apprach 1
for(let i=0; i< length; i++){
 if(b.indexOf(a[i]) === -1 ){
   b.push(a[i]);
 }
}

console.log(b);
//time complexity for above - O(n^2)
//approach 2
//sing filter
function removeDuplicates(a) {

var result = a.filter(function(value, index, a){
  return a.indexOf(value) == index;
});
  
console.log(result);  
  
}
console.log(removeDuplicates(a))

//approach 3

a.sort(); // sort given array first.
let temp;
for(let i=0; i< length; i++)
{
   if(a[i] !== temp)
   {
     temp = a[i];
     b.push(a[i]);
   }
}

console.log(b);

//complexity - n + log n due to sorting

apprach 4 - using  JS object
obj = {};
for(let i of a) // i takes value and not index here 
{
  obj[i] = true;
} 

let b1 = Object.keys(obj);
console.log(b1);

//O(n) time complexity; it is faster.

//apprach -5 - Using Set Data structure 

//let bSet = new Set(a); // it wont give array so we need to do usign speard operator as follows.

//console.log(bSet);

//using speard operator 
console.log([...new Set(a)]); // single line solution using Set

37.

// To loop thru given array and print the sum 
let a = [1,2,4,5,6];

let resultArray = a.map(a => {return a; });
let sumArray = a.reduce((acc,ele) => acc+ ele);
console.log(resultArray);
console.log(sumArray);

38.

// Closure fix using var and let 

// Below for loop will output -0,1,2 because after every iteration it will create new i
for(let i=0; i< 3;i++)
{
  setTimeout(()=>{
    console.log(i);
  }, 1000);
}

for(var i=0; i< 3;i++)
{
  setTimeout(()=>{
    console.log(i);
  }, 1000);
}
// if we change var instead in above, it will print 3,3,3 - because every time same i will change the variable values for closure.

// To fix this, by keeping var as before in the above case and wrapping setTimeOut code inside function and self-invoking itself will print again 0,1,2.

for(var i=0; i< 3; i++){
  ((i) => {
     setTimeout(()=> {
    console.log(i)
  }, 1000);
  })(i);
 
}

console.log('Printing... ')

39.
// JS Iterator 

let a = [1,2,3,4,5,6];
let iterator = a[Symbol.iterator]();

console.log(iterator.next())

console.log(iterator.next())

console.log(iterator.next())

console.log(iterator.next())

console.log(iterator.next())

console.log(iterator.next())


console.log(iterator.next())


40. // To print array elements using setTimeOut

var a = ["A", "B", "c" , "D", "E"];

var printArray = () => {
  
  for(let i=0; i< a.length; i++) {
    
     (function(i) {
       setTimeout(()=> {
      console.log(a[i]);
  }, 1000);
     } ) (i);
  
  }


}

printArray();

41.

//To find the sum of frequency in an array

var a = [];
[1,2,4,5,6].map(value => {
  [1,2,4,5,6].map(val => {
   if(val+value == 7) {
     console.log(val+""+value);
     a.push(val);
     a.push(value);
   }
  })
});

console.log("Final", a);
console.log("R Final", new Set(a));
console.log("R A Final", Array.from(new Set(a)));


42. // To write a function without DOM manipulation

let divs = document.querySelectorAll('div');

divs.forEach(function (e, index) {
  e.onclick = () => {
  	alert(e.innerHTML + ' alerts ' + e.innerHTML);
  };
});


43. // To write a function to get data from API 

// Given URL for API and using a fetch 

  const getData = (key) =>{
	fetch('https://www.omdbapi.com/?i=tt3896198&apikey='+key)
  .then(response => response.json())
  .then(console.log);
}

const key = '212bbf8a';
getData(key);

44.

// To write function the sum and product of the given arguments

const calc = (math) => {
   let finalValue = 0;
   let innerOne = (a,b) => {
      if(math === "sum"){
        return a + b;
      }
      else
      {
        return a * b;
      }
   }
   
   return innerOne;
   


let innerTwo = (a,b) => {
     if(math === 'sum'){
     return finalValue + a +b;
     }
     else{
     return finalValue *a *b;
     }
     
   return finalValue;  
}
  
   return innerTwo;

}
console.log(calc('sum')(1,2));
console.log(calc('product')(3,4));

45.
// Function to reverse the string  where each word is separated by the single space and there wont be any extra space in a string.
function revereStr(str){
  return str.split(" ").map(function(item){
     return item.split("").reverse().join("");
  })
}

console.log(revereStr("Let's go for a walk."));


46. // To write code to change the color of the given content of Paragraph after every second.

// <p>Change color randomly</p>

// jQuery Code

// Define some colours
var colours = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple"    
];

// Retrieve the words
var text = $("p").html().split(" ");

// Empty the elment
$("p").empty();

// Iterate over the words
$.each(text, function(i, word) {
    if(i != text.length) {
        word += " "; // Add space after word 
    }
    
     // Get random color
    var colourIndex = Math.floor(Math.random() * colours.length);
    
    $("<span>")
        .html(word)
        .css("color", colours[colourIndex])
        .appendTo($("p"));
});

47. 

//To write a function to find the sum of array elements

let sumFinder = (arr, sum) => {
  let length = arr.length;
  for(let i=0; i < length-1; i++) {
     for(let j = i +1; j< length; j++) {
        if(arr[i] + arr[j]  === sum) {
           return true;
        }
     }
  }

  return false;
}

console.log(sumFinder([1,2,5,4,5,7,8,8], 9)); 

48.//  To find the length of the JS object.


/**
 * @constructor
 */
AssociativeArray = function () {};

// Make the length property work
Object.defineProperty(AssociativeArray.prototype, "length", {
    get: function () {
        var count = 0;
        for (var key in this) {
            if (this.hasOwnProperty(key))
            count++;
        }
        return count;
    }
});


var a1 = new AssociativeArray();
a1["prop1"] = "test";
a1["prop2"] = 1234;
a1["prop3"] = "something else";
console.log("Length of array is " + a1.length);


49. // How do I test for empty JS object

var a = {}; //Blank Object
var b = {name: 'FirstName', surname: 'LastName'};
var c = new Object(); //Blank Object
var d = [];
d.push('Hello');
d.push('World');

//Note: 'a','c' are blank objects, whereas, 'c' and 'd' are not..

// Pushing all the objects in an array..
var arr = new Array();
arr.push(a,b,c,d);

//console.log('arr', arr);
let length = arr.length;
// Looping and checking which objects are empty.. 
for(let i =0; i< length; i++) {
    if(JSON.stringify(arr[i]) !== '{}') {
        console.log('Not Empty', arr[i]);
    } else {
        console.log('Empty', arr[i]);
    }
}


50. // How to add js Proxy for nested Objects

// Example

var validator = {
  set (target, key, value) {
    console.log(target);
    console.log(key);
    console.log(value);
    if(isObject(target[key])){
      
    }
    return true
  }
}


var person = {
      firstName: "alfred",
      lastName: "john",
      inner: {
        salary: 8250,
        Proffesion: ".NET Developer"
      }
}
var proxy = new Proxy(person, validator)
proxy.inner.salary = 'foo'

51.
   // jQuery function to count the no of cells in table for the given HTML
   /* <h3>Some test tables</h3>
<div>
<p>First table</p>
    <table>
        <tr>
            <td>First</td>
            <td>row</td>
        </tr>
        <tr>
            <td>and</td>
            <td>second</td>
            <td>row</td>
        </tr>
        <tr>
            <td>and</td>
            <td>the</td>
            <td>third</td>
            <td>one</td>
        </tr>
    </table>
</div>
<p>Second table</p>
<table>
    <tr>
        <td>Not</td>
        <td>so</td>
    </tr>
    <tr>
        <td>many</td>
        <td>cells</td>
    </tr>
</table> */
 var $tables = $('table');
 //console.log($tables.length);
      if($tables.length === 0) console.log(0);
      var maxCells=0;
      $tables.each(function( index ) {
      var $table = $(this);
      var cells = $table.find('td').length;
      console.log(cells)
      if(cells > maxCells) {
         maxCells= cells;  
}

});
    console.log(maxCells);
	
52. // what does this refers to in case of an arrow function

// ex

 function Person() {
	 this.age = 0;
	 setInterval(() => {this.age++;}, 1000);
 }
 
 var p = new Person();
 console.log(p);
 
 53. // To get subset of an object.
 
 // Use case for destructirng assignment. 
 
const obj = {a:1, b:2, c:3},
subset = (({a,c}) => ({a,c}))(obj);
console.log(subset);


// To swap values - another use case. 


 const b = [1,2,3,4];

 [b[0], b[2]] = [b[2], b[0]];

console.log(b);

54. // How to replace multiple characters in one repalce call.

var str = '#this #is__ __#a test###__'
str = str.replace(/#|_/g,'');
console.log(str);

// JS Inheritance
       |
-------------------------
   |                    |
Prototypal            Classical
    |
-------------------------------------------------
|                                               |          
constructor Pattern                    Prototypal Pattern


//Classical Model - Object is created from class 
// E.g 
/*
     class person { 
	   fn() {
		   ...
	   } or constructor function say function Person() {}
	 }
		 
 */
// Create instance 
// let person = new Person();


// Prototypal Model - Object is created directly from another object.

// base object 
/*
  let Person =  {  fn() {... } }
 */

// Create instance
// let person = Object.create(Person);

// Spread operator and rest parameters

// with the spread operator we get the better performance.

var x = function(...n) {

console.log(n)	
	
}

x(1,2,3,4);

var x = function() {
  //console.log(arguments); // prints array like object
  // To convert arguments object into real array
  var args = Array.prototype.slice.call(arguments, 0);
  console.log(args);
}

// Below ex- passing arguments using a spread operator are called rest parameters.

var x = function(a,b,c, ...n) {
  
}

x(1,2,3,4);

// To combine to arrays 

var a = [1,2,3]
var b = [4,5,6]
a.push(...b)

console.log(a) // output = [1,2,3,4,5,6]

// Debugging techniques using console.time
console.time('st');
setTimeout(() => {
 console.timeEnd('st');
}, 5000)

let a =1;
let b =2;

debugger;

// USe of callback functions JS ex
let add = (a,b) => {
   return a + b;
}

let multiply = (a,b) => {
   return a * b;
}

let doWhatever = function(a,b) {
 console.log(`Two nos back ${a}, ${b}`)
}

let calc = function(num1, num2, callback) {
  if(typeof callback  ===  "function"){
   return callback(num1,num2);
  }
  // if(calType === "add"){
  //    return num1 + num2;
  // }
  // else if(calType === "multiply") {
  //   return num1 * num2;
  // }

};

//console.log(calc(2,3,'add'))
//console.log(calc(2,3,'multiply'))

console.log(calc(2,3,doWhatever))

// write fn inside directly as follows:- 

console.log(calc(2,3,function(a,b){
   return a-b;
}))

// Another Ex using a Callback

var myArr = [{
  num: 5,
  str: 'apple'
},{
 num: 7,
  str: 'cabbage'
}, {
 num: 1,
  str: 'banana'
}];

myArr.sort(function(a,b){
  if(a.str > b.str) {
     return -1;
  }
  else {
    return 1;
  }
});

// Object assign - create a copy
// object.assign

let toyota = {
   drive() {
      return 'driving toyota';
   },
   brake() {
     return 'braking toyota';
   }

};


let camry = {
   wifi() {
      return 'using wifi';
   },

   drive () {
     return 'driving camry';
   }

};

Object.assign(camry, toyota);

console.dir(camry.drive());// overwrite the local method when there is name collision.. since both objects have drive method in common, it will take toyota one

// create new object from the existing one as follows: - doing shallow copy, it is not doing anything to prototype so it is not a deep copy

let copyToyota = Object.assign({}, toyota);

console.dir(copyToyota)

// create new object with some new property 
Object.assign(toyota, {
   wifi() {
     return 'using wifi';
   },
   color: 'red'
});

console.dir(toyota);

// To create some constructor function 
let c1 = function(x,y,z) {
  Object.assign(this, x,y,z); //  using object assign 
}


// Var hoising - it is an issue with var for hoisting 

var x = function() {
   var y =1;
   var z = function() {
  console.log(y);
   }
   z(); // y is availabe inside z too
}

x();
//console.log(y)

var x = function() {
   console.log(y); // gives undefined due to hoisting. 
   var y =1; // 
}

// above can be represented as 

var y;
console.log(y); // hence it is undefined.
y=1;


x();
// Object.Create
const Car = function(color) {
 this.color = color;
}

const car1 = new Car('red') // constructor 
const car2 = Object.create(Car.prototype) // no color property for this one

console.log(car1);
console.log(car2);

// Object create is to extend constructor

Car.prototype = { // new Syntax
   getColor() { 
      return this.color;
   }
};

const ToyCar = function() {
 
}

ToyCar.prototype = Object.create(Car.prototype);
const legoCar = new ToyCar();
//console.dir(legoCar instanceof Car); // returns true
//console.dir(ToyCar.prototype.isPrototypeOf(legoCar)); // returns true
//console.dir(Object.prototype.isPrototypeOf(legoCar)); // returns true
//console.dir(Car.prototype.isPrototypeOf(legoCar)); // returns true

// here we do not copy anything but we just keep a reference.
// ----------------------------------------------------------------------------
// Method Chaining in JS

var obj = function() {
  this.i=0; // public var using this
  this.add= function(i) { // public method using this
     this.i += i;
     return this;
  };
  this.substract= function(i) { // public method using this
     this.i -= i;
     return this;
  };
  this.print = function() { // public method using this
    console.log(this.i); 
  }
};

 var x = new obj();
// x.add(3);
// x.substract(2);
// x.print();
//console.log(x.add(3)) // it gives an error as it is not returning anything

x.add(3).substract(2).print() // it will print 1 as we have return this at the end of add and subtract. We do not need for the last print function.

// Converting above to private for closure

var obj = function() {
  var i =0;; // private var
 var add= function(j) { // private method
      i += j;
     return this;
  };
  var substract= function(j) { // private method
     i -= j;
     return this;
  };
  var print = function() { // private method
    console.log(i); 
  };

  return {add: add, substract: substract, print:print };
};

var x = obj(); // no new keyword is needed for private
x.add(3).substract(2).print() // it will print 1 as before.


// call, apply nad bind general syntax

var obj = {num:2};

var functionName = function(arg1, arg2, arg3) {
	  
};

// Call 
functionName.call(obj, arg1,arg2,arg3);

// Apply 
// in this case second parameter is combine array of arguments togehter
var arr = [arg1, arg2, arg3];
functionName.apply(obj, [arg1, arg2.arg3] );

// Bind
var bound = functionName.bind(obj);
bound(arg1,arg2,arg3);

// e.g to find min value of an array
let a = [1,2,3];
console.log(Math.min.apply(null, a)); // output should be 1 


// bind 

let button = function(content) {
 this.content = content;
}

button.prototype.click = function() {
  console.log(`${this.content} clicked..`)
}

let newButton = new button('add');

let boundButton = newButton.click.bind(newButton);

boundButton();
// Another example
let myObj = {
  asyncGet(cb) {
    cb(); 
  },
  parse() {
    console.log('parse called..')
  },

  render() {
    this.asyncGet(function(){
      this.parse();
    }.bind(this))  // bind here makes it work - binding outer this to inner this // if we remove .bind(this), it will throw an error saying that
	// this.parse is not a function
  }

}

myObj.render();

// Code to check if the given no is prime or not
let isPrime = (n) => {

if( n === 2) {
  return true;
}

if( n < 2 || !(n%2) || !Number.isInteger(n)){
  return false;
}
 
for(let i=0; i< Math.sqrt(n); i++, i++){
     if( n%i == 0){
       return false;
     }
}
return true;
}

for(let i=0; i< 30; i++){
  if(isPrime(i)){
    console.log(i);
  }
}




// -----------------------------------------------------------------------------------------------------------------------------------

// Callback  JS 

const posts = [
   {title:'post1' , body: 'this is post one'},
   {title:'post2' , body: 'this is post two'},
];

function getPosts() {
  setTimeout(()=>{
    let output = '';
    posts.forEach((post, index) => {
    output += ` ${post.title}`
    })
    console.log(output);
  }, 1000);
}

function createPost(post , callback) {
  setTimeout(() => {
    posts.push(post)
    callback();
  }, 2000);
}

//getPosts();
createPost({title:'post3', body: 'this is post three'}, getPosts);
console.log(posts); // output will be post 1 post 2 post 3

// -------------------------------------------------------------------------------------------------------------------------
// Same example with promises  JS 

const posts = [
   {title:'post1' , body: 'this is post one'},
   {title:'post2' , body: 'this is post two'},
];

function getPosts() {
  setTimeout(()=>{
    let output = '';
    posts.forEach((post, index) => {
    output += ` ${post.title}`
    })
    console.log(output);
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
  setTimeout(() => {
    posts.push(post)
    //callback();
    const error = false; // it will print all 3 posts 
    //const error = true; // it will catch error
    if(!error) {
      resolve();
    }
    else {
      reject('Error: something went wrong..!!')
    }
  }, 2000); 
  });
 
}

 createPost({title:'post3', body: 'this is post three'})
 .then(getPosts)
.catch(err => console.log(err)); // output will be post 1 post 2 post 3

// -------------------------------------------------------------------------------------------------

// Promise.all

const promise1 = Promise.resolve('Hello World!')
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'Good Bye!')
})

const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

Promise.all([promise1, promise2, promise3, promise4])
.then((values) => {
  console.log(values)
})

console.log(posts);

// -----------------------------------------------------------------------------------------------
// same example with Async/ Await JS

const posts = [
   {title:'post1' , body: 'this is post one'},
   {title:'post2' , body: 'this is post two'},
];

function getPosts() {
  setTimeout(()=>{
    let output = '';
    posts.forEach((post, index) => {
    output += ` ${post.title}`
    })
    console.log(output);
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
  setTimeout(() => {
    posts.push(post)
    //callback();
    const error = false; // it will print all 3 posts 
    //const error = true; // it will catch error
    if(!error) {
      resolve();
    }
    else {
      reject('Error: something went wrong..!!')
    }
  }, 2000); 
  });
 
}

 async function init() {
     await createPost({title:'post3', body: 'this is post three'});
     getPosts();
}

 init();

// with fetch
async function fetchUsers() {
   const res = await fetch('https://jsonplaceholder.typicode.com/users');
   const data = await res.json(); // to format into json
   console.log(data);
}

fetchUsers();
