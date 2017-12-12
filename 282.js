
function sym(args) {
  
  var arg = [].slice.call(arguments); 
  var newArr;
  for(var i =0; i<arg.length-1; i++){
    newArr = arg[i].filter(function(element){
      return arg[i+1].includes(element);
    });
    arg[i+1] = arg[i].concat(arg[i+1]).filter(function(element){

      return !newArr.includes(element);

    });
    
  }
  
    var result = arg[arg.length-1].filter(function(element,i,arr){
    
    return arr.indexOf(element) === i;
    
  });
  
  
  return result;
}

sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
