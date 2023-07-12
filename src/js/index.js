import smoothScrolling from "./smoothScrolling.js";
import hamburguerMenu from "./hamburguerMenu.js";
import validateInput from "./validator.js";

const form = document.querySelector('.form');
const submitButtom = document.querySelector('[data-submit-btn]');
const formInputs = document.querySelectorAll('input');
const inputArea = document.querySelector('textarea');



document.addEventListener('DOMContentLoaded', () => {
    iniciarApp();
    smoothScrolling();
    hamburguerMenu();

    formInputs.forEach(input => {
        input.addEventListener("blur", (e) => {
            validateInput(e.target);
        });
    });
    
    inputArea.addEventListener("blur", (e) => validateInput(e.target));
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('Enviando formulario');
    })
})

function iniciarApp() {
    submitButtom.disabled = true;
    submitButtom.classList.add('not-allowed');
}

