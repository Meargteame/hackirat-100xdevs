// const fs = require(
//     "fs"
// )

// function onDone(err,data){
//     console.log(data);
// }

// function readFile1(){
//     fs.readFile("a.txt","utf-8",onDone);

// }
// readFile1()
// console.log("hi there 2")




// // function readFile2(){
// //     fs.readFile()
// // }




// => Promisfy callback functon 


// function mySetTimeOut(fn,duration){
//     setTimeout(fn,duration);
// }


// function PromisfiedMySetTimeOut(duration){
//     let p = new Promise(function(resolve,reject){
//         resolve();
//     });


//     return p;
// }


// PromisfiedMySetTimeOut.then(mySetTimeOut);
// mySetTimeOut( ()=>{
//     console.log("After Set Time Out ");
// },2000);






// creating and calling a promisified function


function promisifiedMySetTimeOut(duration){
     
    let p = new Promise( function(resolve){
        setTimeout(() => {
            resolve();
        },duration);
        
    })
    return p;
}


// calling or using the promis


let ans = promisifiedMySetTimeOut(1000);
ans.then(() => { 
    console.log("Time Out is Done ");
});


console.log("It is Done");


