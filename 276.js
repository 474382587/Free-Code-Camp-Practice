
function steamrollArray(arr) {
  // I'm a steamroller, baby
  newArr = [];
  roll(arr);
  return newArr;
 }
function roll(arr){
  arr.forEach(function(element){
    
    if(!Array.isArray(element)){
      newArr.push(element);
    }
    else{
      roll(element);
    }
  });
}


steamrollArray([[["a"]], [["b"]]]);
