var a = 5;
var b = 10;
console.log("Before Swap ");
console.log("a = "+a,", b = "+b);

//  With using third variable temp
// var temp = a;
// a = b;
// b= temp;

//  Without withou using third variable
a = a + b;
b = a - b;
a = a - b;

console.log("After Swap ");
console.log("a = "+a,", b = "+b);


