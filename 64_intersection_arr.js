const arr = [1, 2, 4, 5, 6, 7, 9];
const arr2 = [1, 4, 5, 7,7,8];
var ans = [];

for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr2.length; j++) {
    if (arr[i] == arr2[j]) {
      ans.push(arr[i]);
    }
  }
}

console.log(ans);
