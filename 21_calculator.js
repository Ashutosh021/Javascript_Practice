function calculator(num, num2, op) {
  switch (op) {
    case "+":
      console.log(num + num2);
      break;
    case "-":
      console.log(num - num2);
      break;
    case "*":
      console.log(num * num2);
      break;
    case "/":
      console.log(num / num2);
      break;
    default:
      console.log("Invalid Operation");
  }
}

calculator(5, 8, "+");
calculator(15, 8, "-");
calculator(5, 8, "*");
calculator(16, 8, "/");
