function isMultiple(num) {
  if (num % 3 !== 0 || num % 7 !== 0) {
    console.log(num + " is not a multiple of 3, 5 or 7.”");
    return false;
  } else if (num % 3 === 0 && num % 5 === 0) {
    console.log(num + " is a multiple of 3 and 5.");
    return true;
  } else if (num % 3 === 0 && num % 7 === 0) {
    console.log(num + " is a multiple of 3 and 7.");
    return true;
  } else if (num % 5 === 0 && num % 7 === 0) {
    console.log(num + " is a multiple of 5 and 7.");
    return true;
  } else if (num % 3 === 0 && num % 7 === 0 && num % 7 === 0) {
    console.log(num + " is a multiple of 3 and5 and  7.");
    return true;
  }
}

isMultiple(18);


