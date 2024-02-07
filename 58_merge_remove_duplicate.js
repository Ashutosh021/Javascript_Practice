function mergeArr(arr,arr2){
    let first = [];
    let second = [];
    for(let i of arr){
        if(first.indexOf(i)===-1){
            first.push(i);
        }
    }
    for(let i of arr2){
        if(second.indexOf(i)===-1){
            second.push(i);
        }
    }
    console.log("\n\nAfter Duplicate remove and merge")
    var finalAns = first.concat(second);
    console.log(finalAns);
}

var arr = [1,4,6,8,4,2,1,3,5,7,3,5,6];
var arr2 = [2,3,5,6,7,3,1];
console.log(`Before arr1 : ${arr}`);
console.log(`Before arr2 : ${arr2}`);
mergeArr(arr,arr2);