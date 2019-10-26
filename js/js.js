  $(document).click(function(e) {
    if(e.target.id === "") {
        $("#mobilenavbar").hide();
        $("#ddmenu").text("|||");
        $("#ddmenuClose").hide();
        console.log(e.target.id);
    }
    console.log(e.target.id);
    // if(e.target.id != "mobilenavbarContent" && e.target.id != "ddmenu") {
    //   $("#mobilenavbar").hide();
    //   $("#ddmenu").text("|||");
    //   $("#ddmenuClose").hide();
    //   console.log(e.target.id);
    // }
    if(e.target.id == "ddmenu") {
      $("#mobilenavbar").show();
       $("#ddmenu").html("&nbsp");
      $("#ddmenuClose").show();
    }
  })
$(document).ready(function(){
  console.log("ready");
})
