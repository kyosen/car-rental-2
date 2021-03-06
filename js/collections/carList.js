var app = app || {};

// Carコレクション

app.CarList = Backbone.Collection.extend({
  model: app.Car,
  localStorage: new Backbone.LocalStorage('cars-backbone'),

  nextCarId: function () {
    if (!this.length) {
      return 1;
    }
    return this.last().get('carId') + 1;
  },

  comparator: function (car) {
    return car.get('carId');
  }
});
