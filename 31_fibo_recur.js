function findFactorial(n){
    if(n == 0 || n == 1){
        return 1;
    }
    return n * findFactorial(n-1);
}

console.log(`Factorial of 5 is ${findFactorial(5)}`)
console.log(`Factorial of 9 is ${findFactorial(9)}`)