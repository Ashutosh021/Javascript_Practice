function RemoveOccur(str,removeThis,removeWith){
    var newStr = "";
    for(let i=0;i<str.length;i++){
        if(str[i]==removeThis){
            newStr +='@';
        }
        else{
            newStr +=str[i];

        }
    }

    console.log(newStr);
}


RemoveOccur("This is the King",'i','@');