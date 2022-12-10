import { useMediaQuery } from "react-responsive";
import { Container, Col, Form, Button } from "react-bootstrap";
import "./signuppagecontent.css";
import axios from "axios";
import react, { useState } from "react";


function SignupPageContent() {

  const [firstname, setFirstName] = useState(null);
  const [lastname, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [conpassword, setConPassword] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "firstname") {
      setFirstName(value);
    }
    if (id === "lastname") {
      setLastName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "conpassword") {
      setConPassword(value);
    }
  }

  const data = {firstname:firstname, lastname:lastname, email:email, password:password, conpassword:conpassword};

  const handleSubmit  = () => {
    console.log(firstname,lastname,email,password,conpassword);

    axios.post(`http://localhost:9010/signup`,JSON.stringify(data),{firstname, lastname, email, password, conpassword})
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  const isSmall = useMediaQuery({ query: "(max-width: 576px)" });
  if (isSmall) {
    return (
      <>
        {/* <img
            className="imgwidth-mob"
            src="logo192.png"
            width="40"
            height="40"
          ></img> */}
      </>
    );
  } else { 
    return (
      <>
        <img className="d-block mx-auto signupimgWidth" src="logo192.png"></img>
        <h1 className="d-flex justify-content-center">Create Account</h1>
        <Col className="d-flex justify-content-center ">
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control value={firstname} onChange={(e) => handleInputChange(e)} id="firstname" type="text" placeholder="First Name" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control value={lastname} onChange={(e) => handleInputChange(e)} id="lastname" type="text" placeholder="Last Name" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control value={email} onChange={(e) => handleInputChange(e)} id="email" type="email" placeholder="Enter email" />
              <Form.Text>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>Create Password</Form.Label>
              <Form.Control value={password} onChange={(e) => handleInputChange(e)} id="password" type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control value={conpassword} onChange={(e) => handleInputChange(e)} id="conpassword" placeholder="Password" />
            </Form.Group>
            <Button className="createacc" type="submit">
              Create Account
            </Button>
          </Form>
        </Col>
      </>
    );
  }
}

export default SignupPageContent;
