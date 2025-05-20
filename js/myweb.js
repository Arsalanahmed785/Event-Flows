
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

$(window).scrollTop(function(){
  
  if($(window).scrollTop()>400){
      $("#scrol-btn").addClass("fix-btn")
      $("#scrol-btn").addClass("fix-icon")
  }
  
})


})


function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

AOS.init({
  offset: 1500,
  once: true,
});