var student = {
  name: "Ashutosh",
  age: 21,
  roll_no: 10,
  subject: ["COA", "DM", "FCET", "C", "POMC"],
};
console.log(student);

var cnt = 0;
for (var key in student) {
  if ("age" == key) {
    cnt++;
  }
}
if (cnt == 0) {
  console.log("Not Available");
} else {
  console.log("Available");
}
