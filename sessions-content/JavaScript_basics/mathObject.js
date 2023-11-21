console.log(Math.PI);

console.log(Math.round(4.7));

console.log(Math.pow(2,3));
//same as 
console.log(2**3);


const die1 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
const die2 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
const roll= die1+die2;
console.log(`you rolled a ${die1} and a ${die2}. They sum to ${roll}`);