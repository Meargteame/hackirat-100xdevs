// a program greets a person 

function greeting(firstName, lastName){
    console.log(`Hello ${firstName} ${lastName}`);
}


greeting("Meareg","Teame");

// a program which will output the sum of the numbers from 0 - 10000

let sumOfNumbers = 0;
for (let i =0;i <=10000; i++){
    sumOfNumbers +=i; 
}

console.log(sumOfNumbers);


// write a program to print the biggest number in the array 


let boxOfArray = [1,23,343,34,335,45];


let biggestNum = boxOfArray[0];

boxOfArray.forEach(
    (i) =>{
        if(boxOfArray[i] < boxOfArray[i+1] ){
            biggestNum = boxOfArray[i+1];
        }
    }
)

console.log("The biggest Number is " + biggestNum);
