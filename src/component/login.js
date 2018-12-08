import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../store/action/authActions";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.login(this.state)
    console.log(this.state);
  };
  render() {
    return (
      <div style={{width: '90%', margin: 'auto'}}>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="col-form-label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label className="col-form-label">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}


const mapStateToProps = state => {
  console.log(state);
  return {
    isLogin: state.auth.isLogin
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: data => dispatch(login(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
