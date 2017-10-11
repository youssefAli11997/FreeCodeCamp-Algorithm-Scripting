// problem link : https://www.freecodecamp.org/challenges/truncate-a-string

function truncateString(str, num) {
  // Clear out that junk in your trunk
  if(str.length <= num)
    return str;
  if(num <= 3)
    return str.slice(0,num) + "...";
  else
    return str.slice(0,num-3) + "...";
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
