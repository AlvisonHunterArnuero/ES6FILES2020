const digital_root = (n) => {
  if (n === 0) return 0;
  let over = false;
  let sum = 0;
  let arrSum = Array.from(n.toString());
  while (!over) {
    sum = arrSum.reduce((a, b) => Number(a) + Number(b));
    sum.toString().length === 1
      ? (over = true)
      : (arrSum = Array.from(sum.toString()));
  }
  return sum;
};
