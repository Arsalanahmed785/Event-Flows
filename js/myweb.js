
$(document).ready(function(){
$(window).scroll(function(){

   $(window).scrollTop()  

  if($(window).scrollTop() > 100){
     $("nav").addClass("after")
  }
  else{
    $("nav").removeClass("after")
  }

})  

// $(window).scrollTop(function(){
  
//   if($(window).scrollTop()>400){
//       $("#scroll-btn").addClass("fix-btn")
//       $("#scroll-btn").addClass("fix-icon")
//   }
  
// })


})
$(window).on("scroll", function() {
  if ($(this).scrollTop() > 400) {
    $("#scroll-btn").fadeIn();
  } else {
    $("#scroll-btn").fadeOut();
  }
});
$("#scroll-btn").on("click", function(e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "slow");
});


function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

AOS.init({
  offset: 1500,
  once: true,
});