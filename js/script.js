(function($) {

    "use strict";

    $(document).ready(function() {
      
      // masonoary //

      initIsotope();

      // lightbox

      lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'fitImagesInViewport': true
      })
      
      /* swiper */
      

      var testimonialSwiper = new Swiper(".testimonial-swiper", {
        spaceBetween: 20,
        pagination: {
            el: ".testimonial-swiper-pagination",
            clickable: true,
          },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          800: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 3,
          }
        },
      });

    }); // End of a document ready

  // init Isotope
  var initIsotope = function() {
    
    $('.grid').each(function(){

      // $('.grid').imagesLoaded( function() {
        // images have loaded
        var $buttonGroup = $( '.button-group' );
        var $checked = $buttonGroup.find('.is-checked');
        var filterValue = $checked.attr('data-filter');
  
        var $grid = $('.grid').isotope({
          itemSelector: '.portfolio-item',
          // layoutMode: 'fitRows',
          filter: filterValue
        });
    
        // bind filter button click
        $('.button-group').on( 'click', 'a', function(e) {
          e.preventDefault();
          filterValue = $( this ).attr('data-filter');
          $grid.isotope({ filter: filterValue });
        });
    
        // change is-checked class on buttons
        $('.button-group').each( function( i, buttonGroup ) {
          $buttonGroup.on( 'click', 'a', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $( this ).addClass('is-checked');
          });
        });
      // });

    });
  }




})(jQuery);


function sendEmail() {
  let nameField = document.getElementById("name2");
  let emailField = document.getElementById("email");
  let messageField = document.getElementById("message");

  let params = {
    name: nameField.value,
    email: emailField.value,
    message: messageField.value,
  };

  if (!params.name || !params.email || !params.message) {
    alert("Please fill out all fields.");
    return;
  }

  emailjs
    .send("service_1q30jux", "template_tzkku8c", params)
    .then(
      (response) => {
        alert("Message Sent!");

        // Clear the input fields
        nameField.value = "";
        emailField.value = "";
        messageField.value = "";

        console.log("SUCCESS", response.status, response.text);
      },
      (error) => {
        alert("Failed to send message. Please try again.");
        console.error("FAILED", error);
      }
    );
}

