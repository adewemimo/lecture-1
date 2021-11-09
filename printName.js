// A script(printName.js) that we can type
//node printName.js [testName]
//to run the script

const username = process.argv[2];

function printName(){
    const message = "Welcome to WebDevCore " + username + "!"

    console.log(message);
}

printName();