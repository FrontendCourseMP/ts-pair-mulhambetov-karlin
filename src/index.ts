//lab1
import displaySignature from "./functions/displaySignature.js"
displaySignature()


//lab2
import { ExpressionParser } from './functions/lab2/ExpressionParser.js';
import { ExpressionValidator } from './functions/lab2/Validator.js';

const form = document.getElementById('form') as HTMLFormElement;
const input = document.getElementById('oper') as HTMLInputElement;
const output = document.querySelector('#operOutput') as HTMLOutputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    const userInput = input.value;
    const cleaned = ExpressionValidator.clean(userInput);
    const check = ExpressionValidator.isValid(cleaned);

    if (!check.valid) {
        output.textContent = 'Ошибка: ' + check.error;
        output.classList.remove('nice');
        output.classList.add('err');
        return;
    }

    try {
        const parser = new ExpressionParser(cleaned);
        const result = parser.calculate();

        output.textContent = result.toString();
        output.classList.remove('red');
        output.classList.add('nice');
    } catch (error) {
        output.textContent = 'Ошибка вычисления';
        output.classList.remove('nice');
        output.classList.add('err');
    }
});