function checkObject(obj){ 
        if(typeof(obj)=="object"){
            console.log("Yes");
        }
        else{
            console.log("Noooo");
        }
}

var obj = {
    name : "Ashutosh",
    age : 21,
    why : "Maza aa raha hai"
}

checkObject(obj);