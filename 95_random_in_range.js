function GenrateNumber(min,max){
    var num = Math.floor(Math.random()*(max-min+1))+min;
    console.log(num);
}   

GenrateNumber(20,50);
