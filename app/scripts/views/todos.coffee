class todito.Views.Todos extends Backbone.View
  el: '#todos'

  initialize: () ->
    @.addTodo(todo) for todo in todito.todos.models

    todito.todos.on 'add', (todo) =>
      @.addTodo todo

  addTodo: (todo) ->
    @$el.prepend(new todito.Views.Todo({model: todo}).render().el)

