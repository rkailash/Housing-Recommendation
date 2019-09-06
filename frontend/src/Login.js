import React, { Component } from "react";
import { Popover, PopoverHeader, PopoverBody } from "reactstrap";
import { Redirect, Link } from "react-router-dom";
import "./styles/login.scss";
import Header from "./Header";
class Login extends Component {
  state = {
    account: { email: "", password: "" },
    authFlag: false,
    signUpFlag: false,
    showEmailError: false,
    showLoginError: true
  };
  validateEmail = email => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };
  handleChange = e => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };
  handleSignUp = e => {
    e.preventDefault();
    this.setState({ signUpFlag: true });
  };
  render() {
    const { account, userInfo, showEmailError } = this.state;
    if (this.state.signUpFlag) return <Redirect to="/Register" />;
    return (
      <div className="login">
        <Header />
        <h2></h2>
        <p>
          Need an account?{" "}
          <Link to="/Register" onClick={this.handleSignUp}>
            Sign Up
          </Link>
        </p>
        <form onSubmit={this.handleSubmit}>
          <h3>Owner Login</h3>
          <div>
            <input
              autoFocus
              tabIndex={1}
              type="email"
              name="email"
              placeholder="Email address"
              value={account.email}
              onChange={this.handleChange}
              onFocus={() => this.setState({ showEmailError: false })}
              id="Popover1"
            />
            <Popover
              placement="right"
              isOpen={this.state.showEmailError}
              target="Popover1"
            >
              <PopoverHeader>Error</PopoverHeader>
              <PopoverBody>Invalid email address.</PopoverBody>
            </Popover>
          </div>
          <input
            tabIndex={2}
            type="password"
            name="password"
            placeholder="Password"
            value={account.password}
            onChange={this.handleChange}
          />
          <button
            tabIndex={3}
            type="button"
            className="btn-login"
            name="login"
            onClick={this.handleSubmit}
          >
            Log in
          </button>
          {this.state.showLoginError && <small className="my-error"></small>}
        </form>
      </div>
    );
  }
}

export default Login;
