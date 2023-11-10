
// const time = new Date().getDate();
// let print;
// if (time < 2) {
//     print = "hiii";
// }
// else if (time == 5){
//     print = "today";
// }
// else {
//     print = "nill";
3
// console.log(print);



//     let text;
// switch(new Date().getDay()){
//     case 0:
//     text="sunday";
//     break;
//     case 1:
//     text="monday";
//     break;
//     case 2:
//     text="tuesday";
//     break;
//     case 3:
//     text="wednesday";
//     break;
//     case 4:
//     text="thursday";
//     break;
//     case 5:
//     text="friday";
//     break;
//     default:
//         text="saturday";
// }
// console.log(text);
//     let text1;
// for(let i=0; i<10; i++) {

//     text1 += "the number is " + i + "    ";
// }
// console.log(text1);

// var i = 5;
// for (var i=0;i < 10; i++) {
//     console.log(i);
  
// }
// console.log(i);


// let j = 5;
// for (let j = 0; j < 10; j++) {
// console.log(j);
// }
// console.log(j);


//for in object

// const person = {fname:"John", lname:"Doe", age:25};
// let persondet= "";
// for(i in person)
// {
//    persondet += person[i] + " ";
// }
// console.log(persondet)


//for in array

// const numbers = [45, 4, 9, 16, 25];

// let txt = 0;
// for (let x in numbers) {
//   txt =txt+ numbers[x] 
// }
// console.log(txt);


// const numbers = [45, 4, 9, 16, 25];
// let myArray=[]
// let a=0;
// let txt = "";
// numbers.forEach((value, index, array)=>{
//     a=a+index;
//     // console.log(array);
//     myArray=array
// });
// console.log(myArray)

// function myFunction(value, index, array) {
 
//    a=a+index;
//     console.log(index);

// }
// console.log(a);


//map function
// const numbers = [12, 55, 63 ,85, 20];
// let result = numbers.map((numb,i)=>{
//     if(numb>12){
//         return numb;
//     }
// });
// console.log(result);

//copy within

// const fruits = ["Banana", "Orange", "Apple", "Mango", "jacfruit"];
// fruits.copyWithin(4, 1);
// console.log(fruits);

//entries()

// let x=" ";
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const f = fruits.entries();

// for (let x of f) {
    
//    console.log(x);
// }



//every  

// const ages = [32, 33, 16, 40];
// let ab=ages.every((age)=>{
//  return age>18

// })

// console.log("my result is " , ab)


// const number=["55", "21", "63", "33"];
// let a =number.every(checkage);
// function checkage(checknumber){
//    return checknumber > 20;
// }
// console.log(a)
// const fruitcount = ["22", "55", "33", "44" , "27"]
// let c =fruitcount.every((count)=>{
//     return count > 10
// })
// console.log(c)

// fruitcount.every(newfunction)
// function newfunction(count){
//     return count > 22
// }
// console.log(fruitcount.every(newfunction))

//fill

// fruitcount.fill("kiwi")
// console.log(fruitcount)

//filter

// let c = fruitcount.filter((age)=>{
    
//     return age > 33

// })

// console.log(c)

//map  


// const numbers = [4, 9, 16, 25,78,888];
// const newArr = numbers.map((mul)=>{
//     console.log(mul)
// })
// console.log(newArr);
// let newArray=[]
// for (let i = 0; i < numbers.length; i++) {
//     newArray[i]=numbers[(numbers.length-1)-i]
    
// }
// console.log("sum=",newArray)

// for each

// const fruits = ["apple", "orange", "cherry"];
// let txt= ""
// fruits.forEach((fruit,index)=>{
//      txt +=index + ": " + fruit + " "
//     console.log(txt)
// });


//find

// const ages = [3, 10, 18, 20, 30, 40];
// function checkage(age){
//     return age > 10;
// }
// console.log(ages.find(checkage));

// let test = ages.findIndex((ageindex)=> {
//     return ageindex > 10
// })
// console.log(test);

// //flat ()

// const myarr = [[1,2,4,[1,2,9,[3,4],[5,6],3,7,5],,6,9],[3,4,9,7,2],[5,6,6,6,8]];
// let o = myarr.flat(3)
// console.log(o);

//flatarray

// const myArr = [1, 2, 3, 4, 5,6];
// const newArr = myArr.flatMap((x) => x * 2);
// console.log(newArr)


//flatmap

// const myArr = [1, 2, 3, 4, 5,6];
// const newArr = myArr.flatMap((x) => x * 2);
// document.getElementById("demo").innerHTML = newArr;

//from

// let text = "ABCDEFG321515564665464"
// let 
// const myArr = Array.from(text,rrr,fff);
// console.log(myArr)


//includes

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fr =fruits.includes("Banana", 3);
// console.log(fr);

//isarray

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const veg = "aa"
// let result =  Array.isArray(veg);
// console.log(result)

//join

// let arr=["apple","orange","grapes"]
// console.log(arr.join(" and "))


//keys 

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let keyyy = fruits.keys()
// let text = "";
// for (let x of keyyy) {
//   text += x + "  ";
// }
// console.log(text);


// const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
// let co =""
// for (x of fruits1.keys()){
//     co += x 
    
// }
// console.log(co)


//last indexof

// const fruits = ["Orange","Apple","Mango","Apple","Banana","Apple"];
// let index = fruits.lastIndexOf("Apple", 2);
// let index1 = fruits.lastIndexOf("Apple", -2);
// let index2 = fruits.lastIndexOf("Apple");
// console.log(index);
// console.log(index1);
// console.log(index2);

//lenght()

// const fruits = ["Orange","Apple","Mango","Apple","Banana","Apple"];
// fruits.length=4
// console.log(fruits);

// function Person(name, lname) {
//     this.name = name;
//     this.lastname = lname;
//   }
  
//   const person1 = new Person('alice', 'kitkat');
  
//   const propertiestoConvert = ['name', 'lastname'];

//   for (let i = 0; i < propertiestoConvert.length; i++) {
//     const propertyname = propertiestoConvert[i];
//       person1[propertyname] = person1[propertyname].toUpperCase();
//   }
  
//   console.log(person1.name); 
//   console.log(person1.lastname);  
  

// Array.prototype.myUcase = function() {

//     for (let i = 0; i < this.length; i++) {
//       this[i] = this[i].toLowerCase() 
//     }
//   };
//   const myarr = ['Apple', 'banana', 'cherry'];
//   myarr.myUcase();
//  console.log(myarr)
  


//reverse

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.reverse())

//reduce

// const numbers = [1, 1, 1];

// function reducefun(total,num){
//     return total + num
// }
// console.log(numbers.reduce(reducefun))

//reduceright

// const numbers = [1, 1, 1];

// function reducefun(total,num){
//     return total - num
// }
// console.log(numbers.reduceRight(reducefun))


//some

// let oo = [11, 12, 13 , 15]
// let l= oo.some((ka)=>{
//     return ka >11
// })
// console.log(l);


//to string

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = fruits.toString();
// console.log(text);


//value of

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.valueOf());
// console.log(typeof NaN);

//map

// const sayings = new Map();
// sayings.set("dog", "woof");
// sayings.set("cat", "meow");
// sayings.set("elephant", "toot");
// sayings.size; // 3
// sayings.get("dog"); // woof         
// sayings.get("fox"); // undefined
// sayings.has("bird"); // false
// sayings.delete("dog");
// sayings.has("dog"); // false

// for (const [key, value] of sayings) {
//   console.log(`${key} goes ${value}`);
// }



// const sayings = new Map();
// sayings.set('g', 'Hello, world!','sss', 'hdjgsd');

// const greeting = sayings.get('sss');
// console.log(greeting); // Output: "Hello, world!"

// const wm1 = new Map();
// wm1.set('o1','hello')
// // console.log('01')
// console.log(wm1.get('o1'))

//weekmap
// const wm1 = new WeakMap();


// wm1.set(o1, 37);
// wm1.set(o2, "azerty");


// wm1.get(o2); // "azerty"

// console.log(wm1.get(o2))


// for (let step = 0; step < 5; step++) {
//     // Runs 5 times, with values of step 0 through 4.
//     console.log('Walking east one step');
//   }

// const object = { a: 1, b: 2, c: 3 };
// for (const i in object) {
//     console.log(`${i}: ${object[i]}`);
// }
  

// const object = { a: 1, b: 2, c: 3 };
// for (const i in object) {
//     console.log(`${i}: ${object[i]}`);
// }

// const array1 = ['a', 'b', 'c'];

// for (const i of array1) {
//   console.log(i);
// }


// let text = '';

// for (let i = 0; i < 10; i++) {
//   if (i === 3) {
//     break;
//   }
//   text = text + i;
// }

// console.log(text);
// const a=[7,8,6,8,7,9,0]
// console.log(a[0])


// let str = '';

// loop1: for (let i = 0; i < 5; i++) {
//   str = str + i;
// }
// loop2: for (let j = 0; j < 5; j++) {
//   console.log(j)
// }
// console.log(str);

// function exeption(){
//   try {
//     let a=10
//   console.log(a/0)
//   } catch (error) {
//     console.log("Error is",error)
//   }
// }
// exeption()
// function Example(a,b) {

//   try {
   
//     if (b === 0) {
//       throw new Error("Division by zero is not allowed.");
//     }
//     let result = a / b;
//     console.log("Result: " + result);
//   } catch (e) {
//     console.log("An error occurred: " + e);
//   }
// }

// Example(10, 15);
// (function () {
//   var x = 20;
//   var y = 20;
//   var answer = x + y;
//   console.log(answer);
//   })
//   ();

function func1(a, b, c) {
  console.log(a);
  // Expected output: 1

  console.log(b);
  // Expected output: 2

  console.log(arguments[2]);
  // Expected output: 3
}

func1(1, 4, 3);



