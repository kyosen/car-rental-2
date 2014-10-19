var app = app || {};

app.AppView = Backbone.View.extend({
  initialize: function () {
    this.carListView = new app.CarListView();
    this.rentalListView = new app.RentalListView();

    this.listenTo(this.carListView, 'selectCar', this.selectCar);
    this.listenTo(this.rentalListView, 'rentalCar', this.rentalCar);
  },

  selectCar: function (car) {
    this.rentalListView.selectCar(car);
  },

  rentalCar: function (rental) {
    var car = this.carListView.collection.findWhere({carId: rental.get('carId')});
    rental.set('car', car);
    this.rentalListView.collection.create(rental);
  }
});
