// link: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters/
function fearNotLetter(str) {
  if (str.length == 26)
    return;

  let allLetters = "abcdefghijklmnopqrstuvwxyz";
  let validRange = allLetters.slice(allLetters.indexOf(str[0]));

  return (() => {
    for (let i=0; i<str.length; i++) {
      if (str[i] != validRange[i])
        return validRange[i];
    }
  })();
}

console.log(fearNotLetter("abce"));
