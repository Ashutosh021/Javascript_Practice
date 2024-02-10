const arr = [1,2,4,5,6,7,9];
const arr2 = [1,2,4,5,6,7];
var cnt = 0;
if(arr.length == arr2.length){
    for(var i=0;i<arr.length;i++){
        if(arr[i]!=arr2[i]){
            cnt++;
            console.log("Not Equal");
            break;
        }
    }
    if(cnt == 0){
        console.log("Equal");
    }
}
else{
    console.log("Not Equal");
}