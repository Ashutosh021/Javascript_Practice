function findGCD(first, second) {
  while (first != second) {
    if (first > second) {
      first = first - second;
    } else {
      second = second - first;
    }
  }

  return first; //return any value becuz at the end both first and second are holds same value
}

console.log(findGCD(14, 21));
