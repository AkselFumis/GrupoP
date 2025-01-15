document.addEventListener('DOMContentLoaded', (event) => {
    const images = [
        'url("ImagenP1.png")',
        'url("ImagenP2.png")',
        'url("ImagenP3.png")'
    ];

    let currentIndex = 0;

    const carousel = document.querySelector('.right');

    function changeBackgroundImage() {
        carousel.style.backgroundImage = images[currentIndex];
        currentIndex = (currentIndex + 1) % images.length;
    }

    // Cambiar la imagen cada 5 segundos (5000 milisegundos)
    setInterval(changeBackgroundImage, 5000);

    // Establecer la primera imagen al cargar la página
    changeBackgroundImage();
});

var slides = {
    card1: ['ImagenP2.png', 'ImagenP1.png', 'ImagenP3.png'],
    card2: ['ImagenP1.png', 'ImagenP2.png', 'ImagenP3.png'],
    card3: ['ImagenP1.png', 'ImagenP2.png', 'ImagenP3.png']
};

var currentIndices = {
    card1: 0,
    card2: 0,
    card3: 0
};

function showArrows(cardId) {
    var card = document.getElementById(cardId);
    var arrows = card.querySelectorAll('a');
    arrows.forEach(function (arrow) {
        arrow.style.display = 'block';
    });
}

function changeSlide(direction, cardId) {
    var card = document.getElementById(cardId);
    var images = slides[cardId];
    var totalImages = images.length;

    currentIndices[cardId] = (currentIndices[cardId] + direction + totalImages) % totalImages;
    card.style.backgroundImage = 'url(' + images[currentIndices[cardId]] + ')';
}

document.addEventListener('click', function (event) {
    var cards = document.querySelectorAll('.card');
    cards.forEach(function (card) {
        if (!card.contains(event.target)) {
            var arrows = card.querySelectorAll('a');
            arrows.forEach(function (arrow) {
                arrow.style.display = 'none';
            });
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    }

    var observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                var titulo = document.getElementById('titulo');
                titulo.classList.add('visible');

                titulo.addEventListener('animationend', function (event) {
                    if (event.animationName === 'bounce-in-top') {
                        titulo.classList.remove('bounce-in-top');
                        setTimeout(function () {
                            titulo.classList.add('fade-out');
                        }, 1000); // Añadir un retraso antes de comenzar el desvanecimiento
                    }
                });

                observer.disconnect(); // Para asegurarnos que la animación se ejecuta solo una vez
            }
        });
    }, options);

    observer.observe(document.getElementById('muestras'));
});



