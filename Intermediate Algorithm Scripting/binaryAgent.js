// link: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/binary-agents/

function binaryAgent(str) {
  return str.split(" ").map((bin) => {
    return toLetter(bin);
  }).join("");
}

function toLetter(bin) {
  let zeroCharCode = "0".charCodeAt(0);
  let charCode = 0;
  for (let i=0; i<bin.length; i++) {
    charCode = charCode * 2 + bin.charCodeAt(i) - zeroCharCode;
  }
  return String.fromCharCode(charCode);
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
