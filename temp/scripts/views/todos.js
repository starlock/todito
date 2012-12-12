(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  todito.Views.Todos = (function(_super) {

    __extends(Todos, _super);

    function Todos() {
      return Todos.__super__.constructor.apply(this, arguments);
    }

    Todos.prototype.el = '#todos';

    Todos.prototype.initialize = function() {
      var _this = this;
      return todito.todos.on('add', function(todo) {
        console.log('adding');
        return _this.addTodo(todo);
      });
    };

    Todos.prototype.addTodo = function(todo) {
      return this.$el.prepend(new todito.Views.Todo({
        model: todo
      }).render().el);
    };

    return Todos;

  })(Backbone.View);

}).call(this);
