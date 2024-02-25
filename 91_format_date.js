let dateObj = new Date();

let date = dateObj.getDate();
let month = dateObj.getMonth();
let year = dateObj.getFullYear();

if(month<10){
    month = '0'+month;
}
console.log(`${date}/${month}/${year}`);
console.log(`${date}-${month}-${year}`);