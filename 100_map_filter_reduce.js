// map 
var arr=[1,2,3,4,5,6,7,8,9,10];

console.log("Map :- ");
arr.map((elem)=>{
    console.log(elem);
})

const newArr = arr.filter((elem)=>elem>5)
console.log("Filter ( > 5 ) :- "+newArr);

const addArr = arr.reduce((elem1,elem2)=> {return elem1+elem2});
console.log("Redduce (+) :- "+addArr);