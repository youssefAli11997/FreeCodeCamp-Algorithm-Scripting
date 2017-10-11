// problem link : https://www.freecodecamp.org/challenges/falsy-bouncer

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(function(element){
    return element;
  });
}

bouncer([7, "ate", "", false, 9]);
