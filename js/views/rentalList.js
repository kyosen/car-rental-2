var app = app || {};

app.RentalListView = Backbone.View.extend({
  el: '#rentals',

  initialize: function () {
    this.collection = new app.RentalList();
    this.collection.fetch();
    this.render();
    this.listenTo(this.collection, 'add', this.renderRental);
  },

  render: function () {
    this.collection.each(function (item) {
      this.renderRental(item);
    }, this);
  },

  renderRental: function (item) {
    var rentalView = new app.RentalView({
      model: item
    });
    this.$el.append(rentalView.render().el);
  },

  events: {
    'click #rentalAdd': 'addRental'
  },

  addRental: function (e) {
    e.preventDefault();

    var rental = new app.Rental();
    rental.set('fromDate', $('input#fromDate').val());
    rental.set('toDate', $('input#toDate').val());
    rental.set('carId', parseInt($('input#carId').val()));
    rental.set('customer', $('input#customer').val());
    rental.set('telephone', $('input#telephone').val());

    this.trigger('rentalCar', rental);
  },

  selectCar: function (car) {
    $('input#carId').val(car.get('carId'));
    $('input#rentalCarType').val(car.get('carType'));
    $('input#rentalCapacity').val(car.get('capacity'));
    $('input#rentalFeePerDay').val(car.get('feePerDay'));
  }
});
