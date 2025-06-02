/**
 * Alterna a visibilidade de um elemento de texto e atualiza o texto do botão.
 * @param {string} textId O ID do elemento de texto a ser mostrado/ocultado.
 * @param {HTMLElement} buttonElement O elemento do botão que foi clicado.
 */
function toggleText(textId, buttonElement) {
    const textElement = document.getElementById(textId);
    if (!textElement) {
        console.error(`Elemento com ID '${textId}' não encontrado.`);
        return;
    }

    const isExpanded = textElement.classList.toggle('show');

    if (isExpanded) {
        buttonElement.textContent = 'Ver menos';
        buttonElement.classList.add('expanded');
        // Role suavemente para o início do texto expandido, se necessário
        // setTimeout(() => { // Pequeno timeout para garantir que o layout foi atualizado
        //     textElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        // }, 100); // Opcional: ajuste o tempo ou remova se não desejar scroll
    } else {
        buttonElement.textContent = 'Ver mais';
        buttonElement.classList.remove('expanded');
    }
}

// Adiciona a classe 'active' ao link de navegação da página atual
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('header nav ul li a');
    const currentURL = window.location.href;

    links.forEach(link => {
        if (link.href === currentURL) {
            link.classList.add('active');
        }
    });
});
