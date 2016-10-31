var $ = require('jquery');
var React = require('react');
//local

//components

var CatalogComponent = React.createClass({
  navCatalog: function(){
    console.log('going to catalog');
    var router = this.props.router;
    router.navigate('shop/', {trigger: true});
  },
  navCart: function(){
    console.log('going to cart');
    var router = this.props.router;
    router.navigate('cart/', {trigger: true});
  },
  addToCart: function(){
    // var $this = $(this);
    var name = $(this).h4.text();
    var size = $(this).input.val();
    localStorage.setItem('name', JSON.stringify(name));
    localStorage.setItem('size', JSON.stringify(size));
  },
  render: function(){
    var username = localStorage.getItem("username");
    return(

  <div>

    <nav>
      <h4>Classy Hound</h4>
      <h5>Hello, {username}</h5>
      <span className="nav-spans" onClick={this.navCatalog}>T-Shirts</span>
      <span className="nav-spans" onClick={this.navCart}>Cart</span>
    </nav>


    <div className="card col-md-4">
      <div className="card-block">
        <h4 className="card-title">Red T-Shirt</h4>
        <h6 className="card-subtitle text-muted">Support card subtitle</h6>
      </div>
      <img src="https://unsplash.it/200/200" alt="Card image"/>
      <div className="card-block">
        <p className="card-text">A great t-shirt made to equip the outdoors-lover</p>
        <input type="text" className="form-control" placeholder="Select your size"/>
        <a href="#" onClick={this.addToCart} className="btn btn-primary">Add to cart</a>
      </div>
    </div>

    <div className="card col-md-4">
      <div className="card-block">
        <h4 className="card-title">Black T-Shirt</h4>
        <h6 className="card-subtitle text-muted">Support card subtitle</h6>
      </div>
      <img src="https://unsplash.it/200/200" alt="Card image"/>
      <div className="card-block">
        <p className="card-text">A great t-shirt made to equip the outdoors-lover</p>
        <input type="text" className="form-control" placeholder="Select your size"/>
        <a href="#" className="btn btn-primary">Add to cart</a>
      </div>
    </div>

    <div className="card col-md-4">
      <div className="card-block">
        <h4 className="card-title">Green T-Shirt</h4>
        <h6 className="card-subtitle text-muted">Support card subtitle</h6>
      </div>
      <img src="https://unsplash.it/200/200" alt="Card image"/>
      <div className="card-block">
        <p className="card-text">A great t-shirt made to equip the outdoors-lover</p>
        <input type="text" className="form-control" placeholder="Select your size"/>
        <a href="#" className="btn btn-primary">Add to cart</a>
      </div>
    </div>
  </div>
    );
  }
});


module.exports = {
  CatalogComponent: CatalogComponent
}
