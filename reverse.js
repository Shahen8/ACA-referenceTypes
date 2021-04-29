function reverse(num) {
  let numArr = num.toString().split("");
  let newNumArr = [];
  let lastIndex = numArr.length - 1
  newNumArr.push(numArr[lastIndex]);
  newNumArr.push(...numArr.slice(1, lastIndex))
  newNumArr.push(numArr[0])
  console.log(newNumArr)
  console.log(newNumArr.join(""))
}

reverse(1234);
