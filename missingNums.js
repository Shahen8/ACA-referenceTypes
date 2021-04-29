  let newArr = [];
  function missingNums(arr) {
  let sortedArr = arr.sort((a, b) => {
    return a - b;
  });
  let newArr = []
  for(let i = sortedArr[0] ; i<=sortedArr[sortedArr.length - 1]; i++ ){
    newArr.push(i)
  }
   for(let item of sortedArr){
     for(let item1 in newArr){
      
     }
   }
}

missingNums([4, 3, 0, 9]);

// in process!!!