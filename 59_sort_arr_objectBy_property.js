function sortObject(a,b){
    var n1 = a.name.toUpperCase();
    var n2 = b.name.toUpperCase();

    let comparison = 0;
    if(n1>n2){
        comparison = 1;
    }
    else if(n1<n2){
        comparison = -1;
    }

    return comparison;
}

const students = [
    {name:'sara' , age:24},
    {name:'jhon' , age:24},
    {name:'jack' , age:25}
]

console.log(students.sort(sortObject));