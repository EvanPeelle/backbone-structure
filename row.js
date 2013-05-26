
//Row
var Row = Backbone.Model.extend({

  initialize: function() {
    this.set('column', 0);

});

//Rows
var Table = Backbone.Collection.extend({
  model: Row
});

var TableView =Backbone.View.extend({
  tagName: 'table',
}):
var RowView = Backbone.View.extend({
  tagName: 'tr',

}):

//entry view
var SongQueuentryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= 0 %>)</td><td><%= 1 %></td>'),

  events: {
    'click': function() {
      this.model.dequeue();
    }
  },

  render: function(){//gets returned on line 53. 
    return this.$el.html(this.template(this.model.attributes.inputData));
  }

});

// view
var SongQueueView = Backbone.View.extend({
  initialize: function() {
    this.collection.on('add',function() {
      this.render();
    },this);
    this.collection.on('remove',function() {
      this.render();
    },this);
  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    return this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song){
        return new RowView({model: row/could }).render();
      })
    );
  }
});















