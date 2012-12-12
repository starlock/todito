todito.Views.App = Backbone.View.extend({

  el: '#todito',

  events: {
    'click .markAllAsRead': 'markAllAsRead'
  },

  initialize: function() {
    new todito.Views.NewTodo();
    new todito.Views.Info();
  },

  markAllAsRead: function(event) {
    event.preventDefault();


    todito.todos.each(function(todo) {
      todo.set('completed', true);
      todo.save();
    });
  }

});

