function revStr(str){
   var newStr = ""
   for(let i=str.length-1;i>=0;i--){
      newStr += str[i];
   }

   console.log(newStr);
}

str = "esrever";

revStr(str);