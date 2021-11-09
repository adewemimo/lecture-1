// A script that we can type
//node printName.js [testName]
const username = process.argv[2];

function printName(){
    const message = "Welcome to WebDevCore " + username + "!"
    console.log(message);
}

printName();