const textField = document.querySelector('#textField');
const duplicateField = document.querySelector('#duplicateField');
const button = document.querySelector('button');

textField.addEventListener('input', function (event) {
    duplicateField.textContent = event.target.value;
})

button.addEventListener('click', function (event) {
    event.preventDefault();
    console.log(textField.value);
    textField.value = '';
    duplicateField.textContent = '';
})
