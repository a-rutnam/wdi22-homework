var app = app||{};

_.templateSettings = {
     evaluate : /\{\[([\s\S]+?)\]\}/g,
     interpolate : /\{\{([\s\S]+?)\}\}/g
};

app.books = new app.Books();

app.router = new app.AppRouter();

$(document).ready(function(){
  //once the dom is loaded, fetch the posts from the rails ajax backend
  app.books.fetch().done(function(){
    // when the fetch() ajax request is finished, we're ready to start the app
    Backbone.history.start();
  });

});
