function empty_arr(arr) {
    arr.splice(0, arr.length);
}

var arr = [1, 2, 3, 4];
console.log(arr); 
empty_arr(arr);
console.log("After Empty ");
console.log(arr); 
