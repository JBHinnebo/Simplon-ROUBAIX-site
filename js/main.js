
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


$(document).ready(function(){

      $('body').append('<a href="#top" class="top_link" title="Revenir en haut de page">Haut</a>');

			$(window).scroll(function(){
            // Permet de remonter en haut de page.
            posScroll = $(document).scrollTop();

            // Permet de faire apparaitre ou disparaitre le bouton.
				if(posScroll >=450)
					$('.top_link').fadeIn(300);
				else
					$('.top_link').fadeOut(300);
			});

   });
