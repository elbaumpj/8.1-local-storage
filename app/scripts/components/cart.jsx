var React = require('react');
var Backbone = require('backbone');
//local

//components

var OrderedItems = React.createClass({
  render: function(){
    var orders = JSON.parse(localStorage.getItem('order'));
    var orderArray = [];
    orderArray.push(orders);
    var orderListing = orderArray.map(function(order){
    var username = localStorage.getItem('username');
      return(
        <tr key={order.cid}>
    <td>{order.title}</td>
    <td>Otto</td>
    <td>@mdo</td>
        </tr>
      );
    });
    return(
      <div>

        <table className="table">
          <thead>
            <tr>
        <th>Shirt</th>
        <th>Size</th>
        <th>Quantity</th>
        <th>Deal Expires</th>
            </tr>
          </thead>
          <tbody>
            {orderListing}
          </tbody>
        </table>
      </div>
    );
  }
});

var CartComponent = React.createClass({
  navCatalog: function(){
    var router = this.props.router;
    router.navigate('shop/', {trigger: true});
  },
  navCart: function(){
    var router = this.props.router;
    router.navigate('cart/', {trigger: true});
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
        <OrderedItems />
      </div>
    );
  }
});


module.exports = {
  CartComponent: CartComponent
}
