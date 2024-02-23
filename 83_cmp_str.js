function compareStr(str1,str2){
    var len1= str1.length;
    var len2= str2.length;
    if(len1!=len2){
        console.log("String Not Equal");
    }
    else{
        let cnt = 0;
        for(let i=0;i<len1;i++){
            if(str1[i]!=str2[i]){
                console.log("String Not Equal");
                break;
            }
            else{
                cnt++;
            }
        }
        if(cnt!=0){
            console.log("string are Equal")
        }
    }
}


function compareStr2(str1,str2){
    const result = str1 === str2;
    console.log(result);
}
compareStr("Ashu","Ashuu")
compareStr2("Ashu","Ashu")