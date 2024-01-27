var student = {
    name: "Ashutosh",
    age: 21,
    roll_no: 10,
    subject: ["COA", "DM", "FCET", "C", "POMC"],
  };
  console.log(student);
  
  var cnt = 0;
  for (var key in student) {
    console.log(`${key} = ${student[key]}`);
  }
  