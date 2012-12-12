(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  todito.Views.Todo = (function(_super) {

    __extends(Todo, _super);

    function Todo() {
      this.toggleState = __bind(this.toggleState, this);
      return Todo.__super__.constructor.apply(this, arguments);
    }

    Todo.prototype.tagName = 'li';

    Todo.prototype.template = Handlebars.compile($('#todo-template').html());

    Todo.prototype.events = {
      'change input': 'toggleCompleted'
    };

    Todo.prototype.initialize = function() {
      this.toggleState();
      return this.model.on('change:completed', this.toggleState);
    };

    Todo.prototype.toggleCompleted = function() {
      this.model.set('completed', !this.model.get('completed'));
      return this.model.save();
    };

    Todo.prototype.toggleState = function() {
      this.$el.toggleClass('completed', this.model.get('completed'));
      return this.$('input').attr('checked', this.model.get('completed'));
    };

    Todo.prototype.render = function() {
      this.$el.html(this.template(this.model.attributes));
      return this;
    };

    return Todo;

  })(Backbone.View);

}).call(this);
