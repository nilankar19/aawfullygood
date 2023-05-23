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