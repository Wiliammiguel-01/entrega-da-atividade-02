import { loadRoute } from './router.js';
import { Templates as o } from './templates.js';
import { initializeFormValidation as t } from './formValidation.min.js';

function initSPA() {
  loadRoute(); // carrega a rota atual ou a home se estiver vazia

  // Captura cliques em links SPA
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      const href = e.target.getAttribute('href');
      window.location.hash = href; // atualiza o hash
    }
  });
}

// Aguarda o carregamento completo
window.addEventListener('DOMContentLoaded', initSPA);
window.addEventListener('load', () => {
  if (!document.getElementById('app-content').innerHTML.trim()) {
    loadRoute();
  }
});

// --- MENU HAMBÚRGUER (abre e fecha no mobile) ---
const menuToggle = document.getElementById('menu-toggle');
const menuLinks = document.getElementById('menu-links');

menuToggle.addEventListener('click', () => {
  menuLinks.classList.toggle('active');
});

// --- BOTÃO DE ALTO CONTRASTE ---
const body = document.body;
const btn = document.getElementById("toggle-contrast");

btn.addEventListener('click', () => {
  body.classList.toggle('high-contrast');
  localStorage.setItem('contrast', body.classList.contains('high-contrast') ? 'on' : 'off');
});

// mantém o modo salvo no localStorage
if (localStorage.getItem('contrast') === 'on') {
  body.classList.add('high-contrast');
}
