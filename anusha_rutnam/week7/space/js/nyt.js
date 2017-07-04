//http://api.nytimes.com/svc/search/v2/articlesearch.json?fq=romney&api-key=b351bb5f391c4c9a8992f3b07bcf6bde

// &fl=web_url makes only field response the url


$(document).ready(function(){

console.log("ready");

    var baseURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json";
    //?key=YOURAPIKEY

    $.ajax({
      url: baseURL,
      data: {
        api_key: "b351bb5f391c4c9a8992f3b07bcf6bde",
        fq: "Trump",
        field: "persons",
        // persons: "donald trump",
        // sort: "oldest",
        begin_date: 19800101,
        end_date: 19900101,
        facet_field: "day_of_week"
      }
    })//ajax

    .done(function(res){

console.log(res);
      for (var i = 0; i < res.response.docs.length; i++) {


        for (var j = 0; j < res.response.docs[j].keywords.length; j++){
          if (res.response.docs[i].keywords[j].name == "persons"){
            console.log(res.response.docs[i].keywords[j].value);
          }
        }


        var $div = $('<div class="lead">').html(res.response.docs[i].lead_paragraph);



        $('#main').append("<ul>", "<li>", $div, "</li>");

                //
                // if (res.response.docs[i].keywords.name == "persons"){
                //   console.log(res.response.docs[i].keywords.value);
                // }




      }


    })//done



    .fail(function(xhr, status, err){
      console.log(xhr, status, err);
    })//fail



}); //doc ready
