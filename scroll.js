(function($) {

  var $navbar = $("#top"),
  y_pos = $navbar.offset().top,
  height = $navbar.height();

  //Sticky menu bar javascript
  $(document).scroll(function() {
    var scrollTop = $(this).scrollTop();

    if (scrollTop > y_pos + height) {
      $navbar.addClass("navbar-fixed").animate({
        top: 0
      });
    } else if (scrollTop <= y_pos) {
      $navbar.removeClass("navbar-fixed").clearQueue().animate({
      }, 0);
    }
  });
})(jQuery, undefined);
