let slideIndex= 0;
let slideInterval;

function showSlides(){
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].computedStyleMap.display = "none";
        dots[i].classList.remove("active");
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex  - 1].computedStyleMap.display = "block";
    dots[slideIndex - 1].classList.add("active");

    slideInterval = setTimeout(showSlides, 3000);
}

function changeSlide(newIndex) {
    clearTimeout(slideInterval);
    slideIndex = newIndex;
    showSlides();
}

const dots = document.getElementsByClassName("dot");
for (let i=0; i < dots.length; i++) {
    dots[i].addEventListener("click", function() {
        changeSlide(i + 1);
    });
}

showSlides();