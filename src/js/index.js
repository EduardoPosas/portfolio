import smoothScrolling from "./smoothScrolling.js";
import hamburguerMenu from "./hamburguerMenu.js";
import validateInput from "./validator.js";

const form = document.querySelector('.form');
const formInputs = document.querySelectorAll('input');
const inputArea = document.querySelector('textarea');

const educationCards = document.querySelectorAll('.education-card');
const projects = document.querySelectorAll('.experience');
const experienceImages = document.querySelectorAll('.experience__image');
const experienceContents = document.querySelectorAll('.experience__content');



document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1500,
        offset: 150,
    });
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
        console.log('Enviando Formulario con éxito');
    })
})

educationCards.forEach( card => {
    card.dataset.aos = 'fade-up';
})

for(let i = 0; i < projects.length; i++) {
    if(i % 2 === 0){
        experienceImages[i].dataset.aos = 'fade-up-mq-right';
        experienceContents[i].dataset.aos = 'fade-up-mq-left';

    }else {
        experienceImages[i].dataset.aos = 'fade-up-mq-left';
        experienceContents[i].dataset.aos = 'fade-up-mq-right';
    }
}

