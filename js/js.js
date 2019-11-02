  // Js test function
$(document).ready(function(){
  console.log($(window).width());
})
// Navbar js
$(document).ready(function() {
$(document).click(function(e) {
  if(e.target.id == "ddmenu") {
    if($("#ddmenu").text() == "X") {
      setTimeout(function closeddmenu() {
        $("#ddmenu").css({'transform' : 'rotate(90deg)'});
        $("#ddmenu").text("|||");
      }, 510);
    }
    else {
      $("#ddmenu").css({'transform' : 'rotate(0deg)'});
      $("#ddmenu").text("X");
    }
  }
})
})
