function lastDigitToStart(num) {
  let numArr = num.toString().split("");
  let len = numArr.length;
  let newNum;
  for (let elem in numArr) {
    if (numArr[len - 1] !== "0") {
      newNum = numArr[len - 1] + numArr.slice(0, len - 1).join("");
      console.log(newNum);
      break;
    } else {
      console.log(num);
      break;
    }
  }
}
lastDigitToStart(731);
