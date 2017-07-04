var app = app||{};
//this is like the rails route.rb file
app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'books': 'index',
    'show/:id': 'showBook'
  },
  //like the rail's controller actions
  index: function(){
    // render an Appview
    console.log('index action started');
    var av = new app.AppView({
      collection: app.books
    });
    av.render();
  },
  showBook: function(id){
    console.log('navigated to showBook() route handler');
//find the book by id

    var book = app.books.get(id);

    var pv = new app.BookView({
      model: book
    });
    pv.render();
  }

});
