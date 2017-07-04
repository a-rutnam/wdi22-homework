var app = app||{};
//this is like the rails route.rb file
app.AppView = Backbone.View.extend({
  el: "#app",

  render: function(){
    // this.$el.html("<h1>AppView rendered. You rule at Backbone.</h1>");
    var template = $("#AppViewTemplate").html();
    this.$el.html(template);

    this.collection.each(function(book){

      //show each post in the appview's collection by getting postlistview to render each individually
      var plv = new app.BookListView({
        //by doing the following, we can do this.model.get in PostListView.js
        model: book
      });
      plv.render();

    });//each()




  }
});
