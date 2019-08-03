// link: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  return turnIntoArrayOfWords(str).join("-");
}

function turnIntoArrayOfWords(str) {
  let arr = [], word = "";

  for (let i=0; i<str.length; i++) {
    if (str[i] == " " || str[i] == "_") {
      if (word != "")
        arr.push(word.toLowerCase());
      word = "";
    }
    else if (str.slice(i, i+5) == "<wbr>") {
      if (word != "")
        arr.push(word.toLowerCase());
      word = "";
      i += 4;
    }
    else if (str[i] >= 'A' && str[i] <= 'Z') {
      if (word != "")
        arr.push(word.toLowerCase());
      word = str[i];
    }
    else {
      word += str[i];
    }
  }

  if (word != "") {
    arr.push(word.toLowerCase());
  }

  return arr;
}

console.log(spinalCase("The_Andy_<wbr>Griffith_Show"));
