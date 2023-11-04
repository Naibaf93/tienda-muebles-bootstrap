const modalImage = document.querySelector('#modal-imagen');

if(modalImage) {
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
    
    // ocultando los demas hijos para que solo salga una imagen al dar click
    
    modalImage.addEventListener('hidden.bs.modal', function() {
        const contenidoModal = document.querySelector('.modal-body');
        contenidoModal.textContent = '';
    });
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()