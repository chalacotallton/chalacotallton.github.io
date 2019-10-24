function mobilenavbar() {
  $("#mobilenavbar").show();
}
function outsideclick() {
  $(document).click(function(e) {
    if(e.target.id != "mobilenavbar" && e.target.id != "ddmenu") {
      $("#mobilenavbar").hide(600);
    }
  })
}
