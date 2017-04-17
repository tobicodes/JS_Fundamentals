var people = ["Greg", "Mary", "Devon", "James"];

// Using a loop, iterate through this array and console.log all of the people.

for (var i =0; i < people.length; i++){
  console.log(people[i]);
}

// Write the command to remove "Greg" from the array.
people.shift();
console.log(people);

//Write the command to remove "James" from the array.
people.pop();
console.log(people);

//Write the command to add "Matt" to the front of the array.
people.unshift("Matt");
console.log(people);

//Write the command to add your name to the end of the array
people.push("Tobi");
console.log(people);

// Using a loop, iterate through this array and after console.log-ing "Mary", 
// exit from the loop.

for (var i = 0; i < people.length; i++){
console.log(people[i])
  if (people[i] === "Mary")
      break;
}

// Write the command to make a copy of the array using slice. 
// The copy should NOT include "Mary" or "Matt".

var people2 = people.slice(2,4);
console.log(people2);

// Write the command that gives the indexOf where "Mary" is located.

console.log(people.indexOf("Mary"));

// Write the command that gives the indexOf where "Foo" is located (this should return -1)
console.log(people.indexOf("Foo"));

// Redefine the people variable with the value you started with. 
// Using the splice command, remove "Devon" from the array and add "Elizabeth" 
// and "Artie". Your array should look like this when you are done 

//Final array: ["Greg", "Mary", "Elizabeth", "Artie", "James"].
//Initial array: ["Matt", "Mary", "Devon", "Tobi"] 

console.log(people);
people.splice(0,1,"Greg");
people.splice(2,2,"Elizabeth", "Artie", "James");
console.log(people);

// Create a new variable called withBob and set it equal to the people 
// array concatenated with the string of "Bob".

var withBob = people.concat("Bob");
console.log(withBob);
