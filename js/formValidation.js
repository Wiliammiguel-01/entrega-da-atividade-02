


export function validateForm(form) {
    let isValid = true;
    
    
    const nameInput = form.elements['nome'];
    if (nameInput.value.trim().length < 2) {
        alert("O nome deve ter pelo menos 2 caracteres.");
        nameInput.focus();
        isValid = false;
    }

    
    const emailInput = form.elements['email'];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        alert("Por favor, insira um e-mail válido.");
        emailInput.focus();
        isValid = false;
    }
    
    
    return isValid;
}

 
 
 
export function initializeFormValidation() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 

            if (validateForm(this)) {
                
                alert("Formulário Válido! Enviando dados...");
                this.reset(); 
            } else {
                
            }
        });
    }
}