//link: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher/

function rot13(str) { // LBH QVQ VG!
  return str.split("").map((char) => {
    if(char >= 'A' && char <= 'Z'){
      return String.fromCharCode((char.charCodeAt(0) - 'A'.charCodeAt(0) + 13) % 26 + 'A'.charCodeAt(0));
    }
    else return char;
  }).join("");
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
