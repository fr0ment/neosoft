import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function () {
      // Убираем активный класс у всех кнопок
      document.querySelectorAll('.nav-link').forEach(item => item.classList.remove('active'));
      
      // Добавляем активный класс на текущую кнопку
      this.classList.add('active');
      
      // Обновляем градиент линии
      const line = document.querySelector('.line');
      const links = document.querySelectorAll('.nav-link');
      const index = Array.from(links).indexOf(this);
      const percentage = (index / (links.length - 1)) * 100;
  
      line.style.background = `linear-gradient(90deg, green 0%, white ${percentage}%, green 100%)`;
    });
  });