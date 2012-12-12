class todito.Collections.Todos extends Backbone.Collection
 model: todito.Models.Todo

 localStorage: new Store "todito-todos"

