var app = app || {};

app.RentalView = Backbone.View.extend({
  tagName: 'div',
  className: 'rentalContainer',
  template: _.template($('#rentalTemplate').html()),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  events: {
    'click .delete': 'deleteRental'
  },

  deleteRental: function () {
    this.model.destroy();
    this.remove();
  }
});
