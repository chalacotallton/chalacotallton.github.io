/*navbar*/
$(document).ready(function(){
  var logo_width = $("#navbar").width()/2-$("#logo").width()/2;
  $("#logo").css("left", logo_width);
})
$(window).resize(function(){
  var logo_width = $("#navbar").width()/2-$("#logo").width()/2;
  $("#logo").css("left", logo_width);
})
$(document).click(function(e) {
  if(e.target.id != "mobilenavbarContent" && e.target.id != "ddmenu") {
    $("#mobilenavbar").hide();
    $("#ddmenuClose").hide();
    console.log("ok");
  }
  if(e.target.id == "ddmenu") {
    $("#mobilenavbar").show();
    $("#ddmenuClose").show();
  }
})
/*-----*/

$(document).ready(function(){
  console.log("ready");
})
