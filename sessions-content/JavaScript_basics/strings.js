
const message = "    TASTE THE RAINBOW!  ";
const whisper = message.trim().toLowerCase();
console.log(whisper);



//Slice
let custname = 'suman mathad';
let fname= custname.slice(0,5);
let lname=custname.slice(6);

console.log('Muse'.slice(-3));

console.log(fname);
console.log(lname);

//Template literals

console.log(`My first name is ${fname} and my last name is ${lname}`);

console.log(`hello V${1+2+5}`);  //expressions are evaluated
