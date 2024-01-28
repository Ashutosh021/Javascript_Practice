var student = {
    name: "Ashutosh",
    age: 21,
  };
  
  var student2 = {
    roll_no: 10,
    subject: ["COA", "DM", "FCET", "C", "POMC"],
  };

  console.log(student);
  student = Object.assign(student,student2);
  console.log("\n\n");
  console.log(student);