var app = app || {};

// Carモデル

app.Car = Backbone.Model.extend({
  defaults: {
    carId: 0,
    carType: '',
    capacity: 0,
    feePerDay: 0
  }
});
