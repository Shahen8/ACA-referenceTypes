function isPrime(num){
 for(let i = 2;i < Math.sqrt(num); i++ ){
   if(num % i === 0){
     console.log("No")
     return false
   }
 }
 console.log("Yes")
 return true;
}

isPrime(31)