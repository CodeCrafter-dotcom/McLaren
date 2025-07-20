/* const burgerBtn = document.getElementById('burgerBtn');
const header = document.getElementById('header');

let isExpanded = false;

burgerBtn.addEventListener('click', () => {
  if (!isExpanded) {
    // Увеличиваем высоту header
    header.style.height = '254px'; // или любую нужную высоту
  } else {
    // Возвращаем к исходной высоте
    header.style.height = '100px';
  }
  
  isExpanded = !isExpanded;
}); */


/* const burgerBtn = document.getElementById('burgerBtn');
const header = document.getElementById('header');

let isExpanded = false;

burgerBtn.addEventListener('click', () => {
  
  if (!isExpanded) {
    // Увеличиваем высоту header
    header.style.height = '254px';

    // Создаем первый индивидуальный элемент
    const element1 = document.createElement('div');
    element1.id = 'element1';
    element1.className = 'additional-element';
    element1.textContent = 'Первый индивидуальный элемент (40px высоты)';
    
    // Создаем второй индивидуальный элемент
    const element2 = document.createElement('div');
    element2.id = 'element2';
    element2.className = 'additional-element';
    element2.textContent = 'Второй индивидуальный элемент (60px высоты)';
    
    // Добавляем их в header
    header.appendChild(element1);
    
    // Немного задержки или сразу добавляем оба
    header.appendChild(element2);
    
} else {
     // Возвращаем к исходной высоте
    header.style.height = '90px';

     // Удаляем оба элемента по их id
    const el1 = document.getElementById('element1');
    const el2 = document.getElementById('element2');
    if (el1) el1.remove();
    if (el2) el2.remove();
    
}

isExpanded = !isExpanded;
}); */


