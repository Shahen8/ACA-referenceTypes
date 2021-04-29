function posOrneg(arr) {
  let negatives = [];
  for (let elem of arr) {
    if (elem < 0) {
      negatives.push(elem);
    } else if (elem === 0) {
      console.log("Unsigned");
      return false;
    }
  }

  if (negatives.length % 2 !== 0) {
    console.log("-");
  } else {
    console.log("+");
  }
}

posOrneg([1, 2, 8]);
