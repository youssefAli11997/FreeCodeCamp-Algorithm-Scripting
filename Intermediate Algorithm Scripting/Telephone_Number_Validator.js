//link: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator/

function telephoneCheck(str) {
  // Good luck!
  let regex = /^1?\s?((\(\d{3}\))|\d{3})\s*\-?\d{3}(\-|\s+)?\d{4}$/;
  return regex.test(str);
}

console.log(telephoneCheck("1 (555) 555-5555"));
