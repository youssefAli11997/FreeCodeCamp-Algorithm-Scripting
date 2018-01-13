//link: https://www.freecodecamp.org/challenges/convert-html-entities
function convertHTML(str) {
  // &colon;&rpar;
  console.log(str.replace("\"", "&quot;").replace("'", "&apos;").replace("&", "&amp;").replace("<","&lt;").replace(">", "&gt;"));
  while(str.indexOf("\"") != -1){
    str = str.replace("\"", "&quot;");
  }
  while(str.indexOf("'") != -1){
    str = str.replace("'", "&apos;");
  }
  while(str.indexOf("& ") != -1){
    str = str.replace("&", "&amp;");
  }
  while(str.indexOf("<") != -1){
    str = str.replace("<","&lt;");
  }
  while(str.indexOf(">") != -1){
    str = str.replace(">", "&gt;");
  }
  return str;
}

convertHTML("Dolce & Gabbana");
