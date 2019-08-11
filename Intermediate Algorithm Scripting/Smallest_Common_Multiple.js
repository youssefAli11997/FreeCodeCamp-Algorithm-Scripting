//link: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple
function smallestCommons(arr) {
  let divisibleByAll = (num) => {
    for(let i=arr[0]; i<=arr[1]; i++)
      if(num % i != 0)
        return false;
    return true;
  }

  if(arr[1] < arr[0]){
    let temp = arr[1];
    arr[1] = arr[0];
    arr[0] = temp;
  }

  let factorial = (() => {
    let ans = 1;
    for(let i=1; i<=arr[1]; i++){
      ans *= i;
    }
    return ans;
  })() // just to provide an upper bound for searching

  return search(arr[1],factorial,divisibleByAll);
}

function search(low, high, searchFunc) {
  for(let x=low; x<=high; x++) {
    if(searchFunc(x))
      return x;
  }
  return -1
}

console.log(smallestCommons([1,13]));
