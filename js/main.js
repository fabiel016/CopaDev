(function( $ ) {

  $.fn.navSticky = function() {
    var $navbar = $('.navbar');
    var $navbarBg = $('.navbar--bg');
    var $navbarHeight = $navbarBg.outerHeight();
    var $header = $('.headline');
    var headerHeight = $header.outerHeight();

    $(document).scroll(function() {
        var scrollTop = $(this).scrollTop();
        var opacityHeight = headerHeight - ($navbarHeight * 2);
        var calc = scrollTop / opacityHeight;

        if ( calc >= '1' ) {
          $navbar.addClass('fixed');
          $navbarBg.css({
            'opacity': 1
          });
        } else if ( calc < '0' ) {
          $navbarBg.css({
            'opacity': 0
          });
        } else {
          $navbar.removeClass('fixed');
          $navbarBg.css({
            'opacity': calc
          });
        }
    });
  }

  $.fn.headlineAnim = function() {
    var $this = $(this);
    var content = $('.content');

    $(document).scroll(function() {
      var scrollTop = $(this).scrollTop();
      if ( scrollTop >= (content.offset().top * 0.4) ) {
        $this.removeClass('anim');
      } else {
        $this.addClass('anim');
      }
    });
  }

  $.fn.teamNavSticky = function() {
    var $this = $(this);
    var navWidth = $( '.team-nav--ghost').width();
    var content = $('.content');
    var navLeft = content.offset().left - navWidth;


    if ( navLeft >  0 && navWidth > 232 ) {
      $this.addClass('sticky');
      $this.css({
        'width': navWidth - 16,
        'left': navLeft
      });
    } else {
      $this.removeClass('sticky');
      $this.css({
        'width': '100%'
      });
    }
    $(document).scroll(function() {
      var scrollTop = $(this).scrollTop();
      if ( scrollTop >= content.offset().top - 36 && navLeft >  0 && navWidth > 232 ) {
        $this.addClass('fixed');
      } else {
        $this.removeClass('fixed');
      }
    });
  }
})( jQuery );

$(document).ready(function(){
  $('.navbar').navSticky();
  $('.headline').headlineAnim();
  $('.team-nav').teamNavSticky();
});

$(window).resize(function() {
  $('.team-nav').teamNavSticky();
});
