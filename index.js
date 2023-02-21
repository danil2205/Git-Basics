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


const rlQuestion = () => {
  rl.question('a = ', (a) => {
    if (/^0x[a-fA-F0-9]+$/.test(a) || Number(a) === 0 || isNaN(Number(a))) {
      console.log(`Error. Expected a valid real number, got ${a} instead`)
      rlQuestion();
    }
    rl.question('b = ', (b) => {
      rl.question('c = ', (c) => {
        quadraticEquationSolver(a, b, c);
        rl.close();
      });
    });
  });
};

rlQuestion();
