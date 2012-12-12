class todito.Views.Info extends Backbone.View
  tagName: 'span'

  className: 'remaining'

  template: Handlebars.compile $('#info-template').html()

  initialize: () ->
    @.render()

    todito.todos.on 'add remove change', @.render

  render: () =>
    $('#status').prepend @$el.html(@template(todito.todos.getRemainingCount()))
    @
