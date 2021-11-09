// A script that we can type
//node printName.js [testName]
const username = process.argv[2];

function printName(){
    console.log("Welcome to WebDevCore " + username + "!");
}

printName();