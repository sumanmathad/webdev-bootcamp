//default params

function rollDie(side=4){
  return Math.floor(Math.random()*side)+1;
}
console.log(rollDie());
console.log(rollDie(6));
console.log(rollDie(6));
console.log(rollDie(6));
console.log(rollDie(6));
console.log(rollDie(6));
console.log(rollDie(6));

//Spread
console.log('Spread');
let evens=[2,4,6,8,10];
console.log(evens);
console.log(...evens);

console.log(Math.max(...evens));


let cats = ['tom', 'dick', 'harry'];
let dogs=['james','john','will'];

let allPets = [...cats, ...dogs]

console.log(allPets);