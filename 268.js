
function uniteUnique(arr) {
  
  arr = [].slice.call(arguments);
  
  
  arr = arr.reduce(function(arr1,arr2){
	
	return arr1.concat(arr2.filter(function(element){
						return arr1.indexOf(element) < 0;
    }));
});
  
  return arr;
  
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
