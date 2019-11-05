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
  var x = document.getElementsByClassName("vitrine-item");
  var vitrineItemLength = 0;
  for (var i = 0 ; i < x.length; i++) {
    vitrineItemLength += $(x[i]).outerWidth();
  }
  if (vitrineItemLength > $(".vitrine").outerWidth()) {
    console.log("flag on");
  }
  else {
    console.log($(".vitrine").outerWidth()+" flag off");
  }

});
//vitrine controls

// $(document).ready(function(){
//   var x = document.getElementsByClassName("vitrine-item");
//   var distance = 0;
//   for(var i = 1; i < x.length; i++) {
//     x[i].style.left = -$(x[i]).outerWidth() - parseInt($(x[i]).css('marginRight')) + "px";
//     distance += -$(x[i]).outerWidth() - parseInt($(x[i]).css('marginRight'));
//   }
//   x[0].style.left = -distance + "px";
// })

// on resize recalculate x[0] position
$(document).ready(function(){
    $(window).resize(function() {
      console.log("resized");
      var x = document.getElementsByClassName("vitrine-item");
      for(var i = 0; i < x.length; i++) {
          $(x[i]).css("left", "");
      }
    })
});
