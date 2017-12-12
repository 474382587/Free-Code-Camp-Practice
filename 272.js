
function sumPrimes(num) {
  var arr = [];
  for(var i=2; i<=num; i++){
    arr.push(i);
  }
var sum =2;
  while(arr.length > 1){
    
    
    arr = arr.filter(function(element,index,arr){
      
      return element%arr[0] !== 0;
      
    });
    sum = sum + arr[0];
  }
  
  
   return sum;
}

sumPrimes(10);
