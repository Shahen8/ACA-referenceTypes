function filterArr(arr) {
  let newArr = arr.filter((elem) => typeof elem === "number");
  console.log(newArr);
}

filterArr([1, 2, 3, "S", true, 8, [1, 2], 78]);
