
function pairElement(str) {
  var char =[];
  for(var i =0; i<str.length;i++){
	char.push(str.slice(i,i+1));
  }
  
  char.forEach(function(element,index,thisArr){

	thisArr[index] = pair(element);

  });
  
  return char;
}


function pair(data){

	switch(data){
	
        case "A":
			return ["A","T"];

		case "T":
			return ["T","A"];

		case "G":
			return ["G","C"];

		case "C":
			return ["C","G"];
	
        default: 


	}

}


pairElement("GCG");
