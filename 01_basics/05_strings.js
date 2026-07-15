//string can be written in "" or ''

const name = "prisha";
const repoCount = 50;   // github repository count

// console.log(name +  repoCount + "anyvalue") *Don't use this syntax now as it is outdated

//Use backticks `` => string interpolation
console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

//String declare garne arko tarika
const gameName = new String('prishaml');
//Yo wala line chai google ma jane inspect garera console ma paste gardine => enter => write gameName and enter => click on dropdown and you'll see all the methods of String

console.log(gameName[4]); //4th position ma h xa
console.log(gameName.__proto__); 

console.log(gameName.charAt('3'))
console.log(gameName.endsWith("l"))
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName)
console.log(gameName.indexOf("p"))

//New Method
const gameOne = new String("prisha-coc");
const newString = gameOne.substring(0,4) //pris sama auxa 0 to 3 sama, 4 chai audaina //Substring ma -ve value rakhna mildaina
console.log(newString);

const anotherString = gameOne.slice(-8,4) //slice ma negative value rakhna milxa ani it prints from last
console.log(anotherString);




