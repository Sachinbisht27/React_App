import {Button, Col, Container, Form} from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive'

function HomePage() {
    const isSmall = useMediaQuery({ query: '(max-width: 576px)' })
    if (isSmall) {
        return (
            <Container className="top-mob">
                <h1>Hire India's Top Remote Talent</h1>
                <p className='p-mob'>A hiring platform that helps remote-first companies hire 10X faster &more efficiently.</p>
                <p className='p-mob'>A network of 50,000+ talents, pre-vetted against their technical capabilities,language proficiency and behavioral skills.</p>
            </Container>
        );
    } else {
        return (
            <>
                <img className="d-block mx-auto imgWidth" src="logo192.png"></img>
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

export default HomePage ;
