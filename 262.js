
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr,newArr = [];
  // Only change code below this line
  
  var conditions = Object.keys(source);
  var conditions2 = conditions;
 arr = collection.filter(function(data){
    var check = true;
//     return data.hasOwnProperty();
    conditions.forEach(function(el){
      check &= data.hasOwnProperty(el);
    });
    
    return check;
  }).filter(function(data){
    
    for(var i =0; i<conditions.length; i++){
      
      if(source[conditions[i]] !== data[conditions[i]]){
        return false;
      }
      else{
        continue;
      }
      
    }
    return true;
  });
  
  
  
  
  

  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
