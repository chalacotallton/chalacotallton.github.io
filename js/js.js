  // Js test function
$(document).ready(function(){
  console.log($(window).width());
})
// Navbar js
$(document).ready(function() {
$(document).click(function(e) {
  if(e.target.id == "ddmenu") {
    if($("#ddmenu").text() == "X") {
      setTimeout(function(){
        $("#ddmenu").html("&equiv;");
        $("#ddmenu").css("font-size", "28px");
        $("#ddmenu").removeClass("py-2");
      }, 500);

    }
    else {
      setTimeout(function(){
        $("#ddmenu").css("font-size", "20px");
        $("#ddmenu").text("X");
        $("#ddmenu").addClass("py-2");
      }, 500);

    }
  }
})
})
