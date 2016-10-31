var $ = require('jquery');
var React = require('react');

//local

//components


var LoginComponent = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();

    var username = $('.username-form').val();
    localStorage.setItem('username', JSON.stringify(username));

    var router = this.props.router;
    router.navigate('shop/', {trigger: true});
  },
  render: function(){
    return(
      <form onSubmit={this.handleSubmit}>
       <div className="form-group col-md-6">
         <label htmlFor="username">Username</label>
         <input type="text" className="form-control username-form" id="username" placeholder="Enter your username"/>
         <button type="submit" className="btn btn-success">Login</button>
       </div>
     </form>
    );
  }
});

module.exports = {
  LoginComponent: LoginComponent
}
