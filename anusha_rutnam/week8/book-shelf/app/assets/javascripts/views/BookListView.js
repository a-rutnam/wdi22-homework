var app = app||{};

app.BookListView = Backbone.View.extend({
  // bb magic:
  tagName: "li",

  events:{
    "click": "showBook"
  },

  showBook: function(){
    var id = this.model.get('id');
    console.log("clicked id: ", id);
    app.router.navigate("/books/"+id,true);
  },

  render: function(){
    var title = this.model.get("title");
    this.$el.html(title);


    this.$el.appendTo("#books");



  }
});
