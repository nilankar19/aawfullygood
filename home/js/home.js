const slides = document.querySelectorAll('.slide');
    const buttons = document.querySelectorAll('.button');

    let currentSlide = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.classList.add('active');
          buttons[i].classList.add('active');
        } else {
          slide.classList.remove('active');
          buttons[i].classList.remove('active');
        }
      });
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }

    function previousSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }

    buttons.forEach((button, i) => {
      button.addEventListener('click', () => {
        showSlide(i);
        currentSlide = i;
      });
    });

  