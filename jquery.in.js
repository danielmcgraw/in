(function($) {
  function _above(element) {
    return $(element).offset().top + $(element).height() <= $(window).scrollTop();  
  }
  function _right(element) {
    return $(element).offset().left >= $(window).scrollLeft() + $(window).width();  
  }
  function _below(element) {
    return $(element).offset().top >= $(window).scrollTop() + $(window).height(); 
  }
  function _left(element) {
    return $(element).offset().left + $(element).width() <= $(window).scrollLeft();
  }
  function _in(element) {
    return !_above(element) && !_right(element) && !_below(element) && !_left(element)
  }
  function _contained(element) { 
    return $(element).offset().top >= $(window).scrollTop() && 
      $(element).offset().left <= $(window).scrollLeft() + $(window).width() && 
      $(element).offset().top + $(element).height() <= $(window).scrollTop() + $(window).height() && 
      $(element).offset().left >= $(window).scrollLeft();
  }

  $.extend($.expr[':'], {
    above: function(element) {
      return _above(element)
    },
    right: function(element) {
      return _right(element)
    },
    below: function(element) {
      return _below(element)
    },
    left: function(element) {
      return _left(element)
    },
    contained: function(element) {
      return _contained(element)
    },
    outside: function(element) {
      return !_in(element)
    },
    in: function(element) {
      return _in(element)
    }
  });
})(jQuery);