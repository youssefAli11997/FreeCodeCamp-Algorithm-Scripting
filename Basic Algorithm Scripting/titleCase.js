
function titleCase(str) {
  var arr = str.split(' ');
  for(var i=0; i<arr.length; i++){
    var tmp = arr[i][0].toUpperCase();
    for(var j=1; j<arr[i].length; j++)
      tmp += arr[i][j].toLowerCase();
    arr[i] = tmp;
  }
  return arr.join(' ');
}

titleCase("I'm a little tea pot");
