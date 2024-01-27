var student = {
    name: "Ashutosh",
    age: 21,
    roll_no: 10,
    subject: ["COA", "DM", "FCET", "C", "POMC"],
  };
  console.log("Print Obj :- ");
  console.log(student);
  
  
  var clone_obj = {...student};
  console.log("\n\nClone Obj :- ");
  console.log(clone_obj);