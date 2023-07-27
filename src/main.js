const firstName = document.querySelector('.registration__name');
const lastName = document.querySelector('.registration__last-name');  
const email = document.querySelector('.registration__email'); 
const password = document.querySelector('.registration__password');

const firstNameError = document.querySelector('.registration__error-name-error'); 
const lastNameError = document.querySelector('.registration__error-last-name-error');
const emailError = document.querySelector('.registration__error-email-error'); 
const passwordError = document.querySelector('.registration__error-password-error');

const button = document.querySelector('.registration__button');

button.addEventListener('click', (event)=>{
    event.preventDefault();
    validateEmpty(firstName.value, firstName, firstNameError, 'First Name cannot be empty');
    validateEmpty(lastName.value, lastName, lastNameError, 'Last Name cannot be empty');
    validateEmail(email.value, email, emailError);
    validateEmpty(password.value, password, passwordError, 'Password cannot be empty');
})

function validateEmail(valueInput, divInput, divError){
    let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if(regExp.test(valueInput) == true){
        hideError(divInput, divError);
    } else{
        showError(divInput, divError, `Looks like this is not an valid email`);
    }
}

function validateEmpty(valueInput, divInput, divError, nameInput){
    if (valueInput.length == 0){
        showError(divInput, divError, nameInput);
    }else {
        hideError(divInput, divError);
    }
}

function showError(divInput, divError, error){
    divInput.style.border = '1px solid var(--red)';
    divError.innerHTML = `<img class="registration__error-icon" src="./src/images/icon-error.svg" alt="icon-error"> <p class="registration__error-message">${error}</p>`;
}

function hideError(divInput, divError){
    divInput.style.border = `1px solid var(--DarkBlue)`;
    divError.innerHTML = " ";
}
