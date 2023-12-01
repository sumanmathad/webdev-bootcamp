//for each 

const nums =[1,5,8,9,0];

nums.forEach(function(el){
  console.log(el)
})

console.log('again');

for(let el of nums){
  console.log(el);
}

//Maps

//Arrow functions
const greet = el =>{
  return `Hey ${el}!`;
  }