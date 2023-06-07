document.addEventListener ('DOMContentLoaded',function() {
    var element = document.querySelector('.block-of-elements');
    element.addEventListener('click', function(event) {
        if (event.target.matches('.App')) {
            var section = document.querySelector('.section-one .container .first-box');
            if (section) {
                var offset = 50; // Adjust the offset value as per your requirement
                var topPosition = section.getBoundingClientRect().top;
                window.scrollTo({
                  top: topPosition - offset,
                  behavior: 'smooth'
                });
              }
            }
          });
        });

