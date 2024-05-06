// let radius;
// let circumference;

// document.getElementById('mybutton').addEventListener('click',function(){

//     radius = document.getElementById('radius').value;

//     circumference = 2 * Math.PI * radius;

//     document.getElementById('circumference').innerHTML = circumference;

// });

// const decrease = document.getElementById('decrease');
// const reset = document.getElementById('reset');
// const increase = document.getElementById('increase');

// let countLabel = document.getElementById('count');
// let count = 0;

// decrease.addEventListener('click', () => {
//     count--;
//     countLabel.innerHTML = count;
// });

// reset.addEventListener('click', () => {
//     count = 0;
//     countLabel.innerHTML = count;
// });

// increase.addEventListener('click', () => {
//     count++;
//     countLabel.innerHTML = count;
// });

// const n = Math.floor(Math.random() * 100);
// console.log(n);

// const myCheckbox = document.getElementById('myCheckbox');

// const myVisa = document.getElementById('myVisa');
// const myMasterCard = document.getElementById('myMasterCard');
// const myPaypal = document.getElementById('myPaypal');
// const payment = document.getElementById('payment');

// document.getElementById('mybutton').addEventListener('click', () => {
//     if(myCheckbox.checked) {
//         document.getElementById('result').textContent = 'You are subscribed';

//     }
//     else {
//         document.getElementById('result').textContent = 'You are not subscribed';
//     }

//     if(myVisa.checked) {
//         payment.textContent = 'You are paying with Visa';
//     }
//     else if(myMasterCard.checked) {
//         payment.textContent = 'You are paying with MasterCard';
//     }
//     else if(myPaypal.checked) {
//         payment.textContent = 'You are paying with Paypal';
//     }
//     else {
//         payment.textContent = 'You must select to payment type';
//     }

// });

// let age = 18;
// const result = age >= 18 ? 'You are an adult' : 'You are a minor';
// console.log(result);

//Random Password
// let logged = false;
// let username, password;
// let count = 0;

// while(!logged) {

//     username = prompt('Enter your username');
//     password = prompt('Enter your password');

//     if(username === 'username' && password === 'password') {
//         logged = true;
//         console.log('You are logged in');
//         break;
//     }
//     else {
//         console.log('Invalid credentials, please try again');
//         count++;
//         if(count === 5){
//             alert('Your account looked');
//             break;
//         }
//     }

// }

// const fruits = ['apple', 'orange', 'coconuts', 'avocado', 'banana'];

// let numberOfFruits = fruits.length;

// console.log(numberOfFruits);

// // let randomFruit = fruits[Math.floor(Math.random() * numberOfFruits)];
// // console.log(randomFruit);
// for(let i = 0; i < numberOfFruits; i++){
//     console.log(fruits[i]);
// }
// fruits.reverse();
// console.log('reversed');
// for(let i of fruits){
//     console.log(i);
// }

// let arrayNumbers = [1, 2, 3, 4, 5];
// let mixNum = Math.min(...arrayNumbers);
// console.log(mixNum);

// let fullName = [];
// let firstName = 'Đào';
// let lastName = 'Khánh Huyền';
// fullName = [...firstName, ...lastName];
// console.log(fullName);

// let fruits = ['apple', 'orange', 'coconuts', 'avocado', 'banana'];
// let vegetables = ['carrots', 'potatoes', 'onion'];

// let fruitsAndVegetables = [...fruits, ...vegetables, 'bean', 'spinach'];
// console.log(fruitsAndVegetables);

// const foood1 = 'pizza';
// const foood2 = 'hamburger';
// const foood3 = 'hotdog';
// const foood4 = 'sushi';
// const foood5 = 'noodle';

// function openFrigde(...foods){
//     console.log(foods);
// }
// openFrigde(foood1, foood2, foood3, foood4, foood5);

// function sum(...number){
//     let sum = 0;
//     for(let i = 0; i < number.length; i++){
//         sum += number[i];
//     }
//     return sum;
// }
// function average(...number){
//     let average = 0;
//     for(let i = 0; i < number.length; i++){
//         average += number[i];
//     }
//     return average / number.length;
// }

// const total = sum(0, 10, 80);
// console.log(`Your total if ${total}`);

// const avg = average(100, 10, 80, 50);
// console.log(`Your avg if ${avg}`);

// function combineStrings(...string){
//     //sử dụng join để nối chuỗi
//   return string.join(' ');
// }

// const fullName = combineStrings('Mr.', 'Spongebob', 'Squarepants', 'III');
// console.log(`Full name: ${fullName}`);

//Callback function in JavaScript

// function hello(){
//     setTimeout(() => {
//         console.log('Hello');

//     },20);
// }

// function goodbye(){

//     console.log('Goodbye');
// }

// hello(goodbye);

//const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // arr.forEach(element => {
// //     console.log(element);
// // });

// arr.forEach(display);

// function display(element){

//     console.log(element);
// }

// const square = arr.map(square);

// console.log(square);

// function square(element){
//     return Math.pow(element, 2);
// }

//const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const newArray = arr.map(a => Math.pow(a, 2));
// console.log(newArray);

// const newArray2 = arr.filter(a => a % 2 === 0);
// console.log(newArray2);

//sau 3000s sẽ hiện thị chữ hello world
// setTimeout(() => console.log('Hello world'), 3000);

// const person = {
//     name: 'Spongebob',
//     age: 30,
//     imEmployee: true,
//     gender: 'Male',
//     sayHello: function(){
//         console.log(`Hello my name is ${this.name}`);
//     },
//     eat: () => {
//         console.log('I am eating a Krabby Party');
//     }
// }

// console.log(person.age);
// console.log(person['age']);
// person.sayHello();
// person.eat();

//Contructor

// function Car(make, model, year, color){
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.color = color;
//     this.drive = () => {
//         console.log('I am driving a '+ this.make +' ' + this.model +' car');
//     }

// }

// const car1 = new Car('Ford', 'Mustang', '2024', 'Red');
// const car3= new Car('Chevrolet', 'Camaro', '2025', 'Blue');
// const car2 = new Car('Dodge', 'Charger', '2026', 'Black');

// console.log(car1);
// console.log(car2);
// console.log(car3);

// car1.drive();

//const colors = ['red', 'green', 'blue', 'white', 'black'];

//swap elements in an array

// [colors[0], colors[4]] = [colors[4], colors[0]];

// console.log(colors);

// const [firstColor, secondColor, thirdColor, ...extractColors] = colors;

// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// //white black
// console.log(extractColors);

// const person1 = {
//     name: 'Spongebob',
//     age: 30,
//     gender: 'Male',
//     job: 'Developer',

// }

// const person2 = {
//     name: 'Larry',
//     age: 20,
//     gender: 'Female',

// }

// const {name, age, gender, job='Unemployed'} = person2;

// console.log(name);
// console.log(age);
// console.log(gender);
// console.log(job);

// function displaPerson({name, age, gender, job}) {

//     console.log(`${name} ${age} ${gender} ${job}`);

// }

// displaPerson(person1);

// console.log(person1);

// const arrayNumbers = [2, 9, 4, 1, 8, 5, 11, 6, 15, 7];

// const sortedArray = arrayNumbers.sort((a, b) => b - a);

// console.log(sortedArray);

// const students = [
//     {name: 'Larry', age: 20, gpa: 8.5},
//     {name: 'Tracy', age: 20, gpa: 9.0},
//     {name: 'John', age: 20, gpa: 8.0},
//     {name: 'Lucas', age: 20, gpa: 8.8},
//     {name: 'Mary', age: 20, gpa: 9.5},
// ]

// console.log(students.sort((a, b) => b.gpa - a.gpa));
// console.log(students.sort((a, b) => b.name.localeCompare(a.name)));

// const date = new Date();
// console.log(date.toUTCString()); //Tue, 02 Apr 2024 02:47:30 GMT

// const date1 = new Date('2023-12-31');
// const date2 = new Date('2024-1-1');

// if(date1.getTime() < date2.getTime()){
//     console.log('HAPPY NEW YEAR!');
// }

// function outer(){

//     let message = 'HAPPY NEW YEAR';

//     function inner(){
//         console.log(message);

//     }
//     inner();
// }

// outer();

// function creaetCounter(){

//     let count = 0;
//     function increment(){
//         count++;
//         console.log(`Count increased:  ${count}`);
//     }

//     return {increment};

// }

// const counter = creaetCounter();
// counter.increment();

//callback
// function func1(callback){

//     setTimeout(() => {
//         console.log('Task 1');
//         callback()},3000);

// }

// function func2(){
// console.log('Task 2');
// console.log('Task 3');
// console.log('Task 4');
// }

// func1(func2);

//try catch finally

// try{
// const dividend = Number(window.prompt('Enter a dividend: '));
// const divisor = Number(window.prompt('Enter a divisor: '));

// if(divisor === 0){
//     throw new Error('You can not divide by zero');
// }

// if(isNaN(dividend) || isNaN(divisor)){
//     throw new Error('Please enter a valid number');

// }
// const result = dividend / divisor;
// console.log(result);

// }

// catch(error){
//     console.log(error);

// }
// console.log('You have reached the end');

// document.title = 'My Document';
// const doc = document.getElementById('spanDom');
// doc.style.color = 'red';
// document.body.style.backgroundColor = 'black';

// const h1 = document.getElementById('heading');
// h1.style.backgroundColor = 'orange';
// h1.style.textAlign = 'center';
// h1.style.margin = '0';

// console.log(h1);

//const div = document.getElementsByClassName('fruits');
// div[0].style.color = 'green';

// for(let fruit of div){
//     fruit.style.backgroundColor = 'lightgreen';
// }
// console.log(div);

// Array.from(div).forEach(element => {
//     element.style.backgroundColor = 'salmon';
// });

// function hello(callback) {

//         console.log('Hello');
//         callback();

// }

// function goodbye() {
//     console.log('Goodbye');
// }

// hello(goodbye);

// function sum(callback, x, y){
//     let result = x + y;
//    callback(result); //40
// }

// function display(result){
//     console.log(result);
// }

// sum(display, 20, 20);

// function displayDOM(result){
//     document.getElementById('myH1').innerText = result;
// }

// sum(displayDOM, 20, 20);

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// numbers.forEach(square);
// numbers.forEach(display);
// function display(element) {
//     console.log(element);

// }
// function double(value, index, array){
//     array[index] = value * 2;
// }

// function square(value, index, array){
//    array[index] =  Math.pow(value,2);
// }

// let fruits = ['apple', 'orange', 'banana', 'coconut'];

// fruits.forEach(capitalize);
// fruits.forEach(display);

// function capitalize(value, index, array){
//     array[index] = value.charAt(0).toUpperCase() + value.slice(1);
// }
// function toUpperCase(value, index, array){
//     array[index] = value.toUpperCase();
// }

// function display(element) {
//     console.log(element);
// }

// const numbers = ['1', '2', '3', '4', '5'];

// const squareNumber = numbers.map(square);

// console.log(squareNumber);

// function square(element){
//     return Math.pow(element,2);
// }

// const mapNumbers = numbers.map(number => Math.pow(number,2));
// console.log(mapNumbers);

// const students = ['Spongebob', 'Patrick', 'Sandy Cheecks', 'Squidward', 'Squarepants'];

// const upperCase = students.map(toUpperCase);
// console.log(upperCase);

// function toUpperCase(string){
//     return string.toUpperCase();
// }

// const studentsUpper = students.map(student => student.toUpperCase());
// console.log(studentsUpper);

//reduce() reduce là phần tử của 1 mảng và nó chỉ trả về 1 giá trị
//giá trị khởi tạo đầu tiên sẽ là 0 (0,5) => (5,30) => (35, 10) => (45, 25) => (70, 15)
// => (85, 20) => 105
// const prices = [5, 30, 10, 25, 15, 20];

// const total = prices.reduce((accumulator, element) => accumulator + element);

// console.log(total);

// const total2 = prices.reduce(sum);
// console.log(`$${total2.toFixed(2)}`);

// function sum(accumulator, element) {
//  return accumulator + element;
// }

// const grades = [70, 80, 50, 90, 95];

// const maxNum = Math.max(...grades);

// const max = grades.reduce(getMax);

// console.log(max);
// console.log(maxNum);

// function getMax(accumulator, element){
//     return Math.max(accumulator, element);
// }

// function hello(){
//     console.log('Hello');

// }
// setTimeout(hello,3000);

// setTimeout(() => {
//     console.log('Goodbye');
// }, 1000);

// const hello = (name, age) => {
//     console.log(`Hello ${name} I'm ${age} years old`);
// }

// hello('Bro', 20);
//person.name = this.name
// const person = {
//     name: 'Bro',
//     age: 20,
//     sayHello(){
//         console.log(`Hello ${this.name} I'm ${this.age} years old`);
//     },
//     goodbye: function(){
//         console.log(`Goodbye ${this.name} I'm ${this.age} years old`);
//     }
// }

// console.log(person.name);
// console.log(person['name']);

// person.sayHello();
// person.goodbye();

//Constructor

// function Car(make, model, year, color){
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.color = color;
// }

// const newCar = new Car('Ford', 'Mustang', 2021, 'Black');
// console.log(newCar);

// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     sayHello(){
//         console.log(`Hello ${this.name} I'm ${this.age} years old`);
//     }

// }

// const p1 = new Person('John', 20);
// p1.sayHello();

//Class

// class Product{

//     constructor(name, price){
//         this.name = name;
//         this.price = price;
//     }

//     displayProduct(){
//         console.log(`Name: ${this.name} Price: $${this.price}`);
//     }

//     calculateTotal(saleTax){
//         return this.price + (this.price * saleTax);
//     }

// }

// const product1 = new Product('Underwear', 29);

// product1.displayProduct();

// const total = product1.calculateTotal(0.1);
// console.log(`Total: ${total.toFixed(2)}`);

// class MathUtil{
//     static PI = Math.PI;

//     static calculateArea(radius){
//         return Math.PI * Math.pow(radius, 2);
//     }

//     static diameter(radius){
//         return 2 * radius;
//     }
// }

// console.log(MathUtil.PI);

// console.log(MathUtil.calculateArea(10));

// console.log(MathUtil.diameter(10));

//Static keyword

// class User{
//     static UserCount = 0;

//     constructor(username){
//         this.username = username;
//         User.UserCount++;
//     }

//     static getUserCount(){
//        console.log(`There are ${User.UserCount} users online`);
//     }
// }

// const user1 = new User('John');
// const user2 = new User('Patrick');
// const user3 = new User('Sandy');
// console.log(user1.username);
// console.log(User.UserCount);

// User.getUserCount();

//Inheritance

// class Animal{
//     alive = true;

//     eat(){
//         console.log(`This is ${this.name} is eating`);
//     }

//     sleep(){
//         console.log(`This is ${this.name} is sleeping`);
//     }
// }

// class Dog extends Animal{

//     name = 'Poodle';

// }

// class Fish extends Animal{
//     name = 'Tuna';

//     swim(){
//         console.log(`This is ${this.name} is swimming`);
//     }
// }
// const dog = new Dog();
// dog.eat();
// dog.sleep();

// const fish = new Fish();
// fish.swim();

//Super keyword
//this = this.object, super = the parent

// class Animal {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;

//     }

//     move(speed){
//         console.log(`The ${this.name} moves at a speed of ${speed}mph`);
//     }

// }

// class Rabbit extends Animal {
//     constructor(name, age, runSpeed) {
//         super(name, age);
//         this.runSpeed = runSpeed;
//     }

//    run(){
//         console.log(`This ${this.name} can run`);
//         super.move(this.runSpeed);
//    }
// }

// class Fish extends Animal {
//     constructor(name, age, swimSpeed) {
//         //trước khi mà sử dụng từ khóa this thì ta cần phải gọi đến hàm constructor của thằng cha
//         super(name, age);
//         this.swimSpeed = swimSpeed;
//     }

//     swim(){
//         console.log(`This ${this.name} can swim`);
//         super.move(this.swimSpeed);

//     }
// }

// class Hawk extends Animal {
//     constructor(name, age, flySpeed) {
//         super(name, age);
//         this.flySpeed = flySpeed;
//     }

//     fly(){
//         console.log(`This ${this.name} can fly`);
//         super.move(this.flySpeed);

//     }
// }

// const rabbit = new Rabbit('Rabbit', 1, 30);
// const fish = new Fish('Fish', 1, 20);
// const hawk = new Hawk('Rabbit', 1, 50);

// console.log(rabbit.name + ' ' + rabbit.age + ' ' + rabbit.runSpeed);

// rabbit.run();
// fish.swim();
// hawk.fly();

//Getter and Setter

// class Rectangle{
//     constructor(width, height){
//         this.width = width;
//         this.height = height;
//     }

//     set width(newWidth){
//         if(newWidth > 0){
//             this._width = newWidth;
//         }

//         else{
//             console.error('Width must be greater than 0');
//         }

//     }

//     set height(newHeight){
//         if(newHeight > 0){
//             this._height = newHeight;
//         }

//         else{
//             console.error('Height must be greater than 0');
//         }

//     }
//     //dấu _ là private hoặc protected

//     get width(){
//         return this._width.toFixed(1);
//     }

//     get height(){
//         return this._height.toFixed(1);
//     }

//     get area(){
//         return `${this._height * this._width.toFixed(1)} cm^2`;
//     }

// }

// const rectangle = new Rectangle(5, 10);
// console.log(rectangle.width);
// rectangle.width = 15;
// //không thẻ set được kiểu này rectangle.setWidth(15);
// console.log(rectangle.width);

// console.log(rectangle.area);

// class Person {
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }

//     set firstName(newFirstName) {
//         if (typeof newFirstName === 'string' && newFirstName.length > 0) {
//             this._firstName = newFirstName;

//         }
//         else {
//             console.error('First name must be a string');
//         }
//     }
//     set lastName(newLasttName) {
//         if (typeof newLasttName === 'string' && newLasttName.length > 0) {
//             this._lastName = newLasttName;

//         }
//         else {
//             console.error('Last name must be a string');
//         }
//     }

//     set age(newAge) {
//         if (typeof newAge === 'number' && newAge > 0) {
//             this._age = newAge;
//         }
//         else {
//             console.error('Age must be a number');
//         }
//     }

//     get firstName() {
//         return this._firstName;
//     }

//     get lastName() {
//         return this._lastName;
//     }

//     get age() {
//         return this._age;
//     }

//     get fullName(){
//         return `${this._firstName}  ${this._lastName}`;
//     }
// }

//     const person = new Person('Patrick', 'Star', 20);
//     console.log(person);
//     console.log(person.firstName);
//     console.log(person.lastName);
//     console.log(person.age);
//     console.log(person.fullName);

//Destructuring

//number
// let a = 1;
// let b = 2;
// //swap between a and b
// [a, b] = [b, a];
// console.log(a, b);

// //array
// const colors = ['red', 'green', 'blue', 'yellow', 'orange'];

// //[colors[0], colors[4]] = [colors[2], colors[0]];
// //['blue', 'green', 'blue', 'yellow', 'red']
// //console.log(colors);

// const [firstColor, secondColor, ...extraColors] = colors;
// console.log(firstColor, secondColor, extraColors);

// //object

// const person1 = {
//     name: 'Squidward',
//     age: 20,
//     occupation: 'Developer'
// }

// const person2 = {
//     name: 'Spongebob',
//     age: 25,
//     occupation: 'Programmer'
// }

// const [person1Name, person2Name] = [person1.name, person2.name];
// console.log(person1Name, person2Name);

// const {name, age, occupation, level="So handsome"} = person1;

// console.log(name, age, occupation, level);

// //function parameter
// function displayPerson({name, age, occupation, level="So handsome"}){
//     console.log(`My name is ${name}, my age is ${age} and my occupation is ${occupation}. I'm ${level}`);

// }

// displayPerson(person1);
// function displayColor([color1, color2, color3,...color]){
//     console.log(color1, color2, color3, color);
// }

// displayColor(colors);

// const person = {
//     name: 'Squidward',
//     age: 20,
//     occupation: 'Developer',
//     hobbies: ['cooking', 'swimming', 'eating'],
//     address: {
//         city: 'San Francisco',
//         state: 'CA',
//         zip: 94107
//     }
// }

// console.log(person.hobbies);
// console.log(person.hobbies[0]);
// console.log(person.address.city);

// for(let props in person.address){
//     console.log(person.address[props]);
// }

// class Person{
//     constructor(name, age, ...address){
//         this.name = name;
//         this.age = age;
//         this.address = new Address(...address);

//     }

// }

// class Address{
//     constructor(city, state, zip){
//         this.city = city;
//         this.state = state;
//         this.zip = zip;
//     }
// }

// const address = new Address('Bikini Bottom', 'San Francisco', 'CA');
// const person = new Person('Spongebob', 20, address);

// console.log(person);

// const person2 = new Person('Squidward', 25, 'New York', 'USA', '123');

// console.log(person2);
// console.log(person2.address);

// const students = [
//         {name: 'Larry', age: 20, gpa: 8.5},
//         {name: 'Tracy', age: 20, gpa: 9.0},
//         {name: 'John', age: 20, gpa: 8.0},
//         {name: 'Lucas', age: 20, gpa: 8.8},
//         {name: 'Mary', age: 20, gpa: 9.5},
//     ]

// const gpas = students.map(student => student.gpa);
// const maxGPA = Math.max(...gpas);
// console.log(maxGPA);

// const max = students.reduce((max, student) => student.gpa > max.gpa ? student : max);
// console.log(max);

// function hello(callback){
//     console.log('hello');
//     callback();
// }

// function bye(){
//     console.log('bye');
// }

// hello(bye);

//a.value.localCompare(b.value) sắp xếp theo bảng chữ cái

//Closures 1 hàm được định nghĩa trong 1 hàm khác
// function outer(){

//     let message = 'Hello';

//     function inner(){
//         console.log(message);
//     }

//     inner();
// }

// outer();

// Bắt đầu một bộ đếm thời gian với setInterval()
//sau 1s thì sẽ console ra chữ Đếm ngược...
// let intervalId = setInterval(() => {
//     console.log("Đếm ngược...");
// }, 1000); // Đếm mỗi giây (1000 milisecond)

// // Sau một khoảng thời gian, dừng bộ đếm bằng clearInterval()
// setTimeout(() => {
//     clearInterval(intervalId); // Dừng bộ đếm với ID được trả về từ setInterval()
//     console.log("Bộ đếm đã được dừng.");
// }, 5000); // Sau 5 giây thì sẽ dùng bộ đếm kết quả là hiện thị ra 4 dòng Đếm ngược sẽ dừng

//Synchronous

// function function1(callback){

//     setTimeout(() => {
//         console.log('Task 1');
//         callback();
//     }, 3000);

// }

// function function2(){

//     console.log('Task 2');
//     console.log('Task 3');
//     console.log('Task 4');
// }

// function1(function2);

//try catch finally

// try {
//     const dividend = Number(window.prompt('Enter a dividend: '));
//     const divisor = Number(window.prompt('Enter a divisor: '));

//     if(divisor == 0){
//         throw new Error('Divisor cannot be 0');
//     }
//     if(isNaN(dividend) || isNaN(divisor)){
//         throw new Error('Dividend or divisor must be a number');
//     }

//     const result = dividend / divisor;
//     console.log(result);
// }
// catch (error) {
//     console.error(error);

// }

// finally {
//     console.log('Finally');
// }

//DOM

// const username = " Bro Code";

// const message = document.getElementById('welcome-msg');

// message.textContent += username === "" ? `Guest` : username;

// const fruits = document.getElementsByClassName('fruits');

// Array.from(fruits).forEach(fruit => {
//     fruit.style.backgroundColor = "yellow";
// });

// let buttons = document.querySelectorAll('.myButton');

// const newButton = document.createElement('button');
// newButton.textContent = 'Button 5';
// newButton.classList.add('myButton');
// document.body.appendChild(newButton);

// newButton.addEventListener('click', (event) => {
//     event.target.remove();
// });

// buttons.forEach(button => {
//     button.addEventListener('click', (event) => {
//         event.target.remove();
//          buttons = document.querySelectorAll('.myButton');
// console.log(buttons);
//     });
// });

// const button = document.getElementById("myButton");

// button.addEventListener('mouseover', (event) => {
//     event.target.classList.add('hover');
// });

// button.addEventListener('mouseout', (event) => {
//     event.target.classList.remove('hover');
// });

// button.classList.add('enabled');

// button.addEventListener('click', (event) => {

//     if(event.target.classList.contains('disabled')){
//         event.target.textContent += '🤬';
//     }
//     else{

//         event.target.classList.replace('enabled', 'disabled');
//     }
// });

//Callback hell

/*
let myPromise = new Promise(function(myResolve, myReject) {
// "Producing Code" (May take some time)

  myResolve(); // when successful
  myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function(value)
  function(error)
*/

//Promise
//Async/Await sử dụng 2 thằng này cho phép viết async code trong sync code
// function walkDog() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const dogWalked = true;

//       if (dogWalked) {
//         resolve("You walk the dog 🐕");
//       } else {
//         reject("You DID NOT walk the dog");
//       }
//     }, 2000);
//   });
//   return promise;
// }
// function cleanKitchen() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const kitchenCleaned = true;
//       if (kitchenCleaned) {
//         resolve("You clean the kitchen");
//       } else {
//         reject("You DID NOT clean the kitchen");
//       }
//     }, 2500);
//   });
// }
// function takeOutTheTrash() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const trashTaken = true;
//       if (trashTaken) {
//         resolve("You take out of the trash ");
//       } else {
//         reject("You DID NOT take out of the trash ");
//       }
//     }, 500);
//   });
// }

// //C2
// async function doChores() {
//   try {
//     const walkDogResult = await walkDog();

//     console.log(walkDogResult);

//     const cleanKitchenResult = await cleanKitchen();

//     console.log(cleanKitchenResult);
//     const takeOutTheTrashResult = await takeOutTheTrash();

//     console.log(takeOutTheTrashResult);

//     console.log("You finished all the chores!");
//   } catch (error) {
//     console.error(error);
//   }
// }

// doChores();

//C1: xâu chuỗi (chaining Promise)
// walkDog().then((value) => {console.log(value);return cleanKitchen();})
//   .then((value) => {console.log(value);return takeOutTheTrash();})
//   .then((value) => {console.log(value);console.log("You finished all the chores!");})
//   .catch((error) => {console.error(error);});

/*JSON là 1 định dạng dữ liệu (chuỗi) */

// let json = '["JavaScript", "Golang", "React"]';
//  let json1 = '{"name": "Spongebob", "age": 20}';

// // let a = '"abc"';
// // let n = '1';

// console.log(JSON.parse(json1));

// const names = ["Spongebob", "Patrick Star", "Squidward", "Sandy Cheeks", "Squarepants"];

// const person = {
//     "name": "Spongebob",
//     "age" : 20,
//     "hobbies": ["Cooking", "Jellyfishing", "Karatedo"],
//     "address": {
//         "street": "124 Conch Street",
//         "city": "Bikini Bottom",
//         "country": "Int. Water"
//     },
//     "phone-numbers": "0123-456-789"
// };

// const people = [{
//     "name": "Spongebob",
//     "age" : 20,
//     "hobbies": ["Cooking", "Jellyfishing", "Karatedo"],
//     "address": {
//         "street": "124 Conch Street",
//         "city": "Bikini Bottom",
//         "country": "Int. Water"
//     },
//     "phone-numbers": "0123-456-789"
// },
// {
//     "name": "Squidward",
//     "age" : 22,
//     "hobbies": ["Cooking", "Jellyfishing"],
//     "address": {
//         "street": "Manhattan",
//         "city": "New York",
//         "country": "America"
//     },
//     "phone-numbers": "0987-654-321"
// },

// {
//     "name": "Sandy Cheeks",
//     "age" : 30,
//     "hobbies": ["Swimming", "Eating"],
//     "address": {
//         "street": "221B Baker",
//         "city": "London",
//         "country": "England"
//     },
//     "phone-numbers": "0987-654-321"
// }
// ];

// const jsonString = JSON.stringify(person);
// console.log(jsonString);

// const jsonParse = JSON.parse(jsonString);
// console.log(jsonParse);
// console.log(jsonParse.name);

// fetch('people.json').then(respone => respone.json())
// .then(values => values.forEach(value => console.log(value.name)))
// .catch(error => console.error('There was a problem with the fetch operation:', error));

//Promise sinh ra để giúp ta sử lý bất đồng bộ
//Sync đồng bộ
//Async bất đồng bộ setTimeout, setInterval, fetch(call API), XMLHttpRequest

// function hello(callback) {
//   setTimeout(() => {
//     console.log("Hello");
//     callback();
//   }, 3000);
// }

// function bye() {
//   console.log("bye");
// }

// hello(bye);

// let promise = new Promise(
//   //Execute callback
//   function (resolve, reject) {
//     //Logic
//     //Thành công : resolve()
//     //Thất bại: reject()
//     resolve();
//   }
// );

// promise
//   .then(() => {
//     console.log("Successfully!");
//   })
//   .catch(() => {
//     console.log("Failure!");
//   })
//   .finally(() => {
//     console.log("Done");
//   });

//   let myPromise = new Promise(function(myResolve, myReject) {
//     setTimeout(function() { myResolve("I love You !!"); }, 3000);
//   });

//   myPromise.then(function(value) {
//     document.getElementById("demo").innerHTML = value;
//   });

// function task1(callback){
//     setTimeout(() => {
//         console.log('Task 1');
//         callback();
//     }, 3000);
// }

// function task2(callback){
//     setTimeout(() => {
//         console.log('Task 2');
//         callback();
//     },1000);

// }

// function task3(callback){
//     setTimeout(() => {
//         console.log('Task 3');
//         callback();
//     }, 1500);
// }

// task1(() => {
//     task2(() => {
//         task3(() => {
//             console.log('Done');
//         })
//     })
// })

// function sleep(ms){
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// sleep(1000).then(() => {
//   console.log('Task1');
// nếu ở đây thằng task1 nó không return ra 1 promise thì nó sẽ trực tiếp nhảy vào thằng
// kiền kết nó
//   return sleep(5000);
// }).then(() => {
//   console.log('Task2');
//   return sleep(10000);
// }).then(() => {
//   console.log('Task3');
// });

// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve([1]);
//   }, 1000);
// });

// let promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve([2, 3]);
//   }, 2000);
// });

// //khi mà all promises đều execute xong thì nó mới trả ra kết quả values
// //Promise.all([promise1, promise2, ...]) very useful when you want to run parallel
// Promise.all([promise1, promise2]).then(([result1, result2]) => {
//   console.log(result1.concat(result2));
// });

// async function fetchData() {
//   const url = "https://jsonplaceholder.typicode.com/posts";

//   try {
//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }

//     const datas = await response.json();
//     // console.log(datas);


//     const htmls = datas.map((post) => {
//       return `<li>
//        <h2>${post.title}</h2>
//        <p>${post.body}</p>
//        </li>`;
//     });
//     const html = htmls.join("");

//     document.getElementById("post-block").innerHTML = html;
//   } catch (error) {
//     console.log(error);
//   }
// }

// fetchData();


