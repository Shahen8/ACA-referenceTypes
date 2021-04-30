function printTriangl(num) {
  let lines = Math.ceil(Math.sqrt(num)) +1;
  let str = "";
  let space = " ";
  letLastNum = 0

  for (let i = 1; i <= lines; i++) {
     horizNum = i;
    str += i;
    for (let j = 1; j < i; j++) {
      horizNum += lines - 1;
      lastNum=horizNum
      str = str + space + horizNum;
      horizNum -= j;
    }
    console.log(str);
    str = "";
  }
  if( lastNum !== num){
    console.log(num - lastNum +" is remainder")}
}

printTriangl(24);
