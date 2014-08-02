var app = app || {};

$(function () {
  var cars = [
    { carType: 'hoge', capacity: 5, feePerDay: 1000 },
    { carType: 'foobar', capacity: 3, feePerDay: 2000 }
  ];
  new app.CarListView(cars);
});
