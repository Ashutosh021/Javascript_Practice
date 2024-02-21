function gerRandomStr(len){
    const arr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var str = "";
    for(let i=0;i<len;i++){
        let index = Math.round(Math.random()*52);
        str += arr[index];
    }
    console.log(str);
}

gerRandomStr(5);