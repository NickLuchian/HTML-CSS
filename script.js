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

//const palindromeNumber = function (num) {
//  const f = num.length;
//  for (let i = 0; i < num.length / 2; i++) {
//    if (num[i] !== num[f - 1 - i]) {
//      alert("It is not a palindrome");
//    }
//  }
//  const string = prompt("Enter a string or number: ");
//
//  const value = validatePalin(num);
//};
//palindromeNumber(value);

//debugger;

function validatePalin(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return "It is not a palindrome";
    }
  }
  return "It is a palindrome";
}

console.log(validatePalin("12345678987654321"));

function validate(str) {
  for (let i = 0; i < str.length; i++) {
    console.log(str[str.length - 1 - i]);
    console.log(str.length / 2);
  }
}
validate("1234321");
