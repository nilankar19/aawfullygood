window.addEventListener("scroll", function() {
    // Get the scroll position
    var scrollPosition = window.scrollY;

    // Get the target element
    var targetElement = document.getElementById("myElement");

    // Specify the desired scroll position to trigger the animation
    var triggerPosition = 500;

    // Check if the scroll position meets the condition
    if (scrollPosition >= triggerPosition) {
      // Add a CSS class to apply the animation
      targetElement.classList.add("animate-element");
    } else {
      // Remove the CSS class if the scroll position is below the desired position
      targetElement.classList.remove("animate-element");
    }
  });


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
