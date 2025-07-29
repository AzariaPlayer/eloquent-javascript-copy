////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step = 1){
  let output = [];
  if (step === 0){
    return output;
  }
  
  if(step < end  && step > 0){
  for(let i = start; i <= end; i += step){
    output.push(i);
    }
  } else if (start > end && step < 0) {
    for(let i = start; i >= end; i += step){
      output.push(i);
    }
  }
  
  return output;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// function sum(start, end){
//   let total = 0;
//   if(start < end){
//   for(let i = start; i <= end; i++){
//     total+= i;
//     }
//   } else {
//     // start is bigger
//     for(let i = start; i >= end; i--){
//       total+=i;
//     }
//   }
  
//   return total;

  function sum(numbers){
    let total = 0
    for(var digit of numbers){ // creating that holding variable for the index of numbers
      total+=digit; // reassigning the total variable 
    }
    return total;
  }

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  let output = [];
  for(var i = 0; i < array.length; i++){
    output.unshift(array[i]);
  }
  return output;
}
let numbers = [1, 2, 3, 4, 5]
console.log(reverseArray(numbers));

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  // for the first index
  let start = 0;
  // for the last index
  let end = array.length - 1;
  
  // since we dont know how long the array will be we can use while
  while(start < end){
    // has to search if its possible switch the two 
    [array[start], array[end]] = [array[end], array[start]];
    // and keep moving through the array 
    start++;
    end--;
  }
  
  }
////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// review
function arrayToList(array) {
  var list = null;
  // loop going DOWNWARDS 
  for(var i = array.length - 1; i >= 0; i--){
    // now we want to create a new object for each element in the array
    // value is the array index and rest points to the previous object
    list = {value: array[i], rest: list}
  }
  // just make sure you return list
  return list;
  
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
// opposite of the previous code 
  let output = []; // this is out storage array 
  // we will need need a loop
  // this time we need to start with the list given
  // as long as the list is not empty it will loop
  for(var i = list; i; i = i.rest){ // moving to the next index in the list 
    output.push(i.value); 
  }
  return output;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// adding another value to the list 
function prepend(value, list) {
  return {value: value, rest:list};
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// just return the element at a position in a list

// 
function nth(list, n) {

  // return undefined; 

  // try recursion 
  if(n === 0){
    return list.value;
  }
  if(!list){
    return undefined;
  }
  
  return nth(list.rest, n - 1);
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(value1, value2) {
 // start with the easiest 
 if(value1 === value2){
  return true;
 }
 // now what if they are objects
 if(value1 === null || typeof value1 !== "object" || value2 === null || typeof value2 !== "object"){
  return false;
 }
 
// take the keys of the objects so we can use them to compare each other
let keysValue1 = Object.keys(value1);
let keysValue2 = Object.keys(value2);

// since we are looping through an object we need for...of loop
for(var key of keysValue1){
  // if they have different properties return false 
  // also checking if they other value has the same key 
  if(!keysValue2.includes(key) || !deepEqual(value1[key], value2[key])){
    return false
    }
  }
  return true;
 }


////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};