const readline = require('readline');



const r1 = readline.createInterface({ input: process.stdin, output: process.stdout });

r1.question("Enter the number: ", answer => {
    numbers = answer.split(" ").map(Number);
    if (numbers.length !== 2 || numbers.some(isNaN)) {
        console.log("Please enter exactly two valid numbers separated by a space.");
        r1.close();
        return;
    }
    const [a, b] = numbers;
    console.log(`the gcd between the first number ${a} and the second number ${b} is: ${gcd(a, b)} `);
    r1.close();

});




function gcd(a, b) {
    var m = Math.max(a, b);
    var n = Math.min(a, b);
    var r = m % n;

    if (r === 0) {
        return n;
    } else {
        return gcd(n, r);
    }
}

module.exports = gcd;