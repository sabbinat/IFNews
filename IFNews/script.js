// Función del botón ver más
document.getElementById('verMasBtn').onclick = function() {
    var noticiasEscondidas = document.getElementById('noticiasEscondidas');
    if (noticiasEscondidas.classList.contains('d-none')) {
        noticiasEscondidas.classList.remove('d-none');
        this.style.display = 'none';
    } else {
        noticiasEscondidas.classList.add('d-none');
        this.textContent = 'Ver más';
    }
}
//Función del botón ver menos 
document.getElementById('verMenosBtn').onclick = function(){
    var cerrarArea = document.getElementById('noticiasEscondidas');
    cerrarArea.classList.add('d-none');
    var verMasBtn = document.getElementById('verMasBtn');
    verMasBtn.style.display = 'block';
}

//------

// Fecha del próximo proceso selectivo de IFSUL
const proximoProcesoIFSUL = new Date('2024-11-30');
function calcularDiasRestantes() {
    const ahora = new Date();
    const diferencia = proximoProcesoIFSUL - ahora;
    const dias = Math.ceil(diferencia / (1000 * 60 * 60 * 24));
    return dias;
}
function actualizarTexto() {
    const diasRestantes = calcularDiasRestantes();
    const countdownElement = document.getElementById('countdown');
    countdownElement.textContent = `Faltan ${diasRestantes} días para el próximo proceso selectivo de IFSUL.`;
}
actualizarTexto();
setInterval(actualizarTexto, 1000);

//-------

document.querySelector('.dropdown').onmouseenter = function(){
    var dropdownMenu = this.querySelector('.dropdown-menu');
    dropdownMenu.style.display = "block";
}
document.querySelector('.dropdown').onmouseleave = function(){
    var dropdownMenu = this.querySelector('.dropdown-menu');
    dropdownMenu.style.display = "none";
}



//--------

// Ajusta el tamaño de la fuente de las noticias
function adjustFontSize(action) {
    const contentElements = document.querySelectorAll('.post-text');
    contentElements.forEach(content => {
        let currentFontSize = parseFloat(window.getComputedStyle(content).fontSize);
        if (action === 'increase') {
            content.style.fontSize = (currentFontSize + 2) + 'px';
        } else if (action === 'decrease') {
            content.style.fontSize = (currentFontSize - 2) + 'px';
        } else if (action === 'reset') {
            content.style.fontSize = ''; // Restablecer al tamaño predeterminado
        }
    });
}



//Funcion para cambiar las fotos 
let currentPhotoIndex = 0;
const photos = [
    'img/noticias/1.jpg',
    'img/noticias/2.jpg',
    'img/noticias/3.jpg',
    'img/noticias/4.jpg',
    'img/noticias/5.jpg'
];
function changePhoto(photo) {
    document.querySelector('.main_photo').src = photo;
}
function autoChangePhoto() {
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    changePhoto(photos[currentPhotoIndex]);
}

//-------

//Función que muestra el area de redes sociales 
document.addEventListener('DOMContentLoaded', (event) => {
    const shareContainer = document.querySelector('.share.post-container');
    const socialArea = document.querySelector('.social');

    shareContainer.addEventListener('mouseenter', () => {
        socialArea.style.display = 'block';
    });
    shareContainer.addEventListener('mouseleave', () => {
        socialArea.style.display = 'none';
    });
});

//---------

//Regresar al inicio de la página
function volverAlInicio() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
  


