function sumAndProductOfDigits(num) {
  let numArr = num.toString().split("");
  let sumOfDigits = 0;
  let productOfDigits = 1;
  for (let elem of numArr) {
    if (elem === "0") {
      console.log("Can not calculate");
      return false;
    }
    sumOfDigits += parseInt(elem);
    productOfDigits *= parseInt(elem);
  }
  if (productOfDigits % sumOfDigits === 0) {
    console.log("Quotient is " + productOfDigits / sumOfDigits);
  } else {
    console.log("Remainder is " + (productOfDigits % sumOfDigits));
  }
}

sumAndProductOfDigits(450);
