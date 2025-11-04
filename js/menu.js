// Arquivo: js/menu.js

// Usa uma função para garantir que o DOM esteja totalmente carregado
function setupMenuToggle() {
    const toggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu-list');

    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            menu.classList.toggle('active');
        });
        console.log("Menu Toggle inicializado.");
    } else {
        console.warn("Elemento de menu ou toggle não encontrado. Verifique o HTML.");
    }
}

// Inicializa a função
setupMenuToggle();