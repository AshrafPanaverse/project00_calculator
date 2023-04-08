const questions = [
    {
      type: 'number',
      name: 'num1',
      message: 'Enter the first number:',
    },
    {
      type: 'list',
      name: 'operation',
      message: 'Select an operation:',
      choices: ['+', '-', '*', '/'],
    },
    {
      type: 'number',
      name: 'num2',
      message: 'Enter the second number:',
    },
  ];

  export default questions;