const link = document.querySelector('#link');

link.addEventListener('click', function (event) {
    text = prompt('Введите текст, и текст ссылки поменяется');
    this.textContent = text;
    event.preventDefault();
})

