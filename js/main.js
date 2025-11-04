import { loadRoute } from './router.js';

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
  // Garante renderização mesmo se o DOMContentLoaded falhar
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