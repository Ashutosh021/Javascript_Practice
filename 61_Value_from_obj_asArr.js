function extractVal(arr, prop) {
  let res = arr.map((item) => item[prop]);
  return res;
}

const obj = [{ a: 5, b: 2 },
{a:8,b:5},{a:6,b:4}];
const res = extractVal(obj, "a");
console.log(res);
