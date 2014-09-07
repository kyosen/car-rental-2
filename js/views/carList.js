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
  },

  events: {
    'click #add': 'addCar'
  },

  addCar: function (e) {
    e.preventDefault();

    var formData = {};

    $('#addCar div').children('input').each(function (i, el) {
      if ($(el).val() != '') {
        formData[el.id] = $(el).val();
      }
    });
    formData['carId'] = this.collection.nextCarId();

    this.collection.create(new app.Car(formData));
  }
});
