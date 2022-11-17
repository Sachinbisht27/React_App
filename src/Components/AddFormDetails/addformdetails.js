import "../Footer/footer.css";
import "../Navbar/navbar.css";
import { useMediaQuery } from "react-responsive";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container , Col} from "react-bootstrap";
import "../AddFormDetails/addformdetails.css";

function AddformDetails() {
  const isSmall = useMediaQuery({ query: "(max-width: 576px)" });
  if (isSmall) {
    return (
      <>
        <Container>
        <img  className="imgwidth-mob" src="logo192.png" width="40" height="40"></img>
          <Form>
            <Form.Group  controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control  type="email" placeholder="Enter email" />
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
        <img  className="d-block mx-auto imgwidth" src="logo192.png"></img>
        <Col className="d-flex justify-content-center ">
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
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button className="signup" type="submit">
              Sign Up
            </Button>
          </Form>
        </Col>
      </>
    );
  }
}
export default AddformDetails;
