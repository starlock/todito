
window.todito = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function() {
    console.log('Hello from Backbone!');
    new todito.Views.App();
    todito.todos = new todito.Collections.Todos();
    new todito.Views.Todos();
    
  }
};

$(document).ready(function(){
  todito.init();
});

