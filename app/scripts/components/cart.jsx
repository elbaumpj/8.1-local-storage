var React = require('react');

//local

//components

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
    var username = localStorage.getItem("username");
    return(
      <div>
        <nav>
          <h4>Classy Hound</h4>
          <h5>Hello, {username}</h5>
          <span className="nav-spans" onClick={this.navCatalog}>T-Shirts</span>
          <span className="nav-spans" onClick={this.navCart}>Cart</span>
        </nav>

        <table className="table">
          <thead>
            <tr>
        <th>#</th>
        <th>Shirt</th>
        <th>Size</th>
        <th>Deal Expires</th>
            </tr>
          </thead>
          <tbody>
            <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
            </tr>
            <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
            </tr>
            <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
});


module.exports = {
  CartComponent: CartComponent
}
