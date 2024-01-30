var arr = [1, 2, 3, 4, 4, 6, 7];

// Use the filter method to create a new array without the element 3
var newArr = arr.filter(function (element) {
    return element !== 3;
});

console.log("Original Array: " + arr);
console.log("Array after removing 3: " + newArr);
