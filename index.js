// Write your solution here!
// index.js

// Function to return the original array
function destructivelyAppendCat(name) {
    cats.push(name);
  }
  
  // Function to return a new array
  function appendCat(name) {
    return [...cats, name];
  }
  
  // Other functions...
  // Assume 'cats' is defined somewhere in the file as let cats = ["Milo", "Otis", "Garfield"];

// Destructively remove the last cat from the array and return the array
function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
  }
  
  // Nondestructively remove the first cat from the array and return a new array
  function removeFirstCat() {
    return cats.slice(1);
  }
  
  // Destructively remove the first cat from the array and return the array
  function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
  }
  
  // Nondestructively append a cat to the array and return a new array
  function prependCat(name) {
    return [name, ...cats];
  }
  
  // Other functions...
  
  // Example usage of the functions:
  console.log(destructivelyRemoveLastCat()); // Removes 'Garfield' from 'cats' and logs the updated array
  console.log(removeFirstCat()); // Logs a new array without the first cat ('Otis')
  console.log(destructivelyRemoveFirstCat()); // Removes 'Milo' from 'cats' and logs the updated array
  console.log(prependCat('Whiskers')); // Prepends 'Whiskers' to 'cats' and logs the updated array
  