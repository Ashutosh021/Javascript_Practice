function findGCD(a, b) {
  // Euclidean algorithm to find GCD
  while (a != b) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  }

  return a;
}

function findLCM(a, b) {
  // Calculate LCM using GCD
  return Math.abs(a * b) / findGCD(a, b);   //let say we have a = 4 b = 6 gcd=2  then -> 24/2 ==12
}

// Example usage
var num1 = 4;
var num2 = 6;
var lcm = findLCM(num1, num2);

console.log(`LCM of ${num1} and ${num2} is: ${lcm}`);
