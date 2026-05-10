document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('menuToggle');
    const list = document.getElementById('menuList');

    toggle.addEventListener('click', () => {
        // Перемикаємо видимість списку
        list.classList.toggle('active');
        
        // Можна також додати ефект для самих рисок (наприклад, зміна кольору)
        if (list.classList.contains('active')) {
            toggle.style.color = '#007bff';
        } else {
            toggle.style.color = '#333';
        }
    });
});

// Знаходимо всі кнопки з класом 'cloud-btn' (або просто 'button')
const buttons = document.querySelectorAll('.cloud-btn');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        // Перевіряємо, чи містить кнопка клас 'right'
        if (this.classList.contains('correct')) {
            this.style.backgroundColor = '#2ecc71'; // Зелений[span_0](start_span)[span_0](end_span)
            this.style.borderColor = '#2ecc71';
            this.style.color = '#ffffff';
            this.style.boxShadow = '0 0 20px #2ecc71'; // Додаємо зелене світіння
        } 
        // Перевіряємо, чи містить кнопка клас 'wrong'
        else if (this.classList.contains('wrong')) {
            this.style.backgroundColor = '#e74c3c'; // Червоний[span_1](start_span)[span_1](end_span)
            this.style.borderColor = '#e74c3c';
            this.style.color = '#ffffff';
            this.style.boxShadow = '0 0 20px #e74c3c'; // Додаємо червоне світіння
        }
    });
});


const soundRight = new Audio('https://www.myinstants.com/media/sounds/ding-sound-effect_1.mp3');
const soundWrong = new Audio('https://www.myinstants.com/media/sounds/wrong-answer-sound-effect.mp3');

// Функція для перевірки
document.addEventListener('click', function(e) {
    // Шукаємо, чи клікнули ми по кнопці з класом cloud-btn
    const btn = e.target.closest('.cloud-btn');
    
    if (!btn) return; // Якщо клікнули не по кнопці — ігноруємо

    console.log("Кнопка натиснута:", btn.className); // Повідомлення в консоль

    if (btn.classList.contains('correct')) {
        btn.classList.add('correct-active');
        soundRight.currentTime = 0;
        soundRight.play().catch(err => console.log("Помилка звуку:", err));
        console.log("Грає звук: Правильно");
    } 
    else if (btn.classList.contains('wrong')) {
        btn.classList.add('wrong-active');
        soundWrong.currentTime = 0;
        soundWrong.play().catch(err => console.log("Помилка звуку:", err));
        console.log("Грає звук: Помилка");
    }
});