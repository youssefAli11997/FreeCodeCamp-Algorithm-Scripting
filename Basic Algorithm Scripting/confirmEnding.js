// problem link : https://www.freecodecamp.org/challenges/confirm-the-ending
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  return str.substring(str.length - target.length) == target;
}

confirmEnding("Bastian", "n");
