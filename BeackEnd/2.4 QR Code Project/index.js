/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import input from "inquirer"
import qr from "qr-image"

const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your username?',
    },
    {
        type: 'password',
        name: 'password',
        message: 'What is your password?',
    }
];

input.prompt(questions).then(answers => {
    console.log(answers);
});
