const t = function (arr, elem) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element === elem) count++;
  }
  return count;
};

console.log(
  t([1, 2, 3, 3, 3, 3, 3, 4, 5, 6, 7, 8, 9, 10, 10, 55, 55, -1, -1], 3)
);

const star = function (num) {
  let star = "";
  for (let i = 0; i < num; i++) {
    console.log((star += "*"));
  }
};
star(10);
