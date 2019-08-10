// link: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union/

Array.prototype.union = function(arr) {
  return this.concat( arr.filter( (ele) => this.indexOf(ele) == -1 ) )
}

function uniteUnique(...arrs) {
  let unionArray = []
  arrs.forEach( (arr) => unionArray = unionArray.union(arr) )
  return unionArray
}

console.log( uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) )
