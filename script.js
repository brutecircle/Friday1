
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
console.log(stringArr)

// ex6 
let array = [];
while(array.length < 100){
    let randomNum = Math.floor(Math.random() * 100) + 1;
    if(array.indexOf(randomNum) === -1) array.push(randomNum);
}
console.log(array);

// ex7
// iterate through the whole array 
console.log(Math.max(...array))
console.log(Math.min(...array))

// ex8
const arrayOfarr = Array(10) 
				.fill()
				.map(() => Math.floor(10 * Math.random()));

console.log(arrayOfarr);

// ex 9
let arry = ["john", "Doe"]
const longest = arry.sort(
    function (a, b) {
        return b.length - a.length;
    }
)[0];
console.log(longest)

// ex 10
let  arr2 = [1, 3];
let biggestValue = Math.max(...arr2);
console.log(biggestValue)

