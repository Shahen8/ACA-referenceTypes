function arrayFromString(str) {
  let strArr = str.split(" ");
  let cleanArr = [];
  for (let elem of strArr) {
    if (elem.includes(",") || elem.includes("!") || elem.includes(".")) {
      let cleanElem = elem
        .split("")
        .slice(0, elem.length - 1)
        .join("");
      cleanArr.push(cleanElem);
      console.log(cleanElem);
    } else {
      cleanArr.push(elem);
    }
  }
  console.log(cleanArr);
}

arrayFromString("I will, go home!");
