const d1 = new Date();
const d2 = new Date();

const com1 = d1<d2;
console.log(com1);

const com2 = d1>d2;
console.log(com2);

const com3 = d1<=d2;
console.log(com3);

const com4 = d1>=d2;
console.log(com4);

const com5 = d1.getTime()===d2.getTime();
console.log(com5);

const com6 = d1.getTime()!==d2.getTime();
console.log(com6);