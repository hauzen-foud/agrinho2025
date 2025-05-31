
document.querySelector('.btn-ver-mais').addEventListener('click', function() {
    const textoOculto = document.querySelector('.texto-oculto');
    textoOculto.style.display = textoOculto.style.display === 'none' ? 'block' : 'none';
});
