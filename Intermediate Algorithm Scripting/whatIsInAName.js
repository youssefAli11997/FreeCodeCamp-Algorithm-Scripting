// link: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou/

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  function objHasAllPropsOf(obj, source) {
    for(let prop in source) {
      if (!obj.hasOwnProperty(prop))
        return false;
      if (obj[prop] != source[prop])
        return false;
    }
    return true;
  }

  for (let i=0; i<collection.length; i++) {
    let obj = collection[i];
    if (objHasAllPropsOf(obj, source))
      arr.push(obj);
  }
  
  // Only change code above this line
  return arr;
}
