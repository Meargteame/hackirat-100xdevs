

const newObj = {
    "key1":"Value 1",
    "key2":"Value 2"

}



// Object methods


let keys = Object.keys(newObj);
let values = Object.values(newObj);

let entries = Object.entries(newObj);

// console.log(keys);
// console.log(values);
// console.log(entries);


let hasProp = newObj.hasOwnProperty("key");



// console.log(hasProp);

// assigning a new property to the object 

let nObj = Object.assign({},newObj,{"newProp":"new value"});

console.log(nObj);
console.log(newObj);
