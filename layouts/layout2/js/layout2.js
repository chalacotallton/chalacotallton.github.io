// Js test function
$(document).ready(function(){
console.log($(window).width());
})
//to top on ready
$(document).ready(function(){
    $(this).scrollTop(0);

});
// Navbar js
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else if(currentScrollPos > 100){

    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

//vitrine
$(document).ready(function(){
  console.log($("#vitrine").width());
  var d = document.getElementById("vitrine");
  d.style.left = "-300px";
});
