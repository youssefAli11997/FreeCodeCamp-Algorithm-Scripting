//link: 
function addTogether(a,b) {
  if(b == undefined){
    if(typeof(a) != 'number')
      return undefined;
      
    return function(c){
      if(typeof(c) != 'number')
        return undefined;
        
      return a + c;
    }
  }
  else{
    if(typeof(a) != 'number' || typeof(b) != 'number')
      return undefined;
      
    return a + b;
  }
}

console.log(addTogether(2)(3));
