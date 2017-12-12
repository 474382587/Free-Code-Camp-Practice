
function myReplace(str, before, after) {
  
  if(before.slice(0,1) === before.slice(0,1).toUpperCase()){
    after = after.slice(0,1).toUpperCase().concat(after.slice(1,after.length));
  }
  
  
  str = str.replace(before,after);
  
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
