class todito.Views.Todo extends Backbone.View

  tagName: 'li'

  template: Handlebars.compile $('#todo-template').html()

  events:
    'change input': 'toggleCompleted'

  initialize: () ->
    @.toggleState()
    @model.on 'change:completed', @.toggleState

  toggleCompleted: () ->
    @model.set 'completed', !@model.get('completed')
    @model.save()

  toggleState: () =>
    @$el.toggleClass 'completed', @model.get('completed')
    @$('input').attr 'checked', @model.get 'completed'

    
  render: () ->
    @$el.html(@template(@model.attributes))
    @

