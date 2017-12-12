
function sumFibs(num) {
  var fibCur = 1;
  var fibPre = 0;
  var fibNext =1;
  var sum = 0;
  var arr = [];
  while(fibCur <= num){
    
    if(fibCur%2 !== 0){
      
      sum += fibCur;

    }
    var temp = fibCur;
    fibCur = fibPre + fibCur;
    fibPre = temp;
    arr.push(fibCur);
  }
  
  
  
  return sum;
}

sumFibs(4);
