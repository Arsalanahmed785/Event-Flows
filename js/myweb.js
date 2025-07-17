
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


})
$(window).on("scroll", function() {
  if ($(this).scrollTop() > 220) {
    $("#scroll-btn").fadeIn();
  } else {
    $("#scroll-btn").fadeOut();
  }
})

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}
const sel = document.querySelector(".selected");
const opts = document.querySelector(".options");
sel.addEventListener("click", () => {
  opts.style.display = opts.style.display === "block" ? "none" : "block";
});
opts.addEventListener("click", e => {
  if (e.target.tagName === "LI") {
    sel.textContent = e.target.textContent;
    opts.style.display = "none";
  }
});



AOS.init({
  offset: 1500,
  once: true,
});