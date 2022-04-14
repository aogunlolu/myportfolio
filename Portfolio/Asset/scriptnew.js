// 1.outputting data in javascript
//using alert
// alert("hello world");

//using document.write
// document.write("hello world");

//console
// console.log("hello world");

//2. variable - a conatiner used to store information
// console.log("2 + 2 =", 2 + 2)
// x = 5;
// console.log(x + 10)

// var x = 5;

//let
//const

// var x = 10;
// console.log(x)

// let x = 4;
// x = 9;

// console.log(x)

// const y = 5;

// y = 15;
// console.log(y)

// rules of creating variable
//1. cannot use keywords or reserve words as variable name
//2. cannot start with number or symbols except undescore _

// let Numbers2 = 3 + 4
// let _howAreYou = "Greeting"
//3 use meaningful name

// let s = 15;
// let myAge = 15;

// let x = 5;
// let y = 7;
// let sum = x + y;
// console.log(sum)

//accepting input
// let firstNumber = parseFloat(prompt("Enter first number"));
// let secondNumber = parseFloat(prompt("Enter second number"));
// console.log(firstNumber + secondNumber)

//data type
// strings - alphanumeric characters
// let address = "70c Allen Avenue, Ikeja, Lagos";
// console.log(typeof(address))
// console.log(address.slice(18,23))

//concatenation - joining of 2 or more strings
// let firstName = "3";
// let lastName = "4";
// console.log(parseInt(firstName) + " " + parseInt(lastName))

// console.log(firstName + ' ' + lastName)

//string properties
// console.log(address.length)

// strings methods

//slicing
// console.log(address[0])
// console.log(address[7])
// console.log(address[address.length - 1])
// console.log(address[40])
// console.log(address.replace('Ikeja', '!'))
// console.log(address.slice(4, 9))
// console.log(address.indexOf('Ikeja'))
// console.log();
// console.log(address.lastIndexOf('a'));

// let record = prompt("Enter your name");
// console.log(record.trim())

// console.log(address.split(','));
// console.log(firstName.concat(lastName));
// console.log(address.toUpperCase());
// console.log(address.search('j'));

// numbers
// let salary = 5000.000000000;
// let age = 18;
// console.log(age + salary);
// console.log(salary.toFixed(8));
// console.log(salary.toPrecision(8))

//assignmet
// let words = 'JavaScript is simple';
// console.log(words.replace('simple', 'Easy'));

// console.log(words.length)
// console.log(words.slice(4,10))

// console.log(typeof(words))
// console.log(words.lastIndexOf('s'))

// let num1 = parseInt(prompt('Enter first number'));
// let num2 = parseInt(prompt('Enter second number'));
// let num3 = parseInt(prompt('Enter third number'))
// let result = num1 * num2 * num3
// console.log(result)

// boolean - true or false
// let isLoggedIn = false;
// const isMale = false;
// console.log( 5 > 12)

// array  - is for storing multiple values inside a single variable

// let color1 = 'red';
// let color2 = 'green';
// let color3 = 'yellow';

// let colors = ['red', 'green', 'yellow']
// console.log(colors[1]) //indexing elements in array
// console.log(colors.indexOf('green'))
// colors.pop() // remove last itme
// console.log(colors)
// colors.shift() //remove first item
// console.log(colors)
// colors.push('orange'); //add item at the end
// console.log(colors)
// colors.unshift('black') //adds item at the beginning
// console.log(colors)
// console.log(colors.splice(1,2)) //selecting index of item and number of items to be removed
// console.log(colors)

// console.log(colors.slice(1,2)) // similar to splice but without permanent removal of item from the array
// // console.log(colors)

// let words = "I love JavaScript";
// let letters = ['a', 'b', 'c', 'd', 'e', 'f'];
// console.log(letters.slice(4,5))
// console.log(letters.slice(2,3))

// console.log(letters.length);
// console.log(letters.concat(colors));

// console.log(words.split(' ')); // convert string to array
// // let = [1,2,3,4]
// console.log(letters)
// console.log(letters.join('')); // converting array to string
// console.log(letters.reverse());

// console.log(letters.includes('a'));

// object - key value pair data
// let emp1 = {
//     firstName : 'Wale',
//     lastName: 'Ola',
//     age: 18,
//     address : {
//         street: '70c Alle Avenue',
//         state: 'Lagos'
//     }
// };

// console.log(emp1['age'])
// console.log(emp1.age)
// console.log(emp1.address.state)
// console.log(emp1['address']['state'])

// undefined
// null

// let salary;
// console.log(salary)

// let age = null;
// console.log(age)

//set

// const sample = new Object()
// let arr = new Array(1,2,3)
// console.log(arr[2])

// let record = new Set()
// record.add("a");
// record.add("b");
// record.add('c');
// console.log(record)

//assignment

// let person = [
//   {
//     firstName: 'Lola',
//     gender: 'female',
//     age: 18,
//   },
//   {
//     firstName: 'Segun',
//     gender: 'male',
//     age: 19,
//   },
//   {
//     firstName: 'Wale',
//     gender: 'male',
//     age: 20,
//   },
// ];
// console.log(person[0]["gender"])

// let greeting = ['hi', 'welcome', 'to', 'javascript'];
// // greeting[3] = "python";
// // console.log(greeting);

// console.log(greeting.join(' ').slice(3, 24));

// // // let x = greeting.slice(1, 4);
// // // console.log(x.join(' '))

// // let words = "welcome to tech365";
// // let x = words.split(' ')
// // console.log(x.reverse().join(' '))

// let info = 'Javascript is easy';
// console.log(info.slice(14, 18));

// //operators - are symbols used in performaing operations eg. arithmetic, logic, comparison etc

// //artithmetic operators +, -, /, *, %
// let num1 = 5;
// let num2 = 4;
// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 / num2);
// console.log(num1 * num2);
// console.log(num1 % num2);

// //comparison operator - use for comparing two values eg. >, <, >=, <= , ==, ===, !=, !==
// console.log(num1 > num2); // greater than
// console.log(num1 < num2); // less than
// console.log(num1 >= num2); // greater than or equal to
// console.log(num1 <= num2); // less than
// console.log(num1 == num2); // equal to
// console.log(num1 === num2); //strictly equal to
// console.log(num1 != num2); //not equal to
// console.log(num1 !== num2); // strictly not equal to

// //logical operator eg. &&, ||, !

// // console.log(num1 > num2 && num1 < 10);
// // console.log(num1 > num2 ||  num1 < 1);

// // let salary = false;
// // console.log(!(salary))

// // assignment operator +=, -=, *=, /=, %=

// // num1 += num2  // num1 = num1 + num2
// // console.log(num1)

// // num1 -= num2
// // console.log(num1);

// //conditional statement or control structure eg. if, switch

// let age = 11;
// let country = 'Ghana';

// if (age >= 18 || country == 'Nigeria') {
//   console.log('You can vote');
// } else {
//   console.log('Not eligible');
// }

// //assignment 1
// // declare 3 variables of different numbers
// // compare the numbers and display the one that is largest

// // let color = "green";

// // if( color == 'green'){
// //   console.log("green color")
// // }else if( color == 'yellow'){
// //   console.log("yellow color")
// // }else if(color == "red"){
// //   console.log("red color")
// // }
// // else{
// //   console.log("unkwown color")
// // }

// //switch"
// let grade = 'C';

// let grade = "C"
// grade = grade.toUpperCase()

// switch(grade){
//   case "A":
//     console.log("Excellent")
//     break;
//   case "B":
//     console.log("Good")
//     break;
//   case "C":
//     console.log("Average")
//     break;
//   case "D":
//   case "E":
//   case "F":
//     console.log("Fail")
//       break;
//   default:
//     console.log("Unknown grade")
// }

//loops - while, for of, for in

// let x = 1; //initialization
// while (x <= 5) {
//   //condition
//   console.log(x);
//   x++; // x + 1
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// let numbers = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

// for (let x of numbers) {
//   console.log(x);
// }

// let numbers = [10,20,30,40,50]

//pick first number
//add to second number
// the answer is added to next number
// repeat till the end of numbers
// show what is the stored as answer

// let sum = 0;
// for (let i of numbers){
//   // console.log(i)
//   sum += i; // sum = sum + i

// }
//   console.log(sum);

// for( let i =0; i < numbers.length; i++ ){
//   console.log(numbers[i])

// }

// let person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 34,
//   gender: 'male'
// }

// for(let i in person){
//   if(i !== 'firstName' && i !== 'lastName'){
//     console.log(person[i]);

//   }

// }

//function - block of code that are reusable
// function sum(){
//   console.log(2 + 5)
// }

// sum()
// sum();
// sum();

//function parameter
// function sum(num1, num2){
//   console.log(num1 + num2)
// }

// sum(3,5)
// sum(4,9)

//another function
// function sum(num1, num2) {
//   return(num1 + num2);
// }

// console.log(sum(3, 5));
// sum(4, 9);

//assignment
// 1. create a program that display a multiplication table
// eg. 2 x 1 = 2
//     2 x 2 = 4
// up to 2 x 12 = 24
// NB: Do not write out the table one by one. Use loop.

// let x = 2;
// for(let i = 1; i <= 12; i++){
//     console.log(`${x} x ${i} = ${x * i}`);
// }

// 2. create a program that find the largest of 3 numbers

// let num1 = 50;
// let num2 = 10;
// let num3 = 2;

// if(num1 > num2 && num1 > num3){
//     console.log(`${num1} is the largest`)
// }else if(num1 < num2 && num2 > num3){
//     console.log(`${num2} is the largest`)
// }else{
//     console.log(`${num3} is the largest`)
// }

// 3.  create a program that take a score and show the grade using switch case:
// 90 - 100 ("Grade A")
// 70 - 89  ("Grade B")
// 50 - 69 ("Grade c")
// 30 - 49 ("Grade E")
// 0 - 29  ("Grade E")

// so if i enter any number as score it show show the corresponding grade

// let score = 95;

// switch (true) {
//     case (score >= 90 && score < 100):
//         console.log("A- Excellent")
//         break;
//     case (score >= 70 && score <= 89):
//         console.log("B- Good")
//         break;
//     case (score >= 50 && score <= 69):
//         console.log("C- Average")
//         break;
//     case (score >= 30 && score <= 49):
//         console.log("D- Average")
//         break;
//     case (score >= 0 && score <= 29):
//         console.log("F- Fail")
//         break;
// }

// 3. Create a program that accept 2 numbers and operator eg. 5 6, +
// then perform operation based on what the userr enter eg 5 + 6
// if user enter 2, 8, * it should return 2 * 8
// and show the answer in console

// let num1 = parseInt(prompt("Enter first number"))
// let sign = prompt('Enter operator. eg +, -, /, x, %');
// let num2 = parseInt(prompt("Enter second number"))

//     if (sign == '+') {
//       console.log(num1 + num2);
//     } else if (sign == '-') {
//       console.log(num1 - num2);
//     } else if (sign == 'x') {
//       console.log(num1 * num2);
//     } else if (sign == '/') {
//       console.log(num1 / num2);
//     } else if (sign == '%') {
//       console.log(num1 % num2);
//     }else{
//         console.log('Unknown operator')
//     }

// 4. create a program that print only even numbers from 1 to 10

// let x = 1
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 == 0){
//         console.log(i)
//     }
// }

// 5. create a program that check if a word is polidrone
// ie. it is same when you spell it backward
// eg. malam, ododo, owo

// let word = "malams"
// // console.log(word)
// let reverseWord  = word.split('').reverse().join('')
// // console.log(reverseWord)
// if (word === reverseWord) {
//     console.log("it is palindrone")
// }else{
//     console.log("not palindrone")
// }

// 6. write a program the check if a number is 0. it should return zero.
// if it is greater it should return positive
// if less than zero it should return negative

// let num = -4;

// if( num == 0){
//   console.log("zero")
// }else if( num < 0 ){
//       console.log("negative")

// }
// else{
//   console.log("positive")
// }

// 7.
// let words = [1,2,3,4,5,6,7,8,9]
// let sum = 0;
// bring out only even numbers from the above and sum them together
// for(let i of words){
//     if (i % 2 == 0){
//        sum += i;
//     }

// }
//  console.log(sum);
// 8.
// let message = ["I", "want", "to", "test" , "the", "training"]
// // bring out only words that start with t

// for(let i of message){
//     if(i[0] == 't'){
//         console.log(i);

//     }

// }


// function square(x){
//   return x * x
// }


// console.log(square(3))
// console.log(square(2));
// console.log(square(4));

//arrow function
let mySquare = x => x * x
// console.log(mySquare(9));

// function myName(y){
//   return y
// }

// function as first class citizen

// higher order function - map, filter, reduce, find
//map - creates a new array from calling a function for every array element.
// filter - creates a new array filled with elements that pass the test 
// reduce - method returns a single value 
// find - returns the value of the first element that passes a test.

//map
// let numbers = [1, 2, 3, 14, 5, 6, 3, 8, 9];
// let newNum = [5, 10, 15, 20];
// let mySquare = x => x * x

// console.log(numbers.map(mySquare));
// console.log(newNum.map(x => x * x));
// //or
// console.log(newNum.map((x) => x * x));

// //filter
// console.log(numbers.filter(x => x % 2 == 1))

// reduce
// console.log(numbers.reduce((prev, next)=> prev + next))

// find
// console.log(numbers.find(id => id == 3))

//hoisting - the ability to call a function before declaring it

// console.log(realName) // won't work
// let realName ="John Doe"

// greet(); //you can call a function before it is declared

// function greet(){
//   console.log(2 + 8)
// }


// 1. using template literals, create a program that takes your name and gae and return.
// eg. My name is Wale. I am 18 years old 


// 2. create an arrow function that takes 2 parameters and return the sum of the two values.

// let sum = (x,y) => x + y;
// console.log(sum(7,5))


// 3. create a program that removes a duplicate from an array
// eg. numbers = [2,1,3,1,4,6,1,8,2,1,3,4]



// 4. create a guesing game. Create a number that is tored in variable and let user guess the numbwer.
// If they guess correctly, tell tell they are correct. if higher than the number tell them it is higher. if lower tell them their guess is lower.

// 5. Find the largest number in an array.
// eg.
// let myList = [3,5,1,28,2,7,9,14]
// console.log(myList.sort((a, b) => a -b)[myList.length - 1])


// // 6. 
// const students = [
//   { name: "Wale", grade: 10 },
//   { name: "Mary", grade: 15 },
//   { name: "John", grade: 19 },
//   { name: "Audu", grade: 9 },
// ];

// console.log(students.map(({grade}) => grade))

// from the above, get all the names of the students



// Add all the score for students with grades 10 or above


// import hello from './test.js'
// console.log(hello(2,2))

// import hi from './hello.js'

// let person = ['wale', 'Ola', 90, 100, 80];

// hi(person);


// const myObj = {
//   x: 100,
//   y: 90,
//   a: 50,
//   b: 40,
//   c: 80,
// };
// const {x,y, ...z} = myObj;
// console.log(z)

//assignment

// const user = {
//     id: 42,
//     is_loggedin: true
// }

// const {id, is_loggedin} = user
// console.log(id)

//destructuring

// const person = {
//     firstName: "Wale",
//     lastName: "Olajumoke",
//     age : 18
// }

// function fullname({firstName, lastName}){
//   return firstName + " " + lastName;
// }

// console.log(fullname(person))

//destructuring

// const myObj = {
//     x: 100,
//     y: 90,
//     a:50,
//     b:40,
//     c:80
// }

// const {x,y, ...q} = myObj
// console.log(q) 

//adding the numbers together

// const person = ['wale', 'Ola', 90, 100, 80];
// const [x, y, ...z] = person;
// console.log(z.reduce((prev, next) => prev + next));


//splitting the code

// import person from './code.js'

// const [x, y, ...z] = person;
// console.log(z.reduce((prev, next) => prev + next));


//DOM - Document object model
// 
// let g = document.getElementById('green')
// let r = document.getElementsByClassName('red')
// let p = document.getElementsByTagName('p')
// let c = document.getElementById('container')

// console.log(g)
// console.log(r)
// p[0].innerHTML = "The law"
// g.style.backgroundColor = "green";
// g.style.width = "200px"
// g.style.height = "200px"
// g.innerHTML =  "Hello world"
// g.style.color = "#fff"
// g.style.fontSize = "50px"

// r[2].style.backgroundColor = "red"
// r[2].style.width = '200px';
// r[2].style.height = '200px';
// r[2].style.margin ="20px"

// for(let x of r){
//   x.style.color = "red";
//   x.innerHTML = 'Hello world';
// }



// console.log(c.lastElementChild);

// let redItems = document.querySelector('.red')
// console.log(redItems)

// let on = document.getElementById('on')
// let off = document.getElementById('off');
// let bulb = document.getElementById('bulb');
// // console.log(bulb)


// on.addEventListener('click', switchOn)

// function switchOn() {
//   // console.log("You pressed on button")
//   bulb.innerHTML = '<img src="./on.gif" width="50px" />';
// }

// off.addEventListener('click', switchOff);

// function switchOff() {
//    bulb.innerHTML = '<img src="./off.gif" width="50px" />';
// }

// let div = document.createElement('div')
// let h1 = document.createElement('h1');
// // console.log(div)

// h1.innerHTML = 'Welcome to Tech365'

// div.appendChild(h1)
// document.body.appendChild(div)

// let h1 = document.querySelector('h1')
// let hide = document.querySelector('#root')
// // console.log(hide)

// hide.addEventListener('click', remove)

// function remove() {
//   h1.style.display = 'none'
// }

let plus = document.getElementById('plus')
let minus = document.getElementById('minus')
let display = document.getElementById('display')


let count = 0

plus.addEventListener('click', add)
minus.addEventListener('click', subtract)

function add(){
  display.innerHTML = ++count
}

function subtract(){
  if( count > 0){
    display.innerHTML = --count;
  }
}
