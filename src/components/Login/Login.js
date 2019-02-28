import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange(prop, val) {
    this.setState({
      [prop]: val
    });
  }

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <input
          value={username}
          onChange={e => this.handleChange("username", e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={e => this.handleChange("password", e.target.value)}
        />
      </div>
    );
  }
}

export default Login;
