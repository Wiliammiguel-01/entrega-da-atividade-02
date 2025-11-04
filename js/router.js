// Arquivo: js/router.js

// IMPORTS: OBRIGATÓRIOS para a SPA funcionar em módulos
import { Templates } from './templates.js'; 
import { initializeFormValidation } from './formValidation.js'; 


const Routes = {
    '': 'home',           
    'home': 'home',       
    'projetos': 'projetos', 
    'cadastro': 'cadastro', 
    'contato': 'cadastro'   // Contato usa o template de cadastro
};

/**
 * Função principal do roteador. 
 * OBRIGATÓRIO: 'export' para que main.js possa importar
 */
export function loadRoute() {
    const currentHash = window.location.hash.slice(2); 
    const templateName = Routes[currentHash] || '404'; 
    const pageContent = Templates[templateName] || Templates['404'];

    const appContent = document.getElementById('app-content');

    if (appContent) {
        appContent.innerHTML = pageContent;
        
        // Chamada condicional da Validação (Aplica se for o formulário)
        if (templateName === 'cadastro') {
            initializeFormValidation();
        }
    } else {
        console.error("Erro: Elemento #app-content não encontrado. O roteamento falhou.");
    }
}

// Ouve o evento de mudança do hash (navegação)
window.addEventListener('hashchange', loadRoute);