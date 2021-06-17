function isPrime(element) {
    for(var i = 2; i < element; i++) {
      if(element % i === 0) {
        return false;
      }
    }
    return element !== 1;
  }
  
  var array = [1, 8, 7, 3, 2, 9, 10, 12];
  var primes = array.filter(isPrime);
  console.log("primes: " + primes);
