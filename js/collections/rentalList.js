var app = app || {};

// レンタルリスト

app.RentalList = Backbone.Collection.extend({
  model: app.Rental,
  localStorage: new Backbone.LocalStorage('rentals-backbone'),

  nextRentalId: function () {
    if (!this.length) {
      return 1;
    }
    return this.last().get('rentalId') + 1;
  },

  comparator: function (rental) {
    return rental.get('rentalId');
  }
});
