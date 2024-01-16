function checkLastDigit(first,second){
    var firstLastDigit = first % 10;
    var secondLastDigit = second % 10;

    if(firstLastDigit == secondLastDigit){
        console.log("Yes! They are same.");
    }
    else{
        console.log("No! They are not same.");
    }

}
checkLastDigit(123,563);
checkLastDigit(123,565);