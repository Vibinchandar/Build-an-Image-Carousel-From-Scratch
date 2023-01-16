const slides = document.getElementsByClassName("imga-item");
const nextButton = document.getElementById("imga-button-next");
const prevButton = document.getElementById("imga-button-prev");
const dots = document.getElementsByClassName("dot");
let position = 0;
const numberOfSlides = slides.length;

function hideAllSlides() {
  // remove all slides not currently being viewed
  for (const slide of slides) {
      slide.classList.remove("imga-item-visible");
      slide.classList.add("imga-item-hidden");
  }
}

function handleMoveToNextSlide(e) {
  hideAllSlides();
}

function handleMoveToPrevSlide(e) {
  hideAllSlides();
}

function handleMoveToNextSlide(e) {
  hideAllSlides();

  // check if last slide has been reached
  if (position === numberOfSlides - 1) {
    position = 0; // go back to first slide
  } else {
    // move to next slide
    position++;
  }
  // make current slide visible
  slides[position].classList.add("imga-item-visible");

  // update dot to represent current slide
  dots[position].classList.add("selected-dot");
  dots[position].checked = true;
}

function handleMoveToPrevSlide(e) {
  hideAllSlides();

  // check if we're on the first slide
  if (position === 0) {
    position = numberOfSlides - 1; // move to the last slide
  } else {
    // move back one
    position--;
  }
  // make current slide visible
  slides[position].classList.add("imga-item-visible");

  // update dot to represent current slide
  dots[position].classList.add("selected-dot");
  dots[position].checked = true;
}

nextButton.addEventListener("click", handleMoveToNextSlide);
prevButton.addEventListener("click", handleMoveToPrevSlide);