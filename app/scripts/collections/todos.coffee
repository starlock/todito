class todito.Collections.Todos extends Backbone.Collection
 model: todito.Models.Todo

 localStorage: new Store "todito-todos"

 initialize: () ->
   @.fetch()
   console.log @length + " models in the collection"
