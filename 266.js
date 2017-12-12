
function fearNotLetter(str) {
var rangeStart,rangeEnd;
for(var i=0; i<str.length-1;i++){
	if(str.charCodeAt(i)+1 === str.charCodeAt(i+1)){
		continue;	
	}
	else{
		rangeStart = str.charCodeAt(i)+1; 
		rangeEnd = str.charCodeAt(i+1)-1;
		break;
	}
  if(i === str.length-1){
    return rangeStart;
  }
}
  
if(rangeStart){
  var newStr = '';
  for(var j = rangeStart; j<rangeEnd+1; j++){
	
	newStr = newStr.concat(String.fromCharCode(j));
  }
}  

  
  
  return newStr;
}

fearNotLetter("abcde");
