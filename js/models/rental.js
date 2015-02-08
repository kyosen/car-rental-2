var app = app || {};

// レンタルモデル

app.Rental = Backbone.Model.extend({
  defaults: {
    rentalId: 0,
    fromDate: null,
    toDate: null,
    carId: null,
    car: null,
    customer: '',
    telephone: ''
  }
});
