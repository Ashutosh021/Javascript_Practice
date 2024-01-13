var num = 153;

function countDigit(num){
    var cnt=0;
    while(num){
        num=parseInt(num/10);
        cnt++;
    }
    return cnt;
}

function findArm(num){

    var d = countDigit(num);
    var forCheck = num ;
    
    var rem,sum=0;
    while(num){
        rem = num % 10;
        sum = sum + Math.pow(rem,d);
        num = parseInt(num/10);
    }
    
    if(sum == forCheck ){
        console.log("Armstrong");
    }else{
        console.log("Not Armstrong");
    }
}

findArm(num);
findArm(1634);