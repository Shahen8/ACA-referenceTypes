function doesInclude(num, digit) {
  if (num.toString().includes(digit)) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

doesInclude(123.4, 34);
