function filterArrAndCount(arr) {
  let stringsArr = arr.filter((elem) => typeof elem === "string");
  let numberArr = arr.filter((elem) => typeof elem === "number");

  console.log(
    "Numbers: " + numberArr.length + ", Strings: " + stringsArr.length
  );
}

filterArrAndCount([1, 2, 3, "S", true, 8, [1, 2], 78]);
