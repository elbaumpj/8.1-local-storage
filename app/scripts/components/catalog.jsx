var React = require('react');
var Backbone = require('backbone');
//local
var shirtModels = require('../models/catalog');
//components

var ShirtListing = React.createClass({
  render: function(){
    var self = this;
    var productListing = this.props.shirts.map(function(item){
      return (
        <div key={item.cid} className="card col-md-4">
          <div className="card-block">
            <h4 className="card-title">{item.get('title')}</h4>
          </div>
          <img src={item.get('image')} alt="Card image"/>
        <div className="card-block">
          <p className="card-text">A great t-shirt made to equip the outdoors-lover</p>
          <input type="text" className="form-control" placeholder="Select your size"/>
          <a href="#" onClick={function(){self.props.addToCart(item)}}className="btn btn-primary">Add to cart</a>
        </div>
      </div>
      );
    });
    return(
      <div>
        {productListing}
      </div>
    );
  }
});

var CatalogComponent = React.createClass({
  getInitialState: function(){
    var shirts = new shirtModels.ShirtCollection();

    shirts.add([
      {
        "title": "Red Shirt",
        "image": 'https://unsplash.it/200/300'
      },
      {
        "title": "Green Shirt",
        "image": 'https://unsplash.it/200/300'
      },
      {
        "title": "Blue Shirt",
        "image": 'https://unsplash.it/200/300'
      }
    ]);
    return {
      shirts: shirts
    }
  },
  navCatalog: function(){
    var router = this.props.router;
    router.navigate('shop/', {trigger: true});
  },
  navCart: function(){
    var router = this.props.router;
    router.navigate('cart/', {trigger: true});
  },
  addToCart: function(item){
    localStorage.setItem('order', JSON.stringify(item));
  },
  render: function(){
    var username = localStorage.getItem('username');
    return(
      <div>
        <nav>
          <h4>Classy Hound</h4>
          <h5>Hello, {username}</h5>
          <span className="nav-spans" onClick={this.navCatalog}>T-Shirts</span>
          <span className="nav-spans" onClick={this.navCart}>Cart</span>
        </nav>
        <ShirtListing shirts={this.state.shirts} addToCart={this.addToCart} />
      </div>
    );
  }
});


module.exports = {
  CatalogComponent: CatalogComponent
}
