const modalImage = document.querySelector('#modal-imagen');

modalImage.addEventListener('show.bs.modal', function(event) {
    const enlace = event.relatedTarget;
    const rutaImagen = enlace.getAttribute('data-bs-image');
    
// construir la imagen

const image = document.createElement('IMG');
image.src = `img/${rutaImagen}`;
image.classList.add('img-fluid');
image.alt = 'Imagen galería';

const contenidoModal = document.querySelector('.modal-body');
contenidoModal.appendChild(image);
});

modalImage.addEventListener('hidden.bs.modal', function() {
    const contenidoModal = document.querySelector('.modal-body');
    contenidoModal.textContent = '';
});