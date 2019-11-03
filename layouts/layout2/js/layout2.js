// Js test function
$(document).ready(function(){
console.log($(window).width());
})
//to top on ready
$(document).ready(function(){
    $(this).scrollTop(0);
    var prevScrollpos = 0;
    var currentScrollPos = 0;
});
// Navbar js
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
}
