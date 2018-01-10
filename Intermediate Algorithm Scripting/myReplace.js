// link: https://www.freecodecamp.org/challenges/search-and-replace

function myReplace(str, before, after) {
  var afterArr = after.split("");
  var firstOfBefore = before.split("")[0];
  if(firstOfBefore == firstOfBefore.toUpperCase()){
    afterArr[0] = after[0].toUpperCase();
  }
  after = afterArr.join("");
  str = str.replace(before, after);
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
