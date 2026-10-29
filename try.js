// // console.log("hello world");
// // const accountID = 1234
// // let accountEmail = "ankit@gemail.com"
// // var accountName = "Ankit"
// //  accountID = 5

// //  console.log(accountID)
// //  console.table({accountID, accountEmail, accountName})
// // let score = "34asd"
// // console.log(typeof score)

// //************************************************************ Convertion  *****************************************************************

// // let valueInNumber = Number(score)
// // console.log(typeof valueInNumber)
// // console.log(valueInNumber);

// // let isLoggedIn = 1
// // let booleanIsLoggedIn = Boolean(isLoggedIn)
// // console.log(booleanIsLoggedIn)

// // let someNumber = 44
// // let stringNumber = String(someNumber)
// // console.log(typeof stringNumber)


// //**************************************************************  Opertion *******************************************************************
// // let value =  9
// // let neg = -value
// // console.log(neg);

// // let str = "gytt"
// // let str2 = "gytt"
// // console.log(str + str2);
// // console.log(+ true)

// /************************************************comparistion******************************** */
// // console.log(2 > 1);
// // console.log(2 < 2);
// // console.log(2 >= 2);
// // console.log(2 <= 2);
// // console.log(2 == 2);
// // console.log(2 === 2);
// // console.log(2 != 2);
// // console.log(2 !== 2);
// // console.log("2" == 2);
// // console.log("2" === 2);

// /***********************************************data type*********************************************/
// //Primitvie
// // 7 types = string , number , boolean, null, undefined, symbol, bigint

// // const score = 100
// // const scoreValue = 100.8
// // const isLogin = false
// // const outsideTemp = null
// // let userEmail;
// // const id = Symbol("123")
// // const anotherId = Symbol("123")
// // console.log(id === anotherId);
// // const bigNumber = 3456789012345678901234567890n


// //Reference(Non primitive)
// //Array,object, function

// // const heros = ["shaktiman", "naagraj", "doga"];
// // let myObj = {
// //     name: "Ankit",
// //     age: 23,
// // }
// // const myFunction = function () {
// //     console.log("Hello World");
// // }

// /*********************************Memory******************************** */
// // Stack = Primitive data type (number, string, boolean, null, undefined, symbol, bigint)
// // Heap = Reference data type (Array, object, function)

// // let MyYoutube = "AnkitVlogs"
// // let anotherYoutube = MyYoutube
// // anotherYoutube = "AnkitVlogs2"
// // console.log(MyYoutube);
// // console.log(anotherYoutube);

// // let user ={
// //     email: "ankuy@gt",
// //     upi:"ankit@ybl"
// // }

// // let user2 = user
// // user2.email = "ankit@gt"
// // console.log(user.email);
// // console.log(user2.email);

// /**************************************String******************************* */
// // const name ="ankit"
// // const repoCount = 45

// // console.log(name + repoCount +"value")

// // console.log(`hello my name is ${name} and my repo ${repoCount}`);

// // const gameName = new String('hait-utd')
// // console.log(gameName[0]);
// // console.log(gameName.__proto__);
// // console.log(gameName.toUpperCase());
// // console.log(gameName.toLowerCase());
// // console.log(gameName.length);
// // console.log(gameName.charAt(2));
// // console.log(gameName.indexOf('t'));


// // const newString = gameName.substring(0, 4)

// // console.log(newString);

// // const anotherString = gameName.slice(-8, 2)

// // console.log(anotherString);

// // const myString = "    hello world    "
// // console.log(myString);
// // console.log(myString.trim());
// // console.log(myString.trimStart());
// // console.log(myString.trimEnd());

// // const url = "https://ankit.com"
// // console.log(url.replace("https", "http"));
// // console.log(url.includes("ankit"));
// // console.log(url.split("."));

// /*******************************************Nums And Maths************************************************ */

// // const score = 400
// // const balanc = new Number(100)
// // console.log(balanc);
// // console.log(score);
// // console.log(balanc.toString().length);
// // console.log(balanc.toFixed(2));

// // const otherBalanc = 257.9076
// // console.log(otherBalanc.toPrecision(4));

// // const hundreds = 1000000
// // console.log(hundreds.toLocaleString())

// // console.log(Math);
// // console.log(Math.abs(-4));
// // console.log(Math.round(4.6));
// // console.log(Math.ceil(4.2));
// // console.log(Math.floor(4.9));
// // console.log(Math.min(4,2,3,1));
// // console.log(Math.max(2,8,2,3,3));
// // console.log(Math.random());
// // console.log((Math.random()*10)+1);

// // const min = 10
// // const max = 20

// // console.log(Math.floor(Math.random() * (max - min + 1) + min));

// /******************************************Data and Time********************************************** */

// // let myDate = new Date()
// // console.log(myDate.toString());
// // console.log(myDate.toISOString());
// // console.log(myDate.toJSON());
// // console.log(myDate.toLocaleDateString());
// // console.log(myDate.toLocaleString());
// // console.log(typeof myDate);

// // const myCreatedDate = new Date(2023, 0, 24, 5, 3)
// // console.log(myCreatedDate.toDateString());
// // console.log(myCreatedDate.toLocalString());

// // let myCreatedDate = new Date("2024-03-12")
// // // console.log(myCreatedDate.toLocaleString());

// // let myTimeStamp = Date.now()
// // console.log(myTimeStamp);
// // console.log(myCreatedDate.getMonth());
// // console.log(myCreatedDate.getDate());

// // newDate.toLocalestring('default',{
// //     weekday: "long",
// //     year: "numeric",
// //     month: "long",
// //     day: "numeric"  
// // })

// /*****************************************************Array******************************************************************* */

// // const arr = [0, 1, 1, 3,23,true,"hit"]
// // console.log(arr[4]);

// // const heros = ["shaktiman", "naagraj", "doga"];
// // heros[0] = "batman"
// // heros[3] = "superman"
// // console.log(heros);
// //  const myarray2 = new Array(1,2,3,4,5)
// //  console.log(myarray2[1]);

// // Array methods

// // myarray2.push(6)
// // myarray2.push(7)
// // myarray2.pop(5)
// // console.log(myarray2);
// // myarray2.unshift(9)
// // console.log(myarray2);
// // myarray2.shift()
// // console.log(myarray2);  
// // console.log(myarray2.includes(7));
// // console.log(myarray2.indexOf(5));

// // const newarr = myarray2.join()
// // console.log(myarray2);
// // console.log(newarr);

// // //slice, splice

// // console.log("A",myarray2);
// // const myn1 = myarray2.slice(1,3)

// // console.log(myn1)
// // console.log("B",myarray2)

// // const myn2 = myarray2.splice(1,3)
// // console.log(myn2)
// // console.log("C",myarray2)

// // const marvel_heros = ["ironman", "spiderman", "hulk", "thor"]
// // const dc = ["superman","flash","batman"]

// // marvel_heros.push(dc)
// // // console.log(marvel_heros);
// // // console.log(marvel_heros[4][1]);

// // let allHeros = marvel_heros.concat(dc)
// // console.log(allHeros);//conact operater

// // const allHeros2 = [...marvel_heros, ...dc]
// // console.log(allHeros2);//spread operator

// // const anotherArray = [1,2,3,[3,4,5,2],6,[46,43,[3,5,6]] ]
// // const real_another_arr = anotherArray.flat(Infinity)
// // console.log(real_another_arr);  

// // console.log(Array.isArray("Anki")); 
// // console.log(Array.from("Ankit")); 
// // console.log(Array.from({name: "Ankit", age: 23})); //intersting

// // let score1 = 100
// // let score2 = 200
// // let score3 = 300

// // console.log(Array.of(score1,score2,score3));

// /**********************************************Objects*************************************************************** */

// // const MySym = Symbol("key1")
// // const student = {
// //     name : "Ankit",
// //     age : 18,
// //     branch :"CST",
// //     isLoggiedin :"false",
// //     lastLoggedIn:["monady","Saturday"],
// //     "Full name": "Ankit samal",
// //     [MySym]: "mykey2",
// //     email : "samal@google.com"
// // };

// // console.log(student);
// // console.log(student.name);
// // console.log(student["name"]);
// // console.log(student["Full name"]);
// // console.log(student[MySym]); 
// // console.log(typeof student[MySym]);
// // student.email = "ankitSamal@google.com"
// // // console.log(student.email);
// // // Object.freeze(student)
// // student.email = "ankit2024@gemail.com"
// // console.log(student.email);

// // student.greeting = function(){
// //     console.log("Hello");
// // }
// // student.greetingTwo = function(){
// //     return `Hello ${student.name}`
// // } 
// // console.log(student.greetingTwo());  
// // console.log(student.greeting());

// // const tinderUser = new Object()
// // const tinderUser = {}
// // tinderUser.id = "12345"
// // tinderUser.name = "Sammy"
// // tinderUser.isLoggedIn = false

// // // console.log(tinderUser);
// // const User = {
// //     email:"ankit@2028",
// //     fullname:{
// //         userName:{
// //             firstname:"Ankit",
// //             lastname:"Samal"
// //         }
// //     }
// // }
// // // console.log(User.fullname.userName.lastname);

// // const obj1 = {1:"a",2:"b"}
// // const obj2 = {3:"d",4:"e"}
// // const obj3 = {5:"f",6:"h"}

// // // const obj4 = Object.assign({},obj1,obj2,obj3)

// // const obj4 = {...obj1,...obj2}
// // console.log(obj4);

// // // data coming from the user side
// // const vuser = [
// //     user1={
// //         name:"ankiy",
// //         email:"anjut@e4e"
// //     },
// //      user1={
// //         name:"ankiy",
// //         email:"anjut@e4e"
// //     },
// //      user1={
// //         name:"ankiy",
// //         email:"anjut@e4e"
// //     },
// //      user1={
// //         name:"ankiy",
// //         email:"anjut@e4e"
// //     }
// // ]
// // console.log(vuser[1].email);

// // console.log(tinderUser);
// // console.log(Object.keys(tinderUser));
// // console.log(Object.values(tinderUser));
// // console.log(Object.entries(tinderUser));

// // console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// // const course = {
// //     coursename: "js in hindi",
// //     price: "999",
// //     courseInstructor: "hitesh"
// // }
// // // course.courseInstructor

// // const {courseInstructor} = course
// // console.log(courseInstructor);
// // const {courseInstructor: instructor} = course
// // console.log(instructor);

// /***********************************************Function************************************************************ */

// // function myname() {
// //     console.log("A");
// //     console.log("A");
// //     console.log("A");
// //     console.log("A");
// //     console.log("A");
// //     console.log("A");
// //     console.log("A");
// //     console.log("A");
// //     console.log("A");

// // }
// // // myname()
// // function add(num1,num2){
// //     console.log(num1+num2);
// // }
// // add(2,"g")

// // function add(num1,num2){
// //     // result = num1+num2
// //     // return result
// //     return num1 + num2
// // }
// // const result = add(5,5)
// // console.log("Result :",result);
// // function loggedIn(userName){
// //     if(userName === undefined){
// //         console.log("Please enter a user name");
// //         return
// //     }
// //     return `${userName} he is the user`
// // }
// // console.log(loggedIn());
// // function loggedIn(userName){
// //     if(!userName){
// //         console.log("Please enter a user name");
// //         return
// //     }
// //     return `${userName} he is the user`
// // }
// // console.log(loggedIn());

// // function calculateAddToCart(...add){
// //     return add
// // }
// // console.log(calculateAddToCart(455,543,666,232));
// // function calculateAdd (val1,val2,...add){
// //     return add
// // }
// // console.log(calculateAdd(345,24,54,666,6))
// // const user ={
// //     userName:"Ankit",
// //     prices:676
// // }
// // function Userhand(object){
// //     console.log(`User name is ${object.userName} and the total prices ${object.prices}`);
// // }
// // Userhand(user)
// // Userhand({
// //     userName:"Dafr",
// //     prices:87
// // })

// // const array = [3,2,5,4,3,3]

// // function myarray(getarray){
// //     return getarray[3]
// // }
// // console.log(myarray(array));
// // console.log(myarray([3,4,2,5,2]));

// // /***************************************Scope****************************************** */
// // var c = 400
// // if(true){
// //     c = 400
// // }
// // console.log(c)
// // function one(){
// //     const name = "Ankit"
// //     function two(){
// //         console.log(name);
// //     }
// //     // two()
    
// // }
// // one()

// // if(true){
// //     const user = "ankit"
// //     if(user === "ankit"){
// //         console.log("Well come");
// //         const bput = "rorkela"
// //     }
// //     // console.log(bput);
// // }
// // // console.log(user);

// // //++++++++++++++++++++++++INtersting++++++++++++++++++++++++++++++

// // function addone(num){
// //     return num + 1
// // }
// // console.log(addone(4));

// // const addtwo = function (num){
// //     return num + 2
// // }
// // console.log(addtwo);

// // const users = {
// //     Nmae:"ankit",
// //     id :54,
// //     details: function(){
// //         console.log(`${this.Name},Wellcome`)
// //         console.log(this)
// //     }
// // }
// // users.details()
// // users.Name = "das"
// // users.details()

// // const chai = () => {
// //     const username = "ankit"
// //     console.log(username);
// //     console.log(this);
// // }
// // chai()

// // const addTwo = (num1,num2) => {
// //     return num1 + num2
// // }
// // console.log(addTwo(2,3));

// // const addTTwo = (num1,num2) => (num1+num2)
// // console.log(addTTwo(2,3));
// // const addTrTwo = (num1,num2) => ({Name:"dfgs"})
// // console.log(addTrTwo(3,2))

// //Imediately Invoked Function Expression(IIFE)

// // (function chai(){ // named IIFE
// //     console.log(`DB CONNECTED`);
// // })();
// // ((Nma)=>{
// //     console.log(`${Nma} is his name`);
// // })("hyds");

// /**************************************************CONDITION********************************************************************** */

// // if (true){
// //     console.log(0.9);
// // }
// // const userLoggedIN = true
// // const debited = true
// // const loogedByGoogle = false
// // const loogedByEmial = true

// // if(userLoggedIN && debited && 2==2){
// //     console.log("Now you can go");
// // }
// // if(loogedByEmial || loogedByGoogle){
// //     console.log("Now you can enjoy");
// // }

// // const month = 3;

// // switch(month){
// //     case 1:
// //         console.log("today");
// //         break;
// //     case 2:
// //         console.log("too");
// //         break;
// //     case 3:
// //         console.log("ere");
// //         break;
// //     default:
// //         console.log("no");
// //         break;                
                
// // }

// //****************************************************************************** */ truty & falsi

// //  let uservalue = ""
// //  if(uservalue){
// //     console.log("Got it");
// //  }
// // else{
// //     console.log("N  O");
// // }

// // /// falsy value = false,0,-0,BigInt 0n,"",null,undefind,NaN
// // ///Truthy value = "0",'false',"",[],{},function(){}

// // if (userLoggedIN.length == 0){
// //     console.log("empty");
// // }
// // else{
// //     console.log("Noop");
// // }

// // if(Object.key(emptyObj).length == 0){
// //     console.log("object empty");
// // }
// // else{

// // }
// // Nullish Coalescing Operator (??): null undefined

// // let val1;
// // val1 = 5 ?? 10;
// // val1 = null ?? 10
// // val1 = undefined ?? 12
// // val1 = null ?? 12 ?? 4
// // val1 = 4 ?? null ?? 3

// // console.log(val1)

// // //Terniary Operator
// // // cond ? true : false
// // 2 == 2 ? console.log("hell"):console.log("ko")

// //****************************************************ITERATIONS************************************************************************ */

// // for (let i = 0; i <= 5; i++){
// //     console.log(`1st loop ${i}`);
// //     for(let j =0; j<= 5; j++){
// //         // console.log(`First j value ${j} and i value ${i}`);
// //         console.log(i + '*' + j+ ' = ' + i*j);
// //     }
// // }

// // let array = [2,4,1,3,5,6,7,8]
// // for (let i =0; i<=array.length; i++){
// //     if(i == 6){
// //         console.log("6 is present")
// //         continue // break
// //     }
// //     console.log(`values are ${i}`);
// // }

// // let i =0 
// // while(i<=10){
// //     console.log(`Value of index is ${i}`);
// //     i =i +2
// // }
// // let myArray = ["batrman","superman","spiderman"]
// // let arr = 0
// // while(arr<myArray.length){
// //     console.log(`Value is ${myArray[arr]}`);
// //     arr ++
// // }

// // let score = 1
// // do{
// //     console.log("Ankit")
// //     score ++
// // } while(score <= 10);

// // for of

// // const arr = [4,35,6,3,5,6,5]
// // for (const num of arr){
// //     console.log(num);
// // }

// // const greetings = "Hello world"
// // for (const gret of greetings){
// //     console.log(`each char is ${gret}`)
// // }

// // //Maps

// // const map = new Map()
// // map.set('IN','india')
// // map.set('USA','United States Of America')
// // map.set('UK','United Kingdom')
// // map.set('IN','India')
// // console.log(map)

// // for (const [key,value] of map){
// //     console.log(key,':-',value);
    
// // }

// // const myObject = {
// //     'game1':'NFS',
// //     'game2':'spiderman'
// // }
// // const myobject = {
// //     'js':'javasscript',
// //     'py':'python',
// //     'rb':'ruby'

// // }
// // for (const key in myobject){
// //     console.log(myobject[key]);
// //     console.log(`${key} shortcut for ${myobject[key]}`);
// // }
// // let programming = [1,2,3,4,5,6,7,8]
// //     for(const key in programming){
// //         console.log(programming[key]);
// //         console.log(key);
// //     }

// // for each loop

// // const coding = ["js","rb","py"]
// // coding.forEach(function (val){
// //     console.log(val);
// // })
// // coding.forEach((ite)=>{
// //     console.log(ite);
// // })
// // coding.forEach((ite,indx,arr)=>{
// //     console.log(ite,indx,arr);
// // })

// // const myobj = [
// //     {
// //         langu:"hindi",
// //         part:1
// //     },
// //     {
// //         langu:"odia",
// //         part:2
// //     }
// // ]
// // myobj.forEach((iteam)=>{
// //     console.log(iteam.langu);
// // })

// const myNums = [1,2,3,4,5,6,7,8,9,12]

// // const newNums = myNums.filter((num)=>num>4)
// // console.log(newNums);

// const newNums = []
// myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);

// const myNumber = [1,2,34,4,3,25,67,55,0]
// // const newnumber = myNumber.map((num)=>num+10)
// // console.log(newnumber);

// // Chaning
// const newNumbers = myNumber
//                 .map((num)=>num*10)
//                 .map((num)=>num+1)
//                 .filter((num) => num >= 40)
// console.log(newNumbers);                

// const Number = [1,2,3]

// const Total = Number.reduce(function (acc, curval){
//     console.log(`acc:${acc} and curval:${curval}`);
//     return acc + curval
// },0)
// console.log(Total);

// const shopping = [
//     {
//         iteamName : "Js",
//         price:233

//     },
//     {
//         iteamName:"py",
//         price:898
//     },
//     {
//         iteamName:"mobildev",
//         price:878
//     }
// ]
// const TotalAmount = shopping.reduce((acc,num) => acc + num.price,0)
// console.log(TotalAmount)
