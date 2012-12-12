class todito.Views.NewTodo extends Backbone.View

  el: '#new-todo'

  events:
    'submit': 'addTodo'

  addTodo: (event) ->
    event.preventDefault()

    todito.todos.create
      title: @$('input').val()

    @$('input').val ''

    
