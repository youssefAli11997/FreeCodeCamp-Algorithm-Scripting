// problem link : https://www.freecodecamp.org/challenges/chunky-monkey

function chunkArrayInGroups(arr, size) {
  // Break it up.
  var arrSliced = [];
  for(var i=0; i<arr.length; i+=size)
    arrSliced.push(arr.slice(i, i+size));
  return arrSliced;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
