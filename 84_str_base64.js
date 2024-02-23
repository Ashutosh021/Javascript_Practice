// This code run on browser
// becuz it used window object which is provided by browser


const str = "Learning JavaScript";

const result = window.btoa(str);
console.log(result);

const result2=window.atob(result);
console.log(result2);