
//Working with  JSON 
let users = '{"userName":"Meareg Teame","userAge":"21"}';

// before parsing the json to object

// console.log(users);
// console.log(users["nameName"]);
// console.log(users["userAge"]);


// after parsing the json to object
// users = JSON.parse(users);
// console.log(users);
// console.log(users["userName"]);
// console.log(users["userAge"]);




// before stringfy the object

let applicants = {
    applicantName:"Applicant 1",
    applicantAge:"21",
    applicantEmail:"applicant@gmail.com"
}

console.log(applicants["applicantName"]);
console.log(applicants["applicantAge"]);
console.log(applicants["applicantEmail"]);


// after stringfy the object


applicants = JSON.stringify(applicants);


// it got stringified so it will not output anything / undefined 
console.log(applicants["applicantName"]);
console.log(applicants["applicantAge"]);
console.log(applicants["applicantEmail"]);
