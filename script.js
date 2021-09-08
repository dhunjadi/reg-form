const email = $('#email')
const password = $('#password')
const confirmPassword = $('#confirm-password')
const phone = $('#phone')
const submitBtn = $('.submit-btn')

const checkInputs = ()=>{
    const emailValue = email[0].value
    const passwordValue = password[0].value
    const confirmPasswordValue = confirmPassword[0].value
    const phoneValue = phone[0].value

    if(emailValue === ''){
        setError(email)
    } else if(!isValidEmail(emailValue)){
        setError(email)
    }

    if(passwordValue === ''){
        setError(password)
    } else if (!isValidPassword(passwordValue)){
        setError(password)
    }

    if(confirmPasswordValue !== passwordValue){
        setError(password)
        setError(confirmPassword)
    }

    if(!isValidNumber(phoneValue)){
        setError(phone)
    }
}




const setError = (input) => {
    const pair = input.addClass("error")
}

const isValidEmail = (email) => {
    return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(email)
}

const isValidPassword = (password) => {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/.test(password)
}

const isValidNumber = (number) => {
    return /^\d+$/.test(number);
}

submitBtn.click((e)=> {
    e.preventDefault()
    checkInputs()
})