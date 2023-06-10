document.addEventListener('DOMContentLoaded', function() {
  var elements = document.querySelectorAll('.App');
  elements.forEach(function(element) {
    element.addEventListener('click', function() {
      var section = document.querySelector('.section-one .container .first-box');
      if (section) {
        var offset = 50; // Adjust the offset value as per your requirement
        var topPosition = section.getBoundingClientRect().top;
        window.scrollTo({
          top: topPosition - offset,
          behavior: 'smooth'
        });
      }
    });
  });
});






