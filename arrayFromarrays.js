function arrayFromArrays(arr){
  let newArr = []
  
  for(let elem1 of arr){
    let result = 0
    for(let elem2 of elem1){
      result += elem2
    }
    newArr.push(result)
  }
  console.log(newArr)
}

arrayFromArrays([[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]])