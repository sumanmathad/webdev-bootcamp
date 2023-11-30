let die1 = rolldie();
let die2 = rolldie();
let die3 = rolldie();
let die4 = rolldie();

function rolldie() {
  return Math.floor(Math.random()*6+1);
}

///////////////////////////
function returnDay(num){
  const days={ 1:'Monday',
  2:'Tuesday',3:'Wednesday',4:'Thursday',5:'Friday',6:'Saturday',7:'Sunday',}
  
  if(num<1 || num>7)
  return null;
  else console.log(days[num]);
  
}
returnDay(1)
///////////////////////////
