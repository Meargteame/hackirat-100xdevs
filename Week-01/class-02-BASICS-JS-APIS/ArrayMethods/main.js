// console.log("ARRAY METHODS ")


let initialArray = [1,2,3];

// adding at the end 
initialArray.push(4,5);


// deleteing from the end 
// pop - pops out one element from the end 

initialArray.pop();




// adding at the start
initialArray.unshift(0);

// deleting from the start 
initialArray.shift();

// console.log(initialArray);


// CONCATENATING ARRAYS 

// concat does not mutate the array 

let firstArray  = [1,2,3];
let secondArray = [4,5,6];

let finalArray = firstArray.concat(secondArray); 

// console.log(
//     firstArray.concat(secondArray)
// )
// console.log(firstArray);
// console.log(secondArray);


// console.log(finalArray);