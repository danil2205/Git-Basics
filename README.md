# Quadratic Equation Solver

## Description

This is a console application designed to solve quadratic equations.
The application supports two modes of operation: interactive and non-interactive (file) mode.

In the interactive mode, the application is launched without any arguments. The application prompts the user to enter the values of the coefficients a, b, and c one by one, displays the resulting equation on the screen, and computes and displays the roots of the equation.

In the non-interactive (file) mode, the application accepts a single argument, which is the path to a file containing the coefficients of the equation. The file should contain three numbers: a, b, and c separated by a single space.<br>
An example of what should be the entry of numbers in the file: ```1.2 228 1337```

## How to Run

To start in interactive mode:

```bash
$ node index.js
```

To start in non-interactive mode:

```bash
$ node index.js /path/to/your/file
```

## Output of application

Interactive mode:
```                                                                                                                  
a = 2
b = 1
c = -3
Equation is: 2 x^2 + (1) x + (-3) = 0
There are 2 roots
x1 = 1
x2 = -1.5         
```

Non-interactive mode:

File 1.txt: ```1.2 228 1```

Command: ```node index.js 1.txt```
```
Equation is: 1.2 x^2 + 228 x + 1 = 0
There are 2 roots
x1 = -0.004386066162685628
x2 = -189.99561393383732
```
