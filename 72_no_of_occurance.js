function countOccurence(str,ch){
    var cnt = 0;
    for(let i=0;i<str.length;i++){
        // if(ch == str.charAt(i)){
        if(ch == str[i]){
            cnt++
        }
    }
    console.log(`Count of ${ch} = ${cnt}`);
}

countOccurence("initin",'i');