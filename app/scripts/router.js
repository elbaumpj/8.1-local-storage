//3rd party imports
var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

//local imports
var LoginComponent = require('./components/login.jsx').LoginComponent;
var CatalogComponent = require('./components/catalog.jsx').CatalogComponent;
var CartComponent = require('./components/cart.jsx').CartComponent;
//router

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'shop/': 'shop',
    'cart/': 'cart'
  },
  index: function(){
    ReactDOM.render(
      React.createElement(LoginComponent, {router: this}),
      document.getElementById('app')
    );
  },
  shop: function(){
    ReactDOM.render(
      React.createElement(CatalogComponent, {router: this}),
      document.getElementById('app')
    );
  },
  cart: function(){
    ReactDOM.render(
      React.createElement(CartComponent, {router: this}),
      document.getElementById('app')
    );
  }
});

var router = new AppRouter();

module.exports = {
  router: router
};
