class todito.Views.Todo extends Backbone.View

  tagName: 'li'

  template: Handlebars.compile $('#todo-template').html()

  events:
    'change input': 'toggleCompleted'

  initialize: () ->
    @.toggleClass()
    @model.on 'change:completed', @.toggleClass

  toggleCompleted: () ->
    @model.set 'completed', !@model.get('completed')
    @model.save()

  toggleClass: () =>
    @$el.toggleClass 'completed', @model.get('completed')

    
  render: () ->
    @$el.html(@template(@model.attributes))
    @

