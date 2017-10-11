// problem link : https://www.freecodecamp.org/challenges/mutations

function mutation(arr) {
  for(var i=0; i<arr[1].length; i++){
    var contains = false;
    for(var j=0; j<arr[0].length; j++){
      if(arr[0][j].toLowerCase() == arr[1][i].toLowerCase())
        contains = true;
    }
    if(!contains)
      return false;
  }
  return true;
}

mutation(["hello", "hey"]);
