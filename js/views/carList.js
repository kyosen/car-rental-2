var app = app || {};

app.CarListView = Backbone.View.extend({
  el: '#cars',

  initialize: function () {
    this.collection = new app.CarList();
    this.collection.fetch();
    this.render();
    this.listenTo(this.collection, 'add', this.renderCar);
  },

  render: function () {
    this.collection.each(function (item) {
      this.renderCar(item);
    }, this);
  },

  renderCar: function (item) {
    var carView = new app.CarView({
      model: item
    });
    this.$el.find('#carList').append(carView.render().el);
    this.listenTo(carView, 'selectCar', this.selectCar);
  },

  events: {
    'click #add': 'addCar'
  },

  addCar: function (e) {
    e.preventDefault();

    var car = new app.Car();
    car.set('carId', this.collection.nextCarId());
    car.set('carType', $('input#carType').val());
    car.set('capacity', parseInt($('input#capacity').val()));
    car.set('feePerDay', parseInt($('input#feePerDay').val()));

    this.collection.create(car);
    $('#addCarDialog').modal('hide');
  },

  selectCar: function (car) {
    this.trigger('selectCar', car);
  }
});
