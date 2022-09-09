$(document).ready(function() {
    $(function() {
      $(window).scroll(function() {
        if ($(window).scrollTop() > 200) {
          $("#to-top").fadeIn(200);
        } else {
          $("#to-top").fadeOut(200);
        }
      });
      $("#to-top").click(function() {
        $('body,html').animate({
          scrollTop: 0
        },
        1000);
        return false;
      });
    });
  });