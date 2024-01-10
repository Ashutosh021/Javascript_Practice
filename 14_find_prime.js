var num = 18;
var flag = 0;

for(var i = 2;i<num;i++){
    if(num%i==0){
        flag++;
    }
}

if(flag == 0){
    console.log(`${num} is Prime`);
}
else{
    console.log(`${num} is Not Prime`);
}