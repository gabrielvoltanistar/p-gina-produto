// Seleciona a imagem principal
const imagemprincipal = document.getElementById('imagem-principal');

// Seleciona todas as miniaturas
const miniaturas = document.querySelectorAll('.miniatura');

// Adiciona um evento de clique para cada miniatura
miniaturas.forEach(miniatura => {
    miniatura.addEventListener('click', function() {
        // Pega o valor do atributo 'data-imagem' da miniatura clicada
        const novaImagem = this.getAttribute('data-imagem');

        // substitui a imagem principal pela imagem da miniatura clicada
        imagemprincipal.src = novaImagem;
    });
});