'use strict';

const quadraticEquationSolver = (a, b, c) => {
  console.log(`Equation is: ${a} x^2 + ${b} x + ${c} = 0`)
  if (!a) return `Error. Expected a valid real number, got ${a} instead`;
  const discriminant = b**2 - 4*a*c;
  if (discriminant < 0) return 'There are 0 roots';
  if (discriminant === 0) {
    const x1 = -b / (2*a);
    console.log('There is 1 root');
    return `x1 = ${x1}`;
  }
  if (discriminant > 0) {
    const x1 = (-b + Math.sqrt(discriminant)) / (2*a);
    const x2 = (-b - Math.sqrt(discriminant)) / (2*a);
    console.log('There are 2 roots');
    return `x1 = ${x1}\nx2 = ${x2}`;
  }
};

console.log(quadraticEquationSolver(2, 1, -3));

