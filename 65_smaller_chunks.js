function splitArr(arr,chunk){
    for(var i=0;i<arr.length;i+=chunk){
        let tempArr;
        tempArr = arr.slice(i,i+chunk);
        console.log(tempArr);
    }
}

const arr = [1,2,3,4,5,6,7];
const chunk = 2;
splitArr(arr,chunk);