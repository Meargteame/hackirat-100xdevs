
const fs = require("fs");
// function findSum(n){
//     let a = 0;
//     for(let i=0;i<=n;i++){
//         a +=i;
//     }
//     console.log(a);
//     return a;
// }

// function findTill100(){
//     findSum(100);
// }

// // called asynchronosly 
// setTimeout(findTill100,1000);

// // the executes first 
// for(let i=0;i<=1000;i++){
//     console.log(i);
// }



// readFile()


// fs.readFile("a.txt","utf-8", function(err,data){
//     console.log(data);
// })


// console.log("Hi there");
// for(let i=0;i<=100000;i++){
//     console.log(i);
// }



// AYNCHRONUS WITH OUT PROMISES - USING CALLBACKS EXCLUSIVELY 

function kiratsReadFile(ondone){
    fs.readFile("a.txt", "utf-8",function(err,data){
        ondone(data);
    })
}

function onDone(data){
    console.log(data);
}
kiratsReadFile(onDone);


// AYNCHRONUS WITH PROMISES - USING PROMISES - WITHOUT USING CALLBACKS EXLUSIVELY

function kiratsReadFile2(){
    return new Promise(function(resolve){
        fs.readFile("a.txt","utf-8",function(err,data){
            resolve(data);
        })
    })
}


kiratsReadFile2().then(onDone);

