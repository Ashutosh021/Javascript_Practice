
function DeciToBin(n){
    var q = n;
    var ans = 0;
    var multiplier = 1;

    while(q != 0){
        ans = ans + (q % 2) * multiplier;
        q = parseInt(q / 2);
        multiplier *= 10;
    }

    console.log(ans);
}

DeciToBin(15);
