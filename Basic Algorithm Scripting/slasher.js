// problem link : https://www.freecodecamp.org/challenges/slasher-flick

function slasher(arr, howMany) {
  // it doesn't always pay to be first
  return arr.slice(howMany);
}

slasher([1, 2, 3], 2);
