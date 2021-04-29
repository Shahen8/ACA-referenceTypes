function sorting(arr) {
  console.log(
    arr.sort((a, b) => {
      return a - b;
    })
  );
}

sorting([45, 26, 78]);
