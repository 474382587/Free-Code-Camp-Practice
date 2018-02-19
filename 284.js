
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
  
  for(var i = 0; i<arr1.length; i++){
	for(var j = 0; j<arr2.length; j++){
		if(arr1[i][1] === arr2[j][1]){
			console.log(i+" arr1nd "+j);
			arr1[i][0] = arr1[i][0]+arr2[j][0];
        }
	}
  }
  console.log(arr1);
  console.log(arr2);
  var arr = [];
  for(var k = 0; k<arr1.length; k++){
      arr.push(arr1[k][1]);
  }
  console.log("arr: " + arr);
  var filtered = (arr2.filter(function(element){
      return !arr.includes(element[1]); 

  }));
  console.log(filtered);
  console.log(arr1);
  filtered.forEach(function(element){

      arr1.push(element);

  });
  var result = arr1;
  console.log("result: " + result);

  
  result.sort(function(a,b){
    
    return a[1] === b[1] ? 0 : (a[1] < b[1]) ? -1 : 1;
    
    
  });
  
  
  
  
  
  
    return result;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
