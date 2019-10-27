$(document).ready(function(){
  var logo_width = $("#navbar").width()/2-$("#logo").width()/2;
  $("#logo").css("left", logo_width);
  console.log("ok");
})
  $(document).click(function(e) {
    if(e.target.id != "mobilenavbarContent" && e.target.id != "ddmenu") {
      $("#mobilenavbar").hide();
      $("#ddmenu").text("|||");
      $("#ddmenuClose").hide();
    }
    if(e.target.id == "ddmenu") {
      $("#mobilenavbar").show();
       // $("#ddmenu").html("&nbsp");
      $("#ddmenuClose").show();
    }
  })
$(document).ready(function(){
  console.log("ready");
})
