// Js test function
$(document).ready(function(){
console.log($(window).width());
})
// CEP js
$(document).ready(function(){
  $("#cep").keyup(function() {
    var x = $(this).val().length;
    var i;
    var flag = false;
    for (i = 0; i < x; i++) {
      var input = $( "#cep" ); var str = input.val(); var res = str.charAt(i);
      if(res == '-') {
        flag = true;
      }
    }
    var input = $( "#cep" );
    if (x > 5 && !flag) {
      var input = $( "#cep" );
      var last = input.val().charAt(input.val().length-1);
      input.val(input.val().slice(0, -1) + "-" + last );
    }
  })
})
$(document).ready(function(){
  $("#cep2").keyup(function() {
    var x = $(this).val().length;
    var i;
    var flag = false;
    for (i = 0; i < x; i++) {
      var input = $( "#cep2" ); var str = input.val(); var res = str.charAt(i);
      if(res == '-') {
        flag = true;
      }
    }
    var input = $( "#cep2" );
    if (x > 5 && !flag) {
      var input = $( "#cep2" );
      var last = input.val().charAt(input.val().length-1);
      input.val(input.val().slice(0, -1) + "-" + last );
    }
  })
})
