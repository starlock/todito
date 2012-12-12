(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  todito.Views.NewTodo = (function(_super) {

    __extends(NewTodo, _super);

    function NewTodo() {
      return NewTodo.__super__.constructor.apply(this, arguments);
    }

    NewTodo.prototype.el = '#new-todo';

    NewTodo.prototype.events = {
      'click button': 'addTodo'
    };

    NewTodo.prototype.addTodo = function() {
      todito.todos.create({
        title: this.$('input').val()
      });
      return this.$('input').val('');
    };

    return NewTodo;

  })(Backbone.View);

}).call(this);
