// //++++++++++++ Numbers in Js ++++++++++++++

  const score = 200;
  console.log(score);
  console.log(typeof score)

  //Open inspect=>click console then write this 2 line=> click dropdown of prototype ani tesma sabai number ko properties haru hunxa
  const balance = new Number(100); //yo use garyo ki fixed number nai datatype ho vanera dekhuaxa
  console.log(balance);

  //Number ko properties haru

   console.log(balance.toString())
   console.log(balance.toString().length)
   console.log(typeof balance)

   console.log(balance.toFixed(2))  //output is 100.00 //widely used in e-commerce website price rakhna ko lagi

  const otherNumber = 78.88907
  console.log(otherNumber.toPrecision(3))

  const NumberOne = 356.78905
  console.log(NumberOne.toPrecision(3))  //interview ma sodhxa

 const NumberTwo = 1000000
 console.log(NumberTwo.toLocaleString()); //comma handinxa according to United States value 

 const hundreds = 10000000;
 console.log(hundreds.toLocaleString('en-IN')) //according to Indian format ma comma haldinxa


  console.log(balance.valueOf())
  console.log(balance.constructor());
  console.log(balance.toExponential());  
  console.log(balance.toLocaleString())

//+++++++++++++++++++ Maths ++++++++++++++++++++++++

//inspect=> console => console.log(Math) => all the properties of maths

 //Properties of Math
 console.log(Math);
 console.log(Math.abs(-9)); //abs means absolute value //converts -ve value into positive

 console.log(Math.round(5.6));
 console.log(Math.ceil(4.4));
 console.log(Math.floor(2.8));

 console.log(Math.sqrt(16));

 console.log(Math.min(5,7,3,2))
 console.log(Math.max(4,6,8,3))

console.log(Math.random()) //value between 0 and 1 auxa mostly decimal
console.log(Math.random()*10); //1 ta value shift hunxa
console.log(Math.floor(Math.random()*10) + 1);  //0 na aos vanera +1 gareko so that min value 1 hoss

const min = 10
const max = 20
console.log(Math.floor(Math.random()* (max - min + 1)) + min)