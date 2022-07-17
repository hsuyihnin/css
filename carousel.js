const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const slides = document.querySelectorAll(".carousel-item");
const totalSlides = slides.length;
let position = 0;

function hideAll() {
  for (let slide of slides) {
    slide.classList.remove("visible");
  }
}

prevBtn.addEventListener("click", () => {
  hideAll();
  if (position === 0) {
    position = totalSlides - 1;
  } else {
    position--;
  }

  slides[position].classList.add("visible");
} );


nextBtn.addEventListener("click", () => {
  hideAll();

  if (position === totalSlides - 1) {
    position = 0;
  } else {
    position++;
  }
    slides[position].classList.add("visible");

});
