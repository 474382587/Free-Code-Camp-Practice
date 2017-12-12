
function translatePigLatin(str) {
  var vowel = ["a","e","i","o","u"];
  var index = 1;
  
  //first as vowel
  if(vowel.includes(str.slice(0,1))){
  
    str = str.concat("way");
    return str;
  }
  
  while(index < str.length){
    
    if(vowel.includes(str.slice(index,index+1))){
      
      str = str.slice(index,str.length).concat(str.slice(0,index)).concat("ay");
      break;
    }
    index++;
  }
  
  return str;
}

translatePigLatin("consonant");
