
// ex1
let  x = "John";
let y = "Doe";
console.log(`"${x} <> ${y}"`);
 
// ex 2 
// const person = new Object();
// person.name = 'Talent',
// person.surname = 'Antonio',
// person.email = 'antonio@strive.com'

const person = {
    name: 'Talent',
    surname: 'Antonio',
    email:'antonio@strive.com'
  };

//   ex3 
delete person.email

// ex4
let stringArr = ["Hello","world","Its","me","i","was","wondering","if","after","all"]
console.log(stringArr)
// ex5

let array = [];
while(array.length < 100){
    let randomNum = Math.floor(Math.random() * 100) + 1;
    if(array.indexOf(randomNum) === -1) array.push(randomNum);
}
console.log(array);

// ex6