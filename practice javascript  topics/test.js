function sumDivisors(n) {
  let sum =0;
  for (let i = 1;i <=n;i++){
     if(i % n == 0){
       sum+=i;
     }    
}
return sum;
}
console.log(sumDivisors(6));