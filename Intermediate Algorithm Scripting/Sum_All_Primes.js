//link: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes/

let isPrime = (x) => {
  for(let i=2; i*i<=x; i++)
    if(x % i == 0)
      return false;
  return true;
};

function sumPrimes(num) {
  if(num < 2) return 0;

  let sumOfPrimes = num >= 2 ? 2:0;
  for(let x=3; x<=num; x+=2)
    if(isPrime(x)){
      sumOfPrimes += x;
    }

  return sumOfPrimes;
}

console.log(sumPrimes(10));
