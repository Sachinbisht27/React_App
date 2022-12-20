import "../Footer/footer.css";
import "../Navbar/navbar.css";
import { useMediaQuery } from "react-responsive";
import { Container, Col, Form, Button } from "react-bootstrap";
import "./loginpagecontent.css";
import axios from "axios";
import react, { useState } from "react";

function LoginPageContent() {
  const [username, setUserName] = useState(null);
  const [password, setPassword] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "username") {
      setUserName(value);
    }
    if (id === "password") {
      setPassword(value);
    }
  };

  const data = { username: username, password: password };

  const handleSubmit = () => {
    console.log(username, password);

    axios
      .post(`http://localhost:9010/login`, JSON.stringify(data), {
        username: username,
        password: password,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  const isSmall = useMediaQuery({ query: "(max-width: 576px)" });
  if (isSmall) {
    return (
      <>
        <Container>
          <img
            className="imgwidth-mob"
            src="logo192.png"
            width="40"
            height="40"
          ></img>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password-mob" placeholder="Password" />
            </Form.Group>
            <Form.Group className="checkbox-mob" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button className="signup-mob" type="submit">
              Sign Up
            </Button>
          </Form>
        </Container>
      </>
    );
  } else {
    return (
      <>
        <img className="d-block mx-auto imgWidth" src="logo192.png"></img>
        <Col className="d-flex justify-content-center ">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                value={username}
                onChange={(e) => handleInputChange(e)}
                id="username"
                type="text"
                placeholder="Enter email"
              />
              <Form.Text>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group>
              <Form.Label>Create Password</Form.Label>
              <Form.Control
                value={password}
                onChange={(e) => handleInputChange(e)}
                id="password"
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button className="signup" type="submit">
              Log In
            </Button>
          </Form>
        </Col>
      </>
    );
  }
}
export default LoginPageContent;
