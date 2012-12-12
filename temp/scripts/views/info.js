(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  todito.Views.Info = (function(_super) {

    __extends(Info, _super);

    function Info() {
      this.render = __bind(this.render, this);
      return Info.__super__.constructor.apply(this, arguments);
    }

    Info.prototype.tagName = 'span';

    Info.prototype.className = 'remaining';

    Info.prototype.template = Handlebars.compile($('#info-template').html());

    Info.prototype.initialize = function() {
      this.render();
      return todito.todos.on('add remove change', this.render);
    };

    Info.prototype.render = function() {
      $('#status').prepend(this.$el.html(this.template(todito.todos.getRemainingCount())));
      return this;
    };

    return Info;

  })(Backbone.View);

}).call(this);
