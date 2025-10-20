let slideIndex = 0;
let slideTimer;

function showSlides(n) {
  const slides = document.getElementsByClassName("slide");
  if (slides.length === 0) return;

  if (n === undefined) {
    n = ++slideIndex;
  } else {
    slideIndex = n;
  }

  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
}

function plusSlides(n) {
  clearTimeout(slideTimer);
  showSlides(slideIndex + n);
  startSlideTimer();
}

function startSlideTimer() {
  clearTimeout(slideTimer);
  slideTimer = setTimeout(() => showSlides(), 5000); // 5 seconds per slide
}

// Initialize slideshow once DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  showSlides(slideIndex);
  startSlideTimer();
});
