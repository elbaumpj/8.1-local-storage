var React = require('react');

//local

//components


var LoginComponent = React.createClass({
  handleUserName: function(e){
    console.log("username stored");
    var username = e.target.value;

    localStorage.setItem('username', JSON.stringify(username));
  },
  handleSubmit: function(e){
    e.preventDefault();

    var router = this.props.router;
    router.navigate('shop/', {trigger: true});
  },
  render: function(){
    return(
      <form onSubmit={this.handleSubmit}>
       <div className="form-group col-md-6">
         <label htmlFor="username">Username</label>
         <input onChange={this.handleUserName} type="text" className="form-control" id="username" placeholder="Enter your username"/>
         <button type="submit" className="btn btn-success">Login</button>
       </div>
     </form>
    );
  }
});

module.exports = {
  LoginComponent: LoginComponent
}
