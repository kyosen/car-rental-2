var app = app || {};

// レンタルモデル

app.Rental = Backbone.Model.extend({
  defaults: {
    fromDate: null,
    toDate: null,
    carId: null,
    car: null,
    customer: '',
    telephone: ''
  }
});
