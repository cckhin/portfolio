(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('#nav-mobile li').click(function(){
      $('#nav-mobile').hide();
      console.log("OK test");
    });
    $('.sidenav-trigger').click(function(){
      $('#nav-mobile').show();
        //  $(document.body).click( function() {
        //   $('#nav-mobile').hide();
        // });
    });

    $(document.section).click( function() {
      $('#nav-mobile').hide();
  });

  }); // end of document ready
})(jQuery); // end of jQuery name space

