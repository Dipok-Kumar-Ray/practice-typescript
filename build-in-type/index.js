//build in type: number, string, boolean, void, undefined, null
var userId;
var fullName;
var firstName;
var lastName;
var isActivated;
userId = 202;
fullName = "Dipok Kumar Ray";
firstName = "Dipok Kumar";
lastName = " Ray";
isActivated = true;
fullName = firstName.concat(lastName);
console.log("Your id: ".concat(userId, ",  username: ").concat(fullName, ", account activated: ").concat(isActivated));
console.log(fullName.split(" "));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(userId);
function display() {
    console.log("Hi, I am Display");
}
display();
// console.log(userId);
// console.log(userName);
// console.log(isActivated);
