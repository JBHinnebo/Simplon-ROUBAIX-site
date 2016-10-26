
// This code commange the button of the navbar

      $('.icon').on('click', function(){

          $('.Nav-apparition').slideToggle(250);

      });

// this code command the resize of the navbar, making sure that if the screen is small the nav disapear and vise versa.

$(window).resize( function() {

      if ($(window).width() < 740) {
         $('.Nav-apparition').hide();
      }
      else {
         $('.Nav-apparition').show();
   };
});
