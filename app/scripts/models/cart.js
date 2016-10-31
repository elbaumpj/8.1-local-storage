var Backbone = require('backbone');

var Cart = Backbone.Model.extend({
  idAttribute: '_id'
});

var CartCollection = Backbone.Collection.extend({
  model: Cart,
  // url: 'https://tiny-lasagna-server.herokuapp.com/collections/petershirtshop'
});


module.exports = {
  Cart: Cart,
  CartCollection: CartCollection
};
