const inputs = document.querySelectorAll('input');
const form = document.getElementById('form')
const body = document.getElementById('body')
const result = document.getElementById('result')

inputs.forEach(input => {
    input.addEventListener('blur',function() {
        if(input.value === '') {
            input.classList.add('is-invalid');
        }
        else {
            input.classList.remove('is-invalid');
            input.classList.add('is-valid');
        }
    })
})

body.hidden = true;
form.hidden = false;

check.addEventListener('click' ,function() {
    body.hidden = false;
    form.hidden = true;
});