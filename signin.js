const signInForm = document.querySelector('#signin-form')
const emailInput = document.querySelector('#email-input')
const passwordInput = document.querySelector('#password-input')
const termsInput = document.querySelector('#terms-input')
const formButton = document.querySelector('#signin-form button')

formButton.disabled = true
termsInput.onchange = () => {
    if (termsInput.checked) {
        formButton.disabled = false
    } else {
        formButton.disabled = true
    }
}

signInForm.onsubmit = (evt) => {
    evt.preventDefault()
    let errorSpan = document.createElement('span');
    errorSpan.style.color = 'red'
    errorSpan.style.fontSize = '12px'
    errorSpan.innerHTML = 'Invalid Input'
    if (!emailInput.value.trim()) {
        emailInput.insertAdjacentElement('afterend', errorSpan)
        formButton.disabled = true
    } 

    if (!passwordInput.value.trim()) {
        passwordInput.insertAdjacentElement('afterend', errorSpan)
    }
}