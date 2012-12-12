(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  todito.Collections.Todos = (function(_super) {

    __extends(Todos, _super);

    function Todos() {
      return Todos.__super__.constructor.apply(this, arguments);
    }

    Todos.prototype.model = todito.Models.Todo;

    Todos.prototype.localStorage = new Store("todito-todos");

    Todos.prototype.initialize = function() {
      this.fetch();
      return console.log(this.length + " models in the collection");
    };

    return Todos;

  })(Backbone.Collection);

}).call(this);
