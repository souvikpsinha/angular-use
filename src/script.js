/*You can add global script js to this file*/


function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
}

$(document).ready(function(){
    $('#search').keyup(function(){
      $('#result').html('');
      var searchField = $('#search').val();
      var expression = new RegExp(searchField, "i");
      $.getJSON('data.json', function(data){
        $.each(data, function(key, value){
          if(value.name.search(expression) != -1 || value.location.search(expression) != -1)
          {
            $("#result").append('<li class="list-group-item"><span class="text-muted"> '+value.name+'</span></li>')
          }
        });
      });

    });
  });