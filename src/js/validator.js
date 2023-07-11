const errorTypes = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'
];

const alertMessages = {
    name: {
        valueMissing: 'Campo obligatorio',
        customError: 'El nombre debe contener más de 50 caracteres'
    },
    email: {
        valueMissing: 'Campo obligatorio',
        typeMismatch: 'Email no válido'
    },
    subject: {
        valueMissing: 'Campo obligatorio',
        customError: 'El asunto debe contener más de 50 caracteres'
    },
    message: {
        valueMissing: 'Mensaje Obligatorio',
        customError: 'El mensaje no debe contener más de 300 caracteres'
    }
}

const validators = {
    name: input => lengthValidation(input, 50),
    subject: input => lengthValidation(input, 50),
    message: inputArea => lengthValidation(inputArea, 300)
};

const validateInput = (input) => {
    if (validators[input.id]) {
        validators[input.id](input);
    }
    if (!input.validity.valid) {
        input.nextElementSibling.innerText = showAlert(input);
        return;
    }

    input.nextElementSibling.innerText = '';
};


function lengthValidation(input, maxSize) {
    let message = '';
    if (input.value.length > maxSize) {
        message = `El ${input.id} debe tener menos de ${maxSize} caracteres`;
    }
    input.setCustomValidity(message);
}

function showAlert(input) {
    let message = '';

    errorTypes.forEach(error => {
        if (input.validity[error]) {
            message = alertMessages[input.id][error];
        }
    });
    return message;
}


export default validateInput;