
/*
 Based on Chapter 6 of "A Friendly Introduction to Number Theory"
 by Joseph H. Silverman (4th Edition).

 Implements the Extended Euclidean Algorithm to compute gcd(a, b)
 and Bézout coefficients (x, y) such that:
     a·x + b·y = gcd(a, b).
*/


const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question("Enter two numbers (a and b) separated by a space: ", answer => {
    const numbers = answer.trim().split(/\s+/).map(Number);
    if (numbers.length !== 2 || numbers.some(isNaN)) {
        console.log("Please enter a and b separated by a space.");
        rl.close();
        return;
    }
    rl.close();
    console.log(numbers)
    numbers.sort
    const [a, b] = numbers;
    const result = ExtendedEuclideanAlgorithm(a, b);
    console.log(result)
    console.log(
        `the solution to equation ${a}x + ${b}y = gcd(${a}, ${b}) is: x = ${result.x}, y = ${result.y}, gcd = ${result.g} 
      And the formula is : (x, y) = (${result.x} + ${(b / result.g)}t, ${result.y} - ${(a / result.g)}t) where t is any integer.`
    );

});


function ExtendedEuclideanAlgorithm(a, b) {

    if (b === 0) {
        return { g: a, x: 1, y: 0 };
    }
    const { g, x: x1, y: y1 } = ExtendedEuclideanAlgorithm(b, a % b);

    const x = y1;
    const y = x1 - Math.floor(a / b) * y1;
    return { g, x, y };




}
