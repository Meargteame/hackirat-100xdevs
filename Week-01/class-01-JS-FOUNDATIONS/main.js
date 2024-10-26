
// // defining variables
// var a = 1;
// a = 2;

// console.log(a);


// // Data types - Strings, Booleans , numbers 
//  let name = "Meareg";
//  let isMarried = false;
//  let age = 21;

//  console.log(`This persons name is ${name} and there age is ${age}`);

// // if else statements 

// if(isMarried){
//     console.log(`${name} is Married `);
// }
// else{
//     console.log(`${name} is Not Married `);

// }

// // Loops 
// let sum = 0 ;
// for (let i =0 ;i <=1000 ;i++){
//     // console.log(i);
//     sum += i;
// }

// console.log(sum);

// // complex primitives 

// // arrays 
// let boxOfArray = [1,23,343,34,335,45];

// boxOfArray.forEach((i)=>{
//     console.log(i);
// })
// // objects 


// let setOfObjects = {
//     key1 :"Key 01",
//     key2 :"Key 02"
// }

// console.log(setOfObjects);

// // functions 

// function add(a,b){
//     return a+b;
// }

// const value = add(23,3);
// console.log(value);



// Callback Functions 


function add(a,b,fn){
    let value = a + b;
    fn(value);
}

function display(value){
    console.log(value);
}

let value = add(3,3,display);


// call back


function arithmethicCalculation(num1,num2,fn){
    let res = fn(num1,num2);
    console.log(res);
}


function sum(a,b){
    return a + b;
}

function sub(a,b){
    return a - b;
}

let val = arithmethicCalculation(23,2,sub);


// setTimeout()

function greeting(){
    console.log("Hello User");
}

setTimeout(greeting,2000);
