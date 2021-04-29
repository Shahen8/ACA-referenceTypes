function fib(index) {
  let first = 0;
  let second = 1;
  let fibArr = [first, second];
  for (i = 2; i < index - 1; i++) {
    first += second;
    second += first;
    fibArr.push(first);
    fibArr.push(second);
  }
  console.log(fibArr[index - 1]);
}

fib(6);
