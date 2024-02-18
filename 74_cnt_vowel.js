function countVowel(str){
    var vCount = 0;
    for(var i=0;i<str.length;i++){
        let ch = str[i].toLowerCase();
        if(
            ch =='a' ||
            ch =='e'||
            ch =='i'||
            ch =='o'||
            ch =='u'
            ){
                vCount++;
            }
    }

    console.log("Total Vowels are ",vCount);
}

countVowel("a nm e mn I nm o mn U")