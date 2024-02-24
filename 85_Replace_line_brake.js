function replaceBrake(str){
    var result = ""; 
    for(let i=0;i<str.length;i++){
        if(str[i]!='\n'){
            result += str[i];
        }
    }
    console.log(result);
}

replaceBrake("This is a \n so i remove \n this");