# Unhandled Non-numeric Input in Calculator Function

This repository demonstrates a common JavaScript bug: inadequate handling of non-numeric inputs in a simple calculator function. The `calculate` function performs basic arithmetic operations (+, -, *, /), but it only handles errors when dividing by zero or using an invalid operator.  It fails to check if the input values (`a` and `b`) are actually numbers.

The `bug.js` file contains the flawed code. The `bugSolution.js` file provides a corrected version with improved error handling and input validation.

## Bug
The primary issue is the lack of input validation.  If the user provides non-numeric values for `a` or `b`, the program will likely produce unexpected results or throw type errors during the arithmetic operations.

## Solution
The solution involves adding input validation to ensure that `a` and `b` are numbers before performing any calculations.  This is done using the `typeof` operator or `isNaN()` function.  The improved error handling provides more informative error messages to the user.

## How to Run
1. Clone the repository.
2. Open `bug.js` or `bugSolution.js` in your preferred JavaScript environment.
3. Run the code using `node bug.js` or `node bugSolution.js` (Node.js is required).