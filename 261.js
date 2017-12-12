
function convertToRoman(num) {

  var romanNumber = "";
  var hundred;
  var thousand;
  var ten;
  var unit;
  
  thousand = Math.floor(num/1000)*1000;
  hundred = Math.floor((num%1000)/100)*100;
  ten = Math.floor((num%1000%100)/10)*10;
  unit = num%1000%100%10;
  
  num = thousands(thousand).concat(hundreds(hundred)).concat(tens(ten)).concat(units(unit)); 
  
  
  
 return num;
  
}



function thousands(thousand){
  var num = "";
  switch(thousand){
      
    case 1000:
      num = "M";
      break;
    case 2000:
      num = "MM";
      break;  
    case 3000:
      num = "MMM";
      break; 
    default:
      break;
  }
  return num;
}

function hundreds(hundred){
  var num ="";
  switch(hundred){
    case 100:
      num = "C";
      break;
    case 200:
      num = "CC";
      break;
    case 300:
      num = "CCC";
      break; 
    case 400:
      num = "CD";
      break;  
    case 500:
      num = "D";
      break;
    case 600:
      num = "DC";
      break;  
    case 700:
      num = "DCC";
      break;  
    case 800:
      num = "DCCC";
      break; 
    case 900:
      num = "CM";
      break;  
    default: 
      break;   
  }
  return num;
}

function tens(ten){
  var num ="";
  switch(ten){
    case 10:
      num = "X";
      break;
    case 20:
      num = "XX";
      break;
    case 30:
      num = "XXX";
      break; 
    case 40:
      num = "XL";
      break;  
    case 50:
      num = "L";
      break;
    case 60:
      num = "LX";
      break;  
    case 70:
      num = "LXX";
      break;  
    case 80:
      num = "LXXX";
      break; 
    case 90:
      num = "XC";
      break;  
    default: 
      break;   
  }
  return num;
}

function units(unit){
  var num ="";
  switch(unit){
    case 1:
      num = "I";
      break;
    case 2:
      num = "II";
      break;
    case 3:
      num = "III";
      break; 
    case 4:
      num = "IV";
      break;  
    case 5:
      num = "V";
      break;
    case 6:
      num = "VI";
      break;  
    case 7:
      num = "VII";
      break;  
    case 8:
      num = "VIII";
      break; 
    case 9:
      num = "IX";
      break;  
    default: 
      break;   
  }
  return num;
}


















