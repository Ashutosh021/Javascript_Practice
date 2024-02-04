function check_val(val){
    var arr = [1,2,3,4,5,6,7,8,9,11,12,14,15];
    arr.forEach(element => {
        if(element == val){
            console.log(element);
            // break;  arrow function don't support break
            return;
        }
    });
}


if(check_val(50) != true){
    console.log("Not Found");
}
