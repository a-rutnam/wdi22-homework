$(document).ready(function(){

  console.log("ready");


  $.ajax({
    url: "http://api.open-notify.org/astros.json",
    method: "GET",
    dataType: "JSONP"
  })

  .done(function (res) {


    for (var i = 0; i < res.people.length; i++) {

      var $div = $('<div class="name">').html(res.people[i].name);

      $('#main').append($div);


    }

  });



}); //doc ready
