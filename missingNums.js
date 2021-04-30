function missingNumbers(arr) {
  let newArr = [];
  let sortedArr = arr.sort((a, b) => {
    return a - b;
  });
  for (let i in sortedArr) {
    if (sortedArr[i] + 1 !== sortedArr[parseInt(i) + 1]) {
      newArr.push(sortedArr[i]);
      for (let j = sortedArr[i] + 1; j < sortedArr[parseInt(i) + 1]; j++) {
        newArr.push("undefined");
      }
    } else {
      newArr.push(sortedArr[i]);
    }
  }
  console.log(newArr);
}
missingNumbers([3, 6, 2, 0, 9]);
