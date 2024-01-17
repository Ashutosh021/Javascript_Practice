function printFactor(num){
    for(var i = 0;i<=num;i++){
        if(num % i == 0){
            console.log(i);
        }
    }
}

console.log("Factor of 20 are :- ");
printFactor(20);