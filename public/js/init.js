(function($){
  $(function(){

    $('.button-collapse').sideNav({
      menuWidth: 100,
      closeOnClick: true,
      draggable: true
    });
    $('.parallax').parallax();

    $('ul.tabs').tabs();
    $('.modal').modal();
    $('.slider').slider({
      full_width: true,
      height: 545
    });



  }); // end of document ready
})(jQuery); // end of jQuery name space