'use strict';

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const quadraticEquationSolver = (a, b, c) => {
  console.log(`Equation is: ${a} x^2 + ${b} x + ${c} = 0`)
  const discriminant = b**2 - 4*a*c;
  if (discriminant < 0) return console.log('There are 0 roots');
  if (discriminant === 0) {
    const x1 = -b / (2*a);
    console.log('There is 1 root');
    console.log(`x1 = ${x1}`);
  }
  if (discriminant > 0) {
    const x1 = (-b + Math.sqrt(discriminant)) / (2*a);
    const x2 = (-b - Math.sqrt(discriminant)) / (2*a);
    console.log('There are 2 roots');
    console.log(`x1 = ${x1}\nx2 = ${x2}`);
  }
};

const readNumber = (prompt, callback) => {
  rl.question(prompt, (input) => {
    const num = Number(input);
    if (
      /^0x[a-fA-F0-9]+$/.test(input) ||
      isNaN(num) ||
      (prompt.includes('a') && num === 0)
    ) {
      console.log(`Error. Expected a valid real number, got ${input} instead.`);
      readNumber(prompt, callback);
      return;
    }
    callback(num);
  });
};

readNumber('a = ', (a) => {
  readNumber('b = ', (b) => {
    readNumber('c = ', (c) => {
      quadraticEquationSolver(a, b, c);
      rl.close();
    });
  });
});
