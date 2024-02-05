function appendObj(obj){
    var arr = ["first" , "second" , "third" , "fourt"];
    arr.push(obj);

    arr.forEach(element => {
        console.log(element);
    });
}


var obj = {
    name : "Ashutosh",
    age : 21,
    why : "Maza aa raha hai"
}
appendObj(obj);