var app = app || {}; //ensures that app always has something in it
//app.Post to group the code together as 'app' - seals off from global scope
app.Book = Backbone.Model.extend({
  //tell model how to connect with the backend
  urlRoot: "/books",
  defaults: {
    author: 'Anon',
    title: 'Untitled',
    plot: '...'
  },
  initialize: function() {
    console.log('New model initiated');
  }
});
