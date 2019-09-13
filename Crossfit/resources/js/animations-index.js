  
    $("#button-email-header").click(function () {

      var empty = $('#email-input-header').val();

      if (empty != "") {
        $('#block-contact-2').each(function () {
          $('#block-contact-1').hide();
          $("#block-contact-2").removeClass("visibility-contact-none").addClass("visibility-contact-show");
          animationScrollLeft('#block-contact-2');
        });
      } else {
        alert('Campo email vacio!')
      }

    });

    $("#button-name-header").click(function () {

      var empty = $('#name-input-header').val();
      
      if (empty != "") {
        $('#block-contact-3').each(function () {
        $('#block-contact-2').hide();
        $("#block-contact-3").removeClass("visibility-contact-none").addClass("visibility-contact-show");
        animationScrollLeft('#block-contact-2');
      });
      } else {
        alert('Campo nombre vacio!')
      }

      
    });

    $(window).scroll(function () {

      $('#block-1').each(function () {
        animationScroll('#block-1');
      });

      $('#block-2').each(function () {
        animationScroll('#block-2');
      });

      $('#block-3').each(function () {
        animationScroll('#block-3');
      });

      $('#block-4').each(function () {
        animationScroll('#block-4');
      });

      $('#block-5').each(function () {
        animationScroll('#block-5');
      });

      $('#block-6').each(function () {
        animationScroll('#block-6');
      });

      $('#block-7').each(function () {
        animationScroll('#block-7');
      });

      $('#block-8').each(function () {
        animationScroll('#block-8');
      });

      $('#block-9').each(function () {
        animationScroll('#block-9');
      });

      $('#block-10').each(function () {
        animationScroll('#block-10');
      });

      $('#block-11').each(function () {
        animationScroll('#block-11');
      });

      $('#block-12').each(function () {
        animationScrollLeft('#block-12');
      });

      $('#block-13').each(function () {
        animationScrollLeft('#block-13');
      });

      $('#block-14').each(function () {
        animationScrollLeft('#block-14');
      });

      $('#block-15').each(function () {
        animationScrollLeft('#block-15');
      });

      $('#block-16').each(function () {
        animationScrollLeft('#block-16');
      });

      $('#block-17').each(function () {
        animationScroll('#block-17');
      });

      $('#block-18').each(function () {
        animationScroll('#block-18');
      });

      $('#block-19').each(function () {
        animationScroll('#block-19');
      });

      $('#block-20').each(function () {
        animationScroll('#block-20');
      });

      $('#block-21').each(function () {
        animationScroll('#block-21');
      });

      $('#block-22').each(function () {
        animationScroll('#block-22');
      });

      $('#block-23').each(function () {
        animationScrollLeft('#block-23');
      });

      $('#block-24').each(function () {
        animationScrollLeft('#block-24');
      });

      $('#block-25').each(function () {
        animationScrollLeft('#block-25');
      });

      $('#block-26').each(function () {
        animationScrollLeft('#block-26');
      });

      $('#block-27').each(function () {
        animationScrollLeft('#block-27');
      });

      $('#block-28').each(function () {
        animationScrollLeft('#block-28');
      });

      $('#block-29').each(function () {
        animationScrollLeft('#block-29');
      });

      $('#block-30').each(function () {
        animationScrollLeft('#block-30');
      });

      $('#block-31').each(function () {
        animationScrollLeft('#block-31');
      });

      $('#block-32').each(function () {
        animationScrollLeft('#block-32');
      });

      $('#block-33').each(function () {
        animationScrollLeft('#block-33');
      });

      $('#block-34').each(function () {
        animationScrollLeft('#block-34');
      });

      $('#block-35').each(function () {
        animationScrollLeft('#block-35');
      });

    });


    function animationScroll(id) {

      var topOfWindow = $(window).scrollTop(),
        bottomOfWindow = topOfWindow + $(window).height();
      var imagePos = $(id).offset().top;
      if (imagePos <= bottomOfWindow - 100 && imagePos >= topOfWindow - 250) {

        $(id).addClass('slideUp');
      } else {
        $(id).removeClass('slideUp');
      }

    }

    function animationScrollLeft(id) {

      var topOfWindow = $(window).scrollTop(),
        bottomOfWindow = topOfWindow + $(window).height();
      var imagePos = $(id).offset().top;
      if (imagePos <= bottomOfWindow - 100 && imagePos >= topOfWindow - 250) {

        $(id).addClass('slideLeft');
      } else {
        $(id).removeClass('slideLeft');
      }

    }

  