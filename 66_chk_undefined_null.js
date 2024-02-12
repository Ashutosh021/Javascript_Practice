function chkVar(elem) {
  if (elem == null) {
    console.log("Undefined or null");
  } else {
    console.log("Not undefined or null");
  }
}

var a = 5;
var b;
var c = null;
chkVar(a);
chkVar(b);
chkVar(null);
