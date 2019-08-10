//link: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/everything-be-true/
function truthCheck(collection, pre) {
  // Is everyone being true?
  let flag = true;
  collection.forEach((item) => {
    flag &= Boolean(item[pre])
  })
  return Boolean(flag);
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
