const getLength = str => str.length;

console.log(getLength('foo'))
console.log(getLength('hello'))

const concatenate = (s1, s2) => s1.concat(s2);
console.log(concatenate('foo', 'bar'))
console.log(concatenate('hello', 'world'))

const difference = (num1, num2) => Math.abs(num1-num2)
console.log(difference(1,2))
console.log(difference(-5,5))

const isOdd = num => num%2 !==0
console.log(isOdd(5))

const addTwo = a => a.map(a => a+2)

console.log(addTwo([0,0]))

const convertHexadecimal = str => parseInt(str, 16)
console.log(convertHexadecimal('af'))

const onlyTruthy = a => a.filter(x => x)
console.log(onlyTruthy([0, 1, '', 'a']))

const sum = a => a.reduce((al, el) => al + el )
console.log(sum([0,4,4,4]))

// const removeVowels =/ str => str.replaceAll(/aieou/gi,"")
// console.log(removeVowels('FOOBAR'))

const removeDuplicates = a => [...new Set(a)]
console.log(removeDuplicates(['a', 'a', 'a']))

const join = (a1,a2) => a1.concat(a2)
console.log(join(['a', 'b'], ['c', 'd']))

const getLast  = a => a[a.length - 1];
console.log(getLast([9,7,5]))

const reverse = a => {
  const newArr = []
  for(let i = a.length-1; i>= 0; i--){
    newArr.push(a[i])
  }

  return newArr;
}

console.log(reverse([1,0]))

function toArray() {

return [...arguments]

}

function toArray() {

let result = [...arguments].filter(el => el > 3)
return result.length === [...arguments].length

}

const getValues = obj => Object.values(obj)
console.log(getValues({ c: 'foo' }))

const arity = fn => fn.length
console.log(arity(join))

const functionalize = val => function() {
  
   return val

}

console.log(functionalize('a')())
console.log(functionalize(false)())

function compose() {
  
  return function(val) {
  
}}

function compose() {
  
  let fns = [...arguments]
  
  return function(val) {
   
  let input = val;
  
  for(let i=0; i< fns.length; i++){
     input = fns[i](input)
  }
  return input; 
  
}}

console.log(compose(addOne, multiplyByTwo)(3))

function setDefault (arg) {

  return function(val) {
   
   return val ? true : arg; 
  
}}

console.log(setDefault(72)(true))
console.log(setDefault('foobar')(false))

const safelyTraverse = (obj, arr) => {
   let result = obj;
  for(let i=0; i< arr.length; i++){
    result= result[arr[i]]
    if(result === undefined){
     return undefined;
    }
  }
  return result;
 
}

console.log(safelyTraverse({ first: { second: 2 } }, ['first', 'second']))

console.log(safelyTraverse({}, ['a', 'b']))


const throwOn2 = val => val !== 2 ? val : '2 is not allowed'
console.log(throwOn2(2))


const promisify = val => new Promise( (resolutionFunc,rejectionFunc) => {
    resolutionFunc(val);
});

const result = promisify(3)
result.then(val => console.log(val + 1))


const add = (a, b) => a + b
const multiplyByTwo = (c) => c * 2

function promisifyFunction(fn) {
   return function(...args){
        return  new Promise( (resolutionFunc,rejectionFunc) => {
           resolutionFunc(fn(...args));
});

   }
}

promisifyFunction(add)(1, 1).then(val => console.log(val))
promisifyFunction(multiplyByTwo)(3).then(val => console.log(val + 1))
