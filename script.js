const email = $('#email')
const password = $('#password')
const confirmPassword = $('#confirm-password')
const phone = $('#phone')
const submitBtn = $('.submit-btn')
const passwordEye = document.getElementById('eye1')
const confirmPasswordEye = document.getElementById('eye2')
const message = document.querySelector('h1')

submitBtn.click((e) => {
    e.preventDefault()
    checkInputs()
})

//Provjera inputa
const checkInputs = () => {
    const emailValue = email[0].value
    const passwordValue = password[0].value
    const confirmPasswordValue = confirmPassword[0].value

    if (emailValue === '' || !isValidEmail(emailValue)) {
        setError(email)
    } else {
        removeError(email)
    }

    if (passwordValue === '' || !isValidPassword(passwordValue)) {
        setError(password)
    } else {
        removeError(password)
    }

    if (confirmPasswordValue === '' || confirmPasswordValue !== passwordValue) {
        setError(password)
        setError(confirmPassword)
    } else {
        removeError(password)
        removeError(confirmPassword)
    }

    if (isValidEmail(emailValue) && isValidPassword(passwordValue) && isValidPassword(confirmPasswordValue) && confirmPasswordValue === passwordValue) {
        message.textContent = 'Registration Successful!'
        message.style.color = 'green'
        message.style.visibility = 'visible'
    } else {
        message.textContent = 'Something went wrong!'
        message.style.color = 'red'
        message.style.visibility = 'visible'
    }


}

// Prikazivanje/sakrivanje passworda
passwordEye.addEventListener('click', () => {
    if (password[0].attributes[0].nodeValue === 'password') {
        password[0].attributes[0].nodeValue = 'text'
        passwordEye.style.color = '#9db9f2'
    } else {
        password[0].attributes[0].nodeValue = 'password'
        passwordEye.style.color = '#7e8fb3'
    }
})

// Prikazivanje/sakrivanje confirmPassworda
confirmPasswordEye.addEventListener('click', () => {
    if (confirmPassword[0].attributes[0].nodeValue === 'password') {
        confirmPassword[0].attributes[0].nodeValue = 'text'
        confirmPasswordEye.style.color = '#9db9f2'
    } else {
        confirmPassword[0].attributes[0].nodeValue = 'password'
        confirmPasswordEye.style.color = '#7e8fb3'
    }
})

// Dodaje class "error"
const setError = (input) => {
    input.addClass("error")
}

// Uklanja class "error"
const removeError = (input) => {
    input.removeClass("error")
}

// Provjera je li uneseni email validan
const isValidEmail = (email) => {
    return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(email)
}

// Provjera je li uneseni password validan
const isValidPassword = (password) => {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/.test(password)
}