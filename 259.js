
function sumAll(arr) {
  var totalNumbers = Math.max(arr[0],arr[1])-Math.min(arr[0],arr[1])+1;
  console.log(totalNumbers);
  var sum =(arr[0]+arr[1])*totalNumbers/2;
  
  return sum;
  
}

sumAll([1, 4]);
