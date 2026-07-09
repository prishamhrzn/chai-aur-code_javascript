// Datatype Conversion

//Converting number to string datatype
let score = 89; //number datatype

console.log(typeof score);  
 console.log(typeof (score));  //yo 2 ta ma jun pani use garna milxa

 let stringvalue = String(score);  //89 van ne number lai string ma lageko
 console.log(stringvalue);
 console.log(typeof stringvalue);  

 //Converting string to number
let marks = "56";  //string datatype

console.log(typeof marks);

let valueInNumber = Number(marks); //String lai number datatype ma convert gareko
console.log(valueInNumber);
console.log(typeof valueInNumber);


//Converting string to number
let name = "45abc"
console.log(name);
console.log(typeof name);

let age = Number(name)
console.log(typeof age)
console.log(age)

//Converting Boolean to number
let isLoggedIn = true;
console.log(isLoggedIn);
console.log(typeof isLoggedIn);

let number = Number(isLoggedIn)
console.log(typeof number)
console.log(number)


//Converting number to boolean
let isLoggedOut = 1    //0 => false
console.log(typeof isLoggedOut)
console.log(isLoggedOut)

let boolean = Boolean(isLoggedOut);
console.log(boolean);
console.log(typeof boolean);

//Note: 
//1 = true; 0 = false
//"" = false
//"prisha" = true

//NaN => Not a Number
let value = undefined
console.log(value)
console.log(typeof value)

let ValueinNumber = Number(value)
console.log(typeof ValueinNumber)
console.log(ValueinNumber)

//Notes:-
//"33" => 33 
//"45abc" => NaN
//null => 0
//true => 1; false => 0
//undefined => NaN