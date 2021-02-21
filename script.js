
 $(window).on('load', function () {
  $(".loader").fadeIn();
  $("#loader-text").delay(2000).fadeIn();
  $("#preloder").delay(3500).fadeOut();


});
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >=  150 ) {
      document.querySelector(".navbar").style.opacity = "1";
    
      
    } else {
      document.querySelector(".navbar").style.opacity = "0";

    }
  });
  $('.nav-link, .btn-ghost').click(function() {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 300 );
        return false;
      }
    }
    
  }); 
  $(".navbar li a").click(function() {
      $(".navbar li a").parent().removeClass("actives");
      $(this).parent().addClass("actives")
  })
  $(window).scroll(function() {
      var scroll  = $(window).scrollTop();
      if (scroll >= 0 && scroll <= 600) {
          $("#home1").parent().addClass("actives")
      } 
     else {
        $("#home1").parent().removeClass("actives")
     }
    })
    $(window).scroll(function() {
        var scroll  = $(window).scrollTop();
        if (scroll >= 601 && scroll <= 1300) {
            $("#about1").parent().addClass("actives")
        } 
       else {
          $("#about1").parent().removeClass("actives")
       }
      }) 
      $(window).scroll(function() {
        var scroll  = $(window).scrollTop();
        if (scroll >= 1301 && scroll <= 1900) {
            $("#success1").parent().addClass("actives")
        } 
       else {
          $("#success1").parent().removeClass("actives")
       }
      })
      $(window).scroll(function() {
        var scroll  = $(window).scrollTop();
        if (scroll >= 1901 && scroll <= 3000) {
            $("#features1").parent().addClass("actives")
        } 
       else {
          $("#features1").parent().removeClass("actives")
       }

      })
      $(window).scroll(function() {
        var scroll  = $(window).scrollTop();
        if (scroll >= 3001 ) {
            $("#contact1").parent().addClass("actives")
        } 
       else {
          $("#contact1").parent().removeClass("actives")
       }
      })
    
