var app = app || {};

// Carモデル

app.Car = Backbone.Model.extend({
  defaults: {
    car_type: '',
    capacity: 0,
    fee_per_day: 0
  }
});
