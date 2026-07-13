// Types of datatype in JavaScript

// Primitive datatype:-

// 1. String
let name = "Prisha";

// 2. Number
const pie = 3.1415;

// 3. Boolean
let isLoggedIn = false; //or true

// 4. null
let temperature = null;
// null vaneko 0 haina, it is empty

// 5. undefined
let contact;
let address;

// 6. symbol
// value lai unique banauna lai use hunxa 
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);
//aba yeta Symbol vitra ko value same rakhya xa still tyo same haina false ako xa check garda

// 7. BigInt
let BigNumber = 8976567782548n;
// bigInt ma chai 'n' rakhnu parxa if number dherai nai thulo xa vaye bigint use garne


// Non-Primitive (Reference) datatype

//1. Array []

 const car = ["toyota", "bmw", "byd"];
 console.log(car);

//2. Object {}
let mydata = {
    name: "Prisha",
    age: 19,
    address: "Lubhu"
}
console.log(mydata);


//3. Function ()
const myFunction = function() {
    console.log("Hello World");
}

//JavaScript is dymanically typed language 
// Because 
const score = 100;
const num = 57.6;
console.log(typeof score);
//here, score ko type number ho vanera js lai hamile vanirakhnu pardaina usle afai le vanxa usko datatype jastai number, string etc 
//Therefore, JS is dynamically typed language

console.log(typeof myFunction)
//fuction auxa tara vanda chai "Object Function"