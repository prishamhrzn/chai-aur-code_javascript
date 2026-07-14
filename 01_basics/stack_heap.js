
// Stack is used in primitive datatypes

let ytname = "lukiandkiko"

let anothername = ytname
anothername = "pawsandtails"

console.log(ytname);
console.log(anothername);

//Heap is used in non-primitive datatypes

let userOne = {
    email : "prisha@gmail.com",
    upi : "user@you"
}

let userTwo = userOne
userTwo.email = "pawsandtails@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);
 