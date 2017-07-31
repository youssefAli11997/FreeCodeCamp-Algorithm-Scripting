// problem link : https://www.freecodecamp.org/challenges/find-the-longest-word-in-a-string

function findLongestWord(str) {
  str = str.split(" ");
  var max = -1;
  for(var i=0; i<str.length; i++){
    max = Math.max(max, str[i].length);
  }
  return max;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
