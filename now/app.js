let form = document.getElementById("formid")
let username= document.getElementById("username")
let email = document.getElementById("email");
let password = document.getElementById('password')
let password2= document.getElementById('password2')

form.addEventListener('submit', e=>{
    e.preventDefault()
    validateInputs()
});

const setError(element, message){
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')
    errorDisplay.innerText=message;
    inputControl.classList.add('error')
    inputControl.classList.remove('success')
}


 
function validateInputs(){
const usernamevalue = username.value.trim();
const emailvalue = email.value.trim();
const passwordvalue = password.value.trim();
const password2value = password2.value.trim();

if(username, "username required"){
    
}
}