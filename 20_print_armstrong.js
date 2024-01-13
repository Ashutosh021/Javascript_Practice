// function to count Digits of a number
function countDigit(num) {
  var cnt = 0;
  while (num) {
    num = parseInt(num / 10);
    cnt++;
  }
  return cnt;
}

// function to find Armstrong number in a given interval
function findArm(num) {
  var d = countDigit(num);          //function calling for count digits
  var temp = num;                   // store number in temp for operation 

  var sum = 0;                       // if we don't initilize it will give NaN   
  while (temp) {
    var rem = temp % 10;              // finding remainder
    sum = sum + Math.pow(rem, d);     // find power ( remainder ,  no. of digit ) and assign to sum  
    temp = parseInt(temp / 10);       // divide so that we get next digit from the last 
                                     // and use parseInt to remove floating point number.
  }
  if (sum == forCheck) {
      console.log(`${sum}`);
    }
}

var interval = 70000;
console.log(`Armstrong Numbers between 0 to ${interval} are :- `);
for (var i = 0; i <= interval; i++) {
  findArm(i);
}
