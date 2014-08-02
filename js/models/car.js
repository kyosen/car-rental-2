var app = app || {};

// Carモデル

app.Car = Backbone.Model.extend({
  defaults: {
    carType: '',
    capacity: 0,
    feePerDay: 0
  }
});
