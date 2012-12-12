class todito.Views.Todo extends Backbone.View

  tagName: 'li'

  template: Handlebars.compile $('#todo-template').html()

  events:
    'change input': 'toggleCompleted'

  toggleCompleted: () ->
    console.log @tagName
    
  render: () ->
    @$el.html(@template(@model.attributes))
    @

