var app = app || {};

app.Books = Backbone.Collection.extend({
  url: "/books",
  model: app.Book,

  initialize: function(){
    console.log('a new books collection was created.');
    this.on("add", function (book){
      var title = book.get('title');
      console.log('A new book:'+title+'... was created.');

    });
  }

});
