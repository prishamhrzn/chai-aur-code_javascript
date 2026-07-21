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
const gameOne = new String("prishamhz");
const newString = gameOne.substring(0,4) //pris sama auxa 0 to 3 sama, 4 chai audaina //Substring ma -ve value rakhna mildaina
console.log(newString);

const anotherString = gameOne.slice(-8,4) //slice ma negative value rakhna milxa ani it prints from last //last bata herne jastai -1 -2....-8 ani tespaxi tyo string bata arko 3 ta print gareko
console.log(anotherString);

//trim => starting ra end space lai remove gardinxaa
const newStringOne = "    prisha      ";
console.log(newStringOne)
console.log(newStringOne.trim());

//replace
const url = "https://prisha.com/prisha%20maharjan";
console.log(url.replace('%20', '*')); // hamle %20 lai * sanga replace gardeko

console.log(url.includes('prisha'))  //true kina ki prisha is included in my url
console.log(url.includes('mhz'))   //false hunxa kinaki mhz url mai xna

//split
const StringTwo = "prisha-maharjan-29-00";
console.log(StringTwo.split("-")); //StringTwo ko string lai chai hamle xuta xutai lekheko based on - 

const StringThree = "prisha maharjan 13 99";
console.log(StringThree.split(" "));   //split on the basis of space //yo split le chai array ma haldinxa string lai on the basis of space







