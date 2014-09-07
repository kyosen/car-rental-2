var app = app || {};

app.AppView = Backbone.View.extend({
  initialize: function () {
    this.carListView = new app.CarListView();
    this.rentalListView = new app.RentalListView();

    this.listenTo(this.carListView, 'selectCar', this.selectCar);
  },

  selectCar: function (car) {
    this.rentalListView.selectCar(car);
  }
});
