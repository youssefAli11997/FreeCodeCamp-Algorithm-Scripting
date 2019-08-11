//link: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller/

function steamrollArray(arr) {
  for(let i=0; i<arr.length; i++){
    let ele = arr[i];

    if(typeof(ele) == "string")
      continue;

    if(ele.length > 0){
      arr.splice(i, 1, ...ele);
      i--;
    }
    else if(Array.isArray(ele) && ele.length == 0){
      arr.splice(i,1);
      i--;
    }
  }
  return arr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
