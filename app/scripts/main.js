
window.todito = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function() {
    console.log('Hello from Backbone!');
    todito.todos = new todito.Collections.Todos();
    new todito.Views.App();
    new todito.Views.Todos();
    
  }
};

$(document).ready(function(){
  todito.init();
});

