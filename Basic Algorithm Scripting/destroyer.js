// problem link : https://www.freecodecamp.org/challenges/seek-and-destroy

function destroyer(arr) {
  // Remove all the values
  var args = Array.prototype.slice.call(arguments);
  args.splice(0,1); // start deleting from 0 and delete 1 item
  return arr.filter(function(ele){
    return args.indexOf(ele) == -1;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
