// console.log("BASICS OF JS APIS");


// getLength() function

function getLength(str){
    console.log("The string is " + str);
    console.log("The length of the string is "+ str.length);
    return str.length ;

}
// getLength("100x devs is very good");


function getIndexOf(str,target){

    console.log("This is the orginal string ",str);
    console.log(`The index of ${target} is ${str.indexOf(target)}`);

}
function getLastIndexOf(str,target){

    console.log("This is the orginal string ", str);
    console.log(` The last index of ${target} is ${str.lastIndexOf(target)}`);

}
// getIndexOf("Hello World","World");
// getLastIndexOf("Hello World World World","World");



// SLICING A STRING 

function getSlice(str,start,end){
    console.log("The main string is ",str);
    let ans = str.slice(start,end);
    console.log("The slice of it is  ",ans);
}


// getSlice("Hello Javascript in ONE DAY",0,17);


// REPLACING A STRING 

function replaceString(str,target,replacement){
    console.log("The main string is " , str);
    let rstr = str.replace(target,replacement);
    console.log("The string after replacement is ",rstr);
}


// replaceString("Hello DEVELOPER ","DEVELOPER","ENGINEER");


// SPLITING STRING 

function splitString(str,separator){
    console.log("The main string is ",str);
    let ans = str.split(separator);

    // output is an array 
    console.log("The string after spliting is ",ans);
}

// splitString("Hello-World-for-google-engineers","-");



// TRIMING A STRING 

function trimString(str,separator){
    console.log("The orginal string",str);
    let ans = str.trim();
    console.log("The string after split is",ans);
}

trimString("   Hello World   ");

// TO LOWER CASE 
function toLower(str){
    console.log("The main string ",str);
    let ans = str.toLowerCase();
    console.log("The string after lowered the case",ans);
};

// toLower("jkfhdjkfksdf");



// TO UPPER CASE 
function toUppper(str){
    console.log("The main string is",str);
    let ans = str.toUpperCase();
    console.log("after the UPPERCASE ",ans);
};

// toUppper("JSDFODKLASJKLASDKLASMDASMF")



// Parsing to integer 

function parsingToInt(str){
    console.log("The main string is ",str);
    let ans = parseInt(str);
    console.log("The string after parsed",ans);
    console.log(`Type of  ${str} is `, typeof str);
    console.log(`Type of  ${ans} is `, typeof ans);

}

// parsingToInt("232");


