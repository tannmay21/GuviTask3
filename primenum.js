var numArray= [1, 2, 3, 5, 7, 10, 12, 13, 15, 20];

var prime= numArray.filter((items)=>{
    for (let i = 2; i < items; i++) if (items % i === 0) return false;
  return items > 1;
})
console.log(prime);