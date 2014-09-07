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
    this.$el.append(carView.render().el);
    this.listenTo(carView, 'selectCar', this.selectCar);
  },

  events: {
    'click #add': 'addCar'
  },

  addCar: function (e) {
    e.preventDefault();

    var formData = {};

    $('#addCar div').children('input').each(function (i, el) {
      if ($(el).val() != '') {
        switch (el.id) {
          case 'capacity':
          case 'feePerDay':
            formData[el.id] = parseInt($(el).val());
            break;
          default:
            formData[el.id] = $(el).val();
            break;
        }
      }
    });

    var car = new app.Car(formData);
    car.set('carId', this.collection.nextCarId());

    this.collection.create(car);
  },

  selectCar: function (car) {
    this.trigger('selectCar', car);
  }
});
