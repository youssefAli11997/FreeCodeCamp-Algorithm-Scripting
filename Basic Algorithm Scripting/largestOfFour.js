// problem link : https://www.freecodecamp.org/challenges/return-largest-numbers-in-arrays

function largestOfFour(arr) {
  var ret = [], mx;
  for(var i=0; i<arr.length; i++){
    mx = -1;
    for(var j=0; j<arr[i].length; j++)
      if(arr[i][j] > mx) mx = arr[i][j];
    ret.push(mx);
  }
  return ret;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
