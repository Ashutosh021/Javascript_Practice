function reverseStr(str) {
  var s = 0;
  var e = str.lenght;

  while(s<=e){
    let temp = str[s];
    str[s] = str[e];
    str[e] = temp;
    s++;
    e--;
  }
  return str;
}

function isPalindrome(str) {
    var revStr = reverseStr(str);
    if (str == revStr) {
        console.log("palindrome string");
    } else {
        console.log("Not Palindrome");
    }
}

isPalindrome("hisd");


// function chkPalin(str){
//     const len = str.length;
//     for(let i=0;i<len/2;i++){
//         if(str[i]!==str[len-1-i]){
//             return 'It is not Palindrome';
//         }
//     }
//     return 'It is Palindrome';
// }

// const str = "nitin"
// const value = chkPalin(str);

// console.log(value);