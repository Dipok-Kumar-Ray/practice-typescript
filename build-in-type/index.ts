//build in type: number, string, boolean, void, undefined, null

let userId: number;
let fullName: string;
let firstName: string;
let lastName: string;
let isActivated: boolean;


userId = 202;
fullName = "Dipok Kumar Ray"
firstName = "Dipok Kumar";
lastName = " Ray"
isActivated = true;


fullName = firstName.concat( lastName);
console.log(
    `Your id: ${userId},  username: ${ fullName}, account activated: ${isActivated}`);

    console.log(fullName.split(" "));
    console.log(fullName.toUpperCase());
    console.log(fullName.toLowerCase());
    console.log(userId);

    function display(){
        console.log("Hi, I am Display");
    }
 display();




// console.log(userId);
// console.log(userName);
// console.log(isActivated);
