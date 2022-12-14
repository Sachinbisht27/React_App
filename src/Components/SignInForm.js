import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Form, NavDropdown, Navbar, Nav, Button} from "react-bootstrap";
import axios from "axios";

class SignInForm extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
    axios.post(`http://localhost:9010/login`,JSON.stringify(this.state),this.state)
    .then(res => {
      console.log(res);
      console.log(res.this.state);
    })

    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }

  render() {
    return (
      <div className="formCenter">
        <form className="formFields" onSubmit={this.handleSubmit}>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="username"
              className="formFieldInput"
              placeholder="Enter your email"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>

          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Enter your password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <div className="formField">
            <button className="formFieldButton">Sign In</button>{" "}
            <Nav.Link href="/" className="formFieldLink">
              Create an account
            </Nav.Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignInForm;
