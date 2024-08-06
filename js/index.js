
let expandableElements = document.querySelectorAll('.expandable');

// Функция для обработки клика
function handleClick(event) {
    // Получаем текущий элемент
    let currentElement = event.target;
    // Получаем текущую ширину элемента
    let currentWidth = currentElement.offsetWidth;
    // Получаем ширину окна
    let windowWidth = window.innerWidth;

    // Увеличиваем ширину элемента
    currentElement.style.width = currentWidth + 90 + 'px';

    // Если ширина элемента достигает ширины окна, сбрасываем её
    if (currentWidth + 50 >= windowWidth) {
        currentElement.style.width = '80px';
    }
}

// Добавляем обработчик события клика к каждому элементу
expandableElements.forEach(item => item.addEventListener('click', handleClick));