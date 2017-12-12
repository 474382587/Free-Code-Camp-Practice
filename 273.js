function smallestCommons(arr) {

  var range = [];
  var num = 0;
  var min = Math.min(arr[1],arr[0]);
  var max = Math.max(arr[1],arr[0]);
  for (var i = min; i <= max; i++){
    
    range.push(i);
    
  }
  

  var lcm = range[0];
    for (i = 1; i < range.length; i++) {
    var GCD = gcd(lcm, range[i]);
    lcm = (lcm * range[i]) / GCD;
    }
    return lcm;
  
  
}

function gcd(a,b){
  
    if (b === 0)
        return a;
    else
        return gcd(b, a%b); 
}

// test here
smallestCommons([1,5]);