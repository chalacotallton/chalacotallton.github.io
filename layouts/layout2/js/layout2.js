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
//toggle menu js
function menuLayer() {
  $(document).scrollTop(0);
  $("header").toggleClass("position-relative");
}
$(window).resize(function() {
  $("header").removeClass("position-relative");
});
//vitrine controls
$(document).ready(function(){
  $(".vitrine-control-next-icon").click(function() {
    var x = document.getElementsByClassName("vitrine-item");
    for(var i = 1; i <= x.length; i++) {
      $('.vitrine-item.order-' + i).addClass('order-' + (i - 1));
      $('.vitrine-item.order-' + i).removeClass('order-' + i);
    }
      var indice = parseInt(x.length);
      $('.vitrine-item.order-0').addClass('order-' + indice);
      $('.vitrine-item.order-0').removeClass('order-0');
  })
})
//vitrine hover effect
$(document).ready(function(){
  $(".card").mouseover(function() {
    $(this).find('.card-hover-mask').show();
  }).mouseout(function() {
    $(".card-hover-mask").hide();
  })
})
$(document).ready(function(){
  $(".sales-card").mouseover(function() {
    $(this).find('.sales-card-mask').show();
  }).mouseout(function() {
    $(".sales-card-mask").hide();
  })
})
