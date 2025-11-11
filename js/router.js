// router.js
import { Templates } from './templates.js'; // ORIGINAL, não minificado
import { initializeFormValidation } from './formValidation.min.js'; // minificado, ok

const Routes = {
    '': 'home',
    'home': 'home',
    'projetos': 'projetos',
    'cadastro': 'cadastro',
    'contato': 'cadastro'
};

export function loadRoute() {
    const hash = window.location.hash.slice(2);
    const routeName = Routes[hash] || '404';
    const content = Templates[routeName] || Templates['404'];
    const app = document.getElementById('app-content');

    if (!app) return console.error("Erro: #app-content não encontrado.");

    app.innerHTML = content;

    if (routeName === 'cadastro') {
        initializeFormValidation(); // validação só na página cadastro
    }
}


window.addEventListener('hashchange', loadRoute);