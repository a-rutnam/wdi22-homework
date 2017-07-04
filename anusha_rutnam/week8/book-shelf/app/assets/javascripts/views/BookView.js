var app = app||{};

app.BookView = Backbone.View.extend({
  el:"#app",
  render: function(){
    var rawTemplate = $("#BookViewTemplate").html();
    var template = _.template(rawTemplate);

    var markup = template(this.model.attributes);
//overwrite the top-level app container with the compiled post show template
    this.$el.html(markup);
  }
});
