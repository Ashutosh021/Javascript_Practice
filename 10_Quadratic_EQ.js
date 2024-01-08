var a = 4;
var b = 1;
var c = 2;

var det,r1,r2,real,img;

det = (b*b) - (4*a*c);

if(det>0){
    r1 = r2 = (-b + Math.sqrt(det))/2*a;
    console.log("The roots are " + r1,r2);
}
else if(det == 0){
    r1 = r2 = -b/2*a;
    console.log("The roots are " + r1,r2);
}
else{
    real = -b / (2*a);
    img = Math.sqrt(-det)/(2*a);
    console.log("The roots are " + real,img);
}