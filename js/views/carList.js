var app = app || {};

app.CarListView = Backbone.View.extend({
  el: '#cars',

  initialize: function (initialCars) {
    this.collection = new app.CarList(initialCars);
    this.render();
  },

  render: function () {
    this.collection.each(function (item) {
      this.renderCar(item);
    }, this);
  },

  renderCar: function (item) {
    var carView = new app.CarView({
      model: item
    });
    this.$el.append(carView.render().el);
  }
});
