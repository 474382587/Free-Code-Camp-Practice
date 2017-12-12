function addTogether() {
var num;  	
var arg = [].slice.call(arguments);
  if(typeof(arg[0]) === "number"){
    if(arg.length > 1){
    if(typeof(arg[0]) === "number" && typeof(arg[1]) === "number"){
  		return arg[0]+arg[1];
  	}
    else{
      return num;
    }
  }
	else{
		return function(){
			if(typeof(arguments[0])==="number"){
				return arg[0]+arguments[0];
			}
			else{
				return num;
			}		
		};
	}
  }
  else{
    return num;
  }
	
  
}

addTogether("http://bit.ly/IqT6zt");