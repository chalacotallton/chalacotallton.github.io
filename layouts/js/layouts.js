// Js test function
$(document).ready(function(){
console.log($(window).width());
})
// Navbar js
$(document).ready(function() {
$(document).click(function(e) {
if(e.target.id == "ddmenu") {
  if($("#ddmenu").text() !== "X" && !$("#navbarCollapse").hasClass("fechado")) {
    $("#ddmenu").css("font-size", "20px");
    $("#ddmenu").text("X");
    $("#ddmenu").addClass("py-2");
    $("#navbarCollapse").addClass("aberto");
    setTimeout(function() {
      $("#navbarCollapse").removeClass("aberto");
    }, 351)
  }
  else if(!$("#navbarCollapse").hasClass("aberto")){
    $("#ddmenu").html("&equiv;");
    $("#ddmenu").css("font-size", "28px");
    $("#ddmenu").removeClass("py-2");
    $("#navbarCollapse").addClass("fechado");
    setTimeout(function() {
      $("#navbarCollapse").removeClass("fechado");
    }, 351)
  }
}
})
})
