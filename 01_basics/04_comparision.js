// Number datatypes

console.log(2>1);
console.log(1==1);
console.log(2>=1);
console.log(2<=1);
console.log(2!=1);

// Comparision between two datatypes
 console.log("3" > 1);  //3 is string and 1 is number
 console.log("03" > 1); 

 console.log(null > 0);  //false 
 console.log(null == 0);  //false 
 console.log(null >= 0);  //true
//true kina vayo vanda comparisions like >, <, >=, <= and equility check like == work differently
// Comparisions convert null to a number, treating it as 0.
// that's why null>=0 is true and null>0 is false.

 console.log(undefined == 0);
 console.log(undefined > 0);
 console.log(undefined >= 0);
 console.log(undefined < 0);

// Strict check (===)


console.log("2" === 1); //false
console.log("2" === "2"); //true