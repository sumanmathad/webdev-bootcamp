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

//filters

let even = nums.filter(n=> {
  return n%2==0
})
console.log(`even = ${even}`);

//Arrow functions
const greet = el =>{
  return `Hey ${el}!`;
  }

  //implicit functions

  //set Timeout

  //console.log('start timer');
  //setTimeout(()=> console.log('timer done'),3000)

  console.log('start interval');

  const id = setInterval(()=> console.log(Math.random()),3000)
  clearInterval(id)




  console.log("Reduce");
const evens = [2,6,8,12,4];

const highest = evens.reduce((max,el)=>{
  if (max>el){
    return max;
  } else return el;
})
console.log(highest);

