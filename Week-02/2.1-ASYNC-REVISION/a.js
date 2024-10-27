// understanding callback function 

function square(n){
    return n * n;

}


function cube(n){
    return n * n * n;
}


function quad(n){
    return n * n * n * n ;
}

// Generic function 
function sumOfSomething(a,b,functionToBeCalled){
    return functionToBeCalled(a) + functionToBeCalled(b);
}


let ans = sumOfSomething(2,2,quad);
console.log(ans);

