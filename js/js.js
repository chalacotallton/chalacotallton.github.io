  $(document).click(function(e) {
    if(e.target.id != "mobilenavbarContent" && e.target.id != "ddmenu") {
      $("#mobilenavbar").hide();
    }
    if(e.target.id == "ddmenu") {
      $("#mobilenavbar").show();
    }
  })
$(document).ready(function(){
  console.log("ready");
})
