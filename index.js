#!/usr/bin/env node
import calculator from './calculator.js';
import inquirer from 'inquirer';
import questions from './questions.js';
const prompt = await inquirer.prompt(questions);
let result;
switch (prompt.operation) {
    case '+':
        result = calculator.add(prompt.num1, prompt.num2);
        break;
    case '-':
        result = calculator.subtract(prompt.num1, prompt.num2);
        break;
    case '*':
        result = calculator.multiply(prompt.num1, prompt.num2);
        break;
    case '/':
        result = calculator.division(prompt.num1, prompt.num2);
        break;
    default:
        throw new Error('Invalid operation');
}
console.log(result);
