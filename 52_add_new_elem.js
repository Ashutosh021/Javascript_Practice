function addElem(elem1,elem2){
    var arr = [1,2,3,4,5,6,7,8,9,11,12,14,15];
    arr.push(elem1,elem); //insert form end
    // arr.unshift(elem,elem,t); //insert form start
    
    arr.forEach(element => {
        console.log(element + " ");
    });
}


// we can give two parameter (position,howManyValDel,valueReplace)
function specified_delete(pos,howManyValDel){ 
    var arr = [0,1,2,3,4,5,6,7,8,9,11,12,14,15];
    arr.splice(pos,howManyValDel);
    arr.forEach(element => {
        console.log("DEL"+element + " ");
    });
}


// addElem(pos,elem)


addElem(9,2);
// specified_delete(5,1);            //delete 1 val from 5th index