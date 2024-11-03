document.addEventListener("DOMContentLoaded", () => {
    const tituloInput = document.getElementById("titulo");
    const mensajeError = document.getElementById("mensajeError");
    const posX = document.getElementById("posX");
    const posY = document.getElementById("posY");
    const previsualizacionCamiseta = document.getElementById("previsualizacion-camiseta");
    const textoCamiseta = document.getElementById("texto-camiseta");
    const imagenCentro = document.getElementById("imagen-centro");
    const imagenPecho = document.getElementById("imagen-pecho");
    const imagenesArrastrables = document.querySelectorAll(".arrastrable");

    // Establecer la camiseta negra como imagen de fondo por defecto
    previsualizacionCamiseta.style.backgroundImage = 'url("./img/camiseta/black.png")';
    previsualizacionCamiseta.style.backgroundColor = 'black';

 // Actualizar título
tituloInput.addEventListener("input", () => {
    const titulo = tituloInput.value;
    textoCamiseta.textContent = titulo; // Actualiza el texto en la camiseta
    if (titulo.length > 10) {
        mensajeError.textContent = "El título no puede tener más de 10 caracteres.";
        mensajeError.style.display = "block"; 
    } else {
        mensajeError.textContent = "";
        mensajeError.style.display = "none"; 
    }
});


    // Actualizar posición del texto
    //Cuando ajustas el input posX, el texto se mueve de izquierda o derecha.
    posX.addEventListener("input", () => {
        textoCamiseta.style.left = `${posX.value}%`;
    });

    //Cuando ajustas el input posY, el texto se mueve de arriba o abajo.
    posY.addEventListener("input", () => {
        textoCamiseta.style.top = `${posY.value}%`;
    });

    // Cambiar color de la camiseta
    document.querySelectorAll('input[name="color"]').forEach((radio) => {
        radio.addEventListener('change', function() {
            previsualizacionCamiseta.style.backgroundImage = `url("./img/camiseta/${this.value}.png")`;
            previsualizacionCamiseta.style.backgroundColor = this.value;
        });
    });

    // Hacer las imágenes arrastrables
    imagenesArrastrables.forEach(img => {
        img.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("id", img.id);
        });
    });

  // Soltar imagen en la camiseta
previsualizacionCamiseta.addEventListener("dragover", (e) => e.preventDefault());
previsualizacionCamiseta.addEventListener("drop", (e) => {
    e.preventDefault();
    const imgId = e.dataTransfer.getData("id");
    const imgSrc = document.getElementById(imgId).src;

    // Configurar imagen en el centro
    imagenCentro.style.backgroundImage = `url(${imgSrc})`;
    
    // Configurar logo en el pecho
    imagenPecho.style.backgroundImage = `url(${imgSrc})`;

    console.log("Imagen seleccionada:", imgId);
});


});
