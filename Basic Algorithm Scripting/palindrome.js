// problem link : https://www.freecodecamp.org/challenges/check-for-palindromes

function palindrome(str) {
  var newStr = "";
  str = str.toLowerCase();
  for(var i=0; i<str.length; i++){
    if(!(str[i] >= 'a' && str[i] <= 'z') && !(str[i] >= '0' && str[i] <= '9')) continue;
    newStr += str[i];
  }
  return recur(newStr);
}

function recur(str){
  if(str.length <= 1) return true;
  return (str[0] == str[str.length - 1]) && palindrome(str.slice(1,str.length-1));
}

palindrome("eye");
