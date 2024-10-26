const fs = require("fs")



// ASYNC => using call back function 
function readFile1(){
    fs.readFile("a.txt","utf-8",function(err,data){
        console.log(data);
    })
    
}

// readFile1();
// console.log("Hi there from main");


// ASYNC => using Promises 


async function readFile2(){
    let p = new Promise(function(resolve){
        fs.readFile("a.txt","utf-8",function(err,data){
            resolve(data);
            console.log(data);
        })
    })
    return p;
}


readFile2();
console.log("Hi there from main");