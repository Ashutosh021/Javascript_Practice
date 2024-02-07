function removeDupli(arr){
let ans = [];
    for(let i of arr){
        // indexOf return the index of value in arr
        // -1 means value not present
        if(ans.indexOf(i)===-1){
            ans.push(i);
        }
    }
    console.log(ans);
}

var arr = [1,4,6,8,4,2,1,3,5,7,3,5,6];
console.log(`Before ${arr}`);
removeDupli(arr);