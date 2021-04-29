function maxAndMinLengthSum(arr) {
  let newArr = arr.sort((a, b) => a.length - b.length);
  console.log(newArr[0].length + newArr[newArr.length - 1].length);
}
maxAndMinLengthSum(["anymore", "raven", "me", "communicate"]);
