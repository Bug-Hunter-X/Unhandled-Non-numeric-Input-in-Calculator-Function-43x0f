function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

function calculate(a, b, operator) {
  // Input validation
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers');
  }

  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      throw new Error('Invalid operator');
  }
}

console.log(calculate(5,2,'+')); //7
console.log(calculate(5,2,'-')); //3
console.log(calculate(5,2,'*')); //10
console.log(calculate(5,2,'/')); //2.5
console.log(calculate(5,0,'/')); // throws an error
console.log(calculate('hello',2,'+')); // throws an error
console.log(calculate(5,2,'%')); // throws an error