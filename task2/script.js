const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', (event) => {
  alert('Служит для вывода сообщения в консоль');
})

document.querySelector('#alert').addEventListener('click', 
  (event) => {
    alert('Показывает диалоговое окно с сообщением и кнопкой ОК');
})

document.querySelector('#prompt').addEventListener('click', 
  (event) => {
    alert('Отображает диалоговое окно с запросом на ввод текста');
})
