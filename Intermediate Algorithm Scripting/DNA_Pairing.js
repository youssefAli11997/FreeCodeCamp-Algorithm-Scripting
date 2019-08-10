//link: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing/
function pairElement(str) {
  let pairOf = (ele) => {
    switch (ele) {
      case 'A': return 'T';
      case 'T': return 'A';
      case 'C': return 'G';
      case 'G': return 'C';
    }
  };

  return str.split("").map((ele) => {
    return [ele, pairOf(ele)]
  });
}

console.log(pairElement("GCG"));
