//link: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers/
function sumFibs(num) {
  let oddFibsUpTo = (num) => {
    if(num == 0) return [0];
    let fibs = [1,1];
    let a = 1, b = 2, c = a + b;
    while(c <= num){
      if(c % 2 == 1) fibs.push(c);
      a = b; b = c; c = a + b;
    }
    return fibs;
  };

  return oddFibsUpTo(num).reduce((a,b) => a + b, 0);
}

console.log(sumFibs(4));
