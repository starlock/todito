class todito.Views.Todos extends Backbone.View
  el: '#todos'

  initialize: () ->
    todito.todos.on 'add', (todo) =>
      console.log 'adding'
      @.addTodo todo

  addTodo: (todo) ->
    @$el.prepend(new todito.Views.Todo({model: todo}).render().el)

