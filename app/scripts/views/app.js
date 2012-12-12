todito.Views.App = Backbone.View.extend({

  el: '#todito',
  
  events: {
    'click .markAllAsRead': 'markAllAsRead'
  },

  initialize: function() {
    new todito.Views.NewTodo();
  },

  markAllAsRead: function(event) {
    event.preventDefault();
    console.log('markAllAsRead');
  }

});

