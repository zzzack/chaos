$(document).ready(function(){
  $("#a").change(function(){
    if($('#a').val()==0){
            $('#inputdiv').show();
    $('#selectdiv').hide();
    };
  });
   $("#imlink").click(function(){
    $('#inputdiv').hide();
    $('#selectdiv').show();
  });
  
});