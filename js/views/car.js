var app = app || {};

app.CarView = Backbone.View.extend({
  tagName: 'div',
  className: 'carContainer',
  template: _.template($('#carTemplate').html()),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  events: {
    'click .delete': 'deleteCar',
    'click .rental': 'selectCar'
  },

  selectCar: function () {
    this.trigger('selectCar', this.model);
  },

  deleteCar: function () {
    this.model.destroy();
    this.remove();
  }
});
