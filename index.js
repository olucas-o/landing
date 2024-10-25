let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    currentSlide += direction;

    // Volta ao início ou fim ao ultrapassar os limites
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    const carousel = document.querySelector('.carousel');
    const offset = -currentSlide * 100;  // 100% para mover cada slide
    carousel.style.transform = `translateX(${offset}%)`;
}