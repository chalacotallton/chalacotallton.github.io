  // Js test function
$(document).ready(function(){
  console.log($(window).width());
})
// Navbar js
$(document).ready(function() {
$(document).click(function(e) {
  if(e.target.id == "ddmenu") {
    if($("#ddmenu").text() == "X") {
      $("#ddmenu").text("|||");
    }
    else {
      $("#ddmenu").text("X");
    }
  }
})
})
