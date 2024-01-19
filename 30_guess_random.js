function findRand(a) {
  var b;
  var cnt=0;
  while (1) {
    b = parseInt(Math.random() * 100);
    // console.log(a,b);
    if(a == b){
        break;
    }
    cnt++;
}
console.log(`Found in ${cnt} try !`);
}
a = parseInt(Math.random() * 100);
console.log(`Random number selected ${a}`);
findRand(a);
