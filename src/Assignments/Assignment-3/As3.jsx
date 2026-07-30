//Use array destructuring to print out a simple calculating between two numbers.

//Add this function to App.js:

const calculate = (a, b) => {

    /* Your code here */
    let add = (a + b);
    let substract = (a - b);
    let multiply = (a * b);
    let divide = (a / b);

    return [add, subtract, multiply, divide];

}

const [add, subtract, multiply, divide] = calculate(6, 8);
console.log(6 * 8 = multiply);



//Now print on the screen "6 * 8 = 24" using destructured array.

//Return screenshot from browser and copy of code from App.js 