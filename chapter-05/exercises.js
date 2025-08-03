// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
 return array.reduce(function(acc, current){
  return acc.concat(current)
 }, [])
 
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(start, test, update, body) {
// make the value start because its out base starting point
let value = start;

  while(test(value)) { // while this is true
    body(value); // make the body value
    value = update(value); // and update the value of value
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {
  for(let index of array){ // iterating through the array
    if(!test(index)){ // testing function on every index
      return false;
    }
  }
  return true;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(string) {
  // we need something to hold the direction count 
  function directionCounts(string){
    let counts = {};

    // now we need to access each character of the string provided 
    for(let char of string){
      let code = char.codePointAt(0); // getting the code of each char

      let script = characterScript(code); // finding out what script it belongs too

      // but what happends if you cant find it
      if(!script){
        continue;
      }

      let direction = script.direction; // to get the direction  of the text

      // when finding a direction we need to add it to the count obj
      if(!(direction in counts)){
        counts[direction] = 1; // making a key and assigning it to one - if it doesnt already exist
      } else {
        counts[direction] += 1; // if already existing just add one'
      }
    }
    return counts;
  }

  let countDirections = directionCounts(string);
  // if its not found set it to the default directions 
  if(Object.keys(countDirections).length === 0){
    return "ltr";
  }

  let main = null; // empty varibale
  let max = 0;

  // needs to see which count is higher 
  for(let direction in countDirections){
    if(countDirections[direction] > max){
      main = direction;
      max = countDirections[direction];
    }
  }
  return main;
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};