
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  str = str.split(/(?=[A-Z])|\s|_|-/);
  //str = str[0].toLowerCase();
  var arr =str[0];
  for(var i =1; i<str.length;i++){
    
    arr = arr.concat("-").concat(str[i]); 
  }
  arr = arr.toLowerCase();
  return arr;
}

spinalCase("Teletubbies say Eh-oh");
