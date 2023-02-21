'use strict';

const readline = require('readline');
const fs = require('fs');

const COMMAND_LINE_FILE_NUMBER = 2;
const fileName = process.argv[COMMAND_LINE_FILE_NUMBER];

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

const isValidNum = (input, prompt = '') => {
  return (
    /^0x[a-fA-F0-9]+$/.test(input) ||
    isNaN(Number(input)) ||
    (prompt.includes('a') && Number(input) === 0)
  );
};

const readNumber = (prompt, callback) => {
  rl.question(prompt, (input) => {
    const num = Number(input);
    if (isValidNum(input, prompt)) {
      console.log(`Error. Expected a valid real number, got ${input} instead.`);
      readNumber(prompt, callback);
      return;
    }
    callback(num);
  });
};

if (fileName) {
  rl.close();
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      console.log(`file ${fileName} does not exist`);
      return;
    }
    const numbers = data.split(' ')
    const [a, b, c] = numbers;

    if (
      (Number(a) === 0 || isValidNum(a)) ||
      isValidNum(b) ||
      isValidNum(c)
    ) {
      console.log('invalid file format');
    } else {
      quadraticEquationSolver(a, b, c);
    }
  });
} /*else {
    readNumber('a = ', (a) => {
      readNumber('b = ', (b) => {
        readNumber('c = ', (c) => {
          quadraticEquationSolver(a, b, c);
          rl.close();
        });
      });
    });
}*/
