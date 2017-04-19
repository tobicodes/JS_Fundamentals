// difference(2,2); // 0
// difference(0,2); // -2

function difference (a, b){
  return a-b;
}

// product(2,2); // 4
// product(0,2); // 0

function product (a, b){
  return a*b;
}

// this function takes in one parameter (a number from 1-7) 
// and returns the day of the week (1 is Sunday, 2 is Monday, 3 is Tuesday etc.). If the number is less than 1 or greater than 7, 
// the function should return undefined;

var obj = {
  1: "Sunday",
  2: "Monday",
  3: "Tuesday",
  4: "Wednesday",
  5: "Thursday",
  6: "Friday",
  7: "Saturday"
}

function printDay(a){
  if (a >7){
    return undefined;
  }
  return obj[a];
}
  
//this function takes in one parameter (an array) and returns the last value in the array. 
// It should return undefined if the array is empty.

function lastElement (arr){
  if (arr.length < 1){
    return undefined;
  }
  
  return arr.length ;
  
  }

// this function takes in two parameters (both numbers). If the first is greater than the second, 
// this function returns "First is greater". If the second number is greater than the first, 
// the function returns "Second is greater". Otherwise the function returns "Numbers are equal"

function numberCompare (a, b){
  if (a > b){
    return "First is greater"
  }
  else if ( a < b){
    return "Second is greater"
  }
  return "Numbers are equal"
}

function singleLetterCount (word, char){
  var count = 0;
  for (var i = 0; i < word.length; i++){
    if (char.toLowerCase() === word[i].toLowerCase()){
      count ++;
    }
  }
  return count; 
}


