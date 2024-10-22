let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll('.carousel-images img');
    const totalSlides = slides.length;

    for (let i = 0; i < totalSlides; i++) {
        slides[i].style.display = 'none';  
    }
    
    slideIndex++;
    if (slideIndex > totalSlides) {
        slideIndex = 1;
    }
    
    slides[slideIndex - 1].style.display = 'block';  
    
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function moveSlide(n) {
    slideIndex += n - 1;
    showSlides();
}
