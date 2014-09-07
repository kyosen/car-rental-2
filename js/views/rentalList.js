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

    var formData = {};

    $('#addRental div').children('input').each(function (i, el) {
      if ($(el).val() != '') {
        switch (el.id) {
          case 'carId':
            formData[el.id] = parseInt($(el).val());
            break;
          default:
            formData[el.id] = $(el).val();
            break;
        }
      }
    });

    var rental = new app.Rental(formData);

    var carList = new app.CarList();
    carList.fetch();
    rental.set('car', carList.findWhere({carId: formData['carId']}));

    this.collection.create(rental);
  }
});
