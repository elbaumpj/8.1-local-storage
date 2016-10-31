var Backbone = require('backbone');

var Shirt = Backbone.Model.extend({
  idAttribute: '_id'
});

var ShirtCollection = Backbone.Collection.extend({
  model: Shirt,
  // url: 'https://tiny-lasagna-server.herokuapp.com/collections/petershirtshop'
});


module.exports = {
  Shirt: Shirt,
  ShirtCollection: ShirtCollection
};
