const form = document.getElementById('form');
const user = document.getElementById('username');
const idType = document.getElementById('idType');
const idNumber = document.getElementById('idNumber');
const age = document.getElementById('age');
const phone = document.getElementById('phone');
const email = document.getElementById('email');

form.addEventListener('submit', e =>{
    e.preventDefault();
    checkInputs();
})

function checkInputs(){
    const valorUser = user.value.trim();
    const valorIdType = idType.value.trim();
    const valorIdNum = idNumber.value.trim();
    const valorAge = age.value.trim();
    const valorPhone = phone.value.trim();
    const valorEmail = email.value.trim();

    if (valorUser === ''){
        error(user, 'No puede dejar el usuario en blanco');
    } else{
        error(user);
    }
}

function error(input, message){
    const controlForm = input.parentElement;
    const small = controlForm.querySelector('small');
    controlForm.className = 'controlForm error';
    small.innerText = message;
}

