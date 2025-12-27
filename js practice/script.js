// //console 

// //console.log
// console.log("Hello")

// //console.warn
// console.warn("Hello")

// //console.error
// console.error("Hello")

// //alert
// alert("hey!!");

// //prompt
// prompt("Hello") 

// //variable
// var discount = 10;
// discount = 22;

// //constant
// const discount = 12;
// discount = 23;

// //compiler
// //Interpreter
// //window


// //primitive and reference data type
// var arr = [1,2,3,4,5,6];
// var b = arr;

// b.pop();
 
// //spread
// var ar = [12,13,14,15];
// var gh = [1,2,3];
// var ba = [...gh];
// ba.pop();

// if(12>13){
//     console.log("hey");
// }
// else{
//     console.log("hello");
// }

// if(13>12){

// }
// else if(14>12){

// }
// else if(17>15){

// }
// else{

// }

// loops = repeat

// //for 
// for(start; end; change){

// }

// //1-10
// for(var i = 1; i < 11; i++){

// }

// //15-11
// for(var i = 15; i > 10; i--){

// }

// //32-45
// for(var i = 32; i < 46; i++){
    
// }

// //while
// start;
// while(end){
//     Change;
// }

// //32-45
// var i = 32;
// while(i<46){
//     i++;
// }

// //45-32
// var i = 45;
// while(i>31){
//     i--;
// }

// //12-1
// var i = 12;
// while(i>0){
//     i--;
// }

// //Function
// function abcd(){
//     var i = 12;
//     console.log(i);
//     for (var b = 12; b < 22; b++){
//         console.log("Hey!!!")
//     }
// }
// abcd();


// var dateofbirth = 18;
// var todaysdate = 18;
// function happybirthday(){
//     console.log("Happy Birthday");
// }
// if(dateofbirth === todaysdate){
//     happybirthday();
// }

// //parameters and arguments
// function abcd(val){
//     console.log(12+val);
// }
// abcd(12);

// //prep for interview
// function abcd(){
//     //function statement
// }

// var abcd = function(){
//     //function expression
// }

// function(){
//     //anonymous function
// }

// //fat arrow
// var a = ()=>{};
// var b = ()=>{

// }
// var c = ()=>{

// }

// //fat arrow with one parameter
// var g = (ab) => {}

// g(12)

// //fat arrow with implicit return
// var abcd = ()=>"harsh";

// abcd();

// function abcd(){
//     return 12;
// }

// console.log(abcd());

// //fat arrow example
// var a = ()=>{
//      return 12;
// }

// var b = a();

// //arrays
// var users = ["amruta","nidhi","akanksha","siddhi","purvi"];
// console.log(users[5]);

// var arr = [1,2,"3",function(){},[],4];

// var arr = [1, 2, 13, 4, 15];

// //how to loop an array
// arr.forEach(function(val){
//   console.log(val+1);
// })

// //object

// var obj = {};
// var obj2 = new Object();

// var obj = {
//     name: "amruta",
//     age: 21,
//     email: "amrutadahatonde10@gmail.com",
//     contact: 7499447951
// };



// //global - window
// console.log(this);

// //function - window
// function abcd(){
//     console.log(this);
// }
// abcd();

// //method - object
// var obj = {
//     name : function(){
//         console.log(this);
//     },
//     age: 25,
//     email: "amruta"
// }
// obj.name();

// //function inside method (es5) - window
// var obj2 = {
//     sayName: function(){
//         console.log(this);
//         function childfnc(){
//             console.log(this);
//         }
//         childfnc();
//     },
//     age: 25
// }
// obj2.sayName();

// //fun inside method (es6) - object
// var obj3 = {
//     sayName: function(){
//         const child = ()=>{
//             console.log(this);
//         }
//         child();
//     }
// }
// obj3.sayName();

// //constructor fun in this value - new blank object
// function add(){
//     console.log(this);
// }

// const ans = new add();

// //event listener in this value - that element where event lis. laga ho
// document.querySelector("button")
// .addEventListener("click",function(){
//     console.log(this);
// })

// //call
// const obj = {name: "amss"}

// function abcd(){
//     console.log(this);
// }
// abcd.call(obj)


// //apply
// const obj2 = {name: "amss"}

// function abcd(a,b,c){
//     console.log(this,a,b,c);
// }
// abcd.apply(obj2,[1,2,3])


// //bind
// const obj3 = {name: "amss"}

// function abcd(){
//     console.log(this);
// }
// const aftersometime = abcd.bind(obj3);
// aftersometime();

// //Prototypal inheritance
// function makeHuman(name, age){
//     this.name = "amruta";
//     this.age = 21;
// }

// let ans = new makeHuman();

// function abcd(){
//     this.username = "amruta";
//     var calc = 12*3;
// }

// var ans = new abcd();

// function makeHuman(name,age){
//     this.name = name;
//     this.age = age;
// }

// makeHuman.prototype.printMyName = function(){
//     console.log(this.name);
// }

// const human1 = new makeHuman("amss",21);
// const human2 = new makeHuman("Amruta",20);

//closures-it is a function and returns another function & use any variable of parent function.
// function counter(){
//     var count = 0;
//     return function(){
//         count++;
//         console.log(count);
//     }
// }

// var fnc = counter();
// fnc();
// fnc();

// function abcd(){
//     var a = 12;
//     return function(){
//         console.log(a);
//     }
// }
// var ans = abcd();
// ans();

// function timer(){
//     var a = 12;
//     return setTimeout(function(){
//         console.log(a);
//     }, 2000)
// }

// var ans = timer();


// //event delegation
// var parent = document.querySelector("#parent");

// parent.addEventListener("click", function(details){
//     if(details.target.id === "play"){
//         console.log("play song");
//     }
//     else if(details.target.id === "pause"){
//         console.log("pause song")
//     }
// })

// //higher order function
// var arr = [1,2,3,4,5,6];
// arr.forEach(function(){})

// //error handling like pro - try catch
// function divide(a,b){
//     try{
//         if(b == 0){
//             throw Error("doing mistake")
//         }
//         console.log(a/b)
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// divide(12,0);

// //Custom Events
// const evt = new Event("gm");

// document.querySelector("button")
// .addEventListener("gm", function(){
//     alert("gm");
// })

// document.querySelector("button").dispatchEvent(evt);

// //id
// var abcd = document.querySelector('#abcd');

// //class
// var classabcd = document.querySelector('.abcd');

// //tag
// var h3 = document.querySelector("h3");

// var firstimg = doccument.querySelector("#a1");
// var sectimg = document.queryselector(".a1");

// var firsth3 = document.querySelector(".a2");
// var sech3 = document.querySelector("#a2");


// //Modifying Elements- TextContent
// var btn = document.querySelector("button");
// btn.textContent = "Starting...";

// var h1 = document.querySelector("h1");
// h1.classList.add('makeitred');
// h1.classList.remove('makeitred');



// h1.style.color = 'red';
// h1.style.fontFamily = "gilroy"; 
// h1.style.fontSize = "16px";

// var h1 = document.createElement('h1');
// h1.textContent = "Hey";
// h1.classList.add("makeitred");

// document.querySelector("body").appendChild(h1);


// //creating and deleting elements
// var img = document.createElement("img");
// img.src = 'https://i.pinimg.com/236x/a0/35/1b/a0351bf4d9a256b769478f350303621b.jpg';

// document.querySelector("body").appendChild(img);
// document.querySelector("body").removeChild(img);

// //Event Handling
// var btn = document.querySelector("button");
// btn.addEventListener('mouseover', function(){
//     btn.textContent = "Starting...";
//     btn.style.backgroundColor = "red";
// });

// var btn = document.querySelector("button");
// btn.addEventListener('mouseleave', function(){
//     btn.textContent = "make new card";
//     btn.style.backgroundColor = "#fff";
// });


// //Event object
document.querySelector("body")
.addEventListener("mousemove", function(dets){
    console.log(dets);
})
