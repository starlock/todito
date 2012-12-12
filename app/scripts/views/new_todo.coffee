class todito.Views.NewTodo extends Backbone.View

  el: '#new-todo'

  events:
    'click button': 'addTodo'

  addTodo: () ->
    todito.todos.create
      title: @$('input').val()

    @$('input').val ''

    
