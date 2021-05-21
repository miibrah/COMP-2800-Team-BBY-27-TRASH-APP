$(document).ready(function () {
   
    /** 
     credit for html, css, and js related to "return to top button" functionality
     goes to https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
     --> lines 9 through 22
     **/
 
     $(window).scroll(function () {
         if ($(this).scrollTop() > 20) {
             $('#toTopBtn').fadeIn();
         } else {
             $('#toTopBtn').fadeOut();
         }
     });
 
    //  $('#toTopBtn').click(function () {
    //      $("html, body").animate({
    //          scrollTop: 0
    //      }, 1000);
    //      return false;
    //  });
 });
