import { Container,Form ,NavDropdown, Navbar, Nav,  } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useMediaQuery } from 'react-responsive'
import "../Navbar/navbar.css";

function NavBar() {
  const isSmall = useMediaQuery({ query: '(max-width: 576px)' })
  if (isSmall) {
    return (
      <Navbar className="navbar-mob" expand="lg">
        <Container >
          <Navbar.Brand href="#"><img src="logo192.png" className="logo-mob"></img></Navbar.Brand>
            <Form className="d-flex align-mob ">
              <Form.Control className="searchArea-mob" type="search"placeholder="Search" aria-label="Search">
              </Form.Control>
              <button className='search-mob' ><FontAwesomeIcon icon={faSearch}/></button>
            </Form>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="navbarScroll-mob" >
                <Nav.Link href="#" className="home-mob">Home</Nav.Link>
                <Nav.Link href="#">Product</Nav.Link>
                <NavDropdown className="details-mob" title="Details" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#">INFO</NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    Sale
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#">
                    Profit
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#">
                  Add Product
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  } else {
    return (

      <>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="#"><img src="logo192.png" width="40" height="40"></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="navbarScroll" >
              <Nav.Link href="#" className="home nav-link nav-link-ltr">Home</Nav.Link>
              <Nav.Link href="#" className="nav-link nav-link-ltr">Product</Nav.Link>
              <NavDropdown className="details" title="Details" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#">INFO</NavDropdown.Item>
                <NavDropdown.Item href="#">
                   Sale
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">
                  Profit
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" className="nav-link nav-link-ltr">
                Add Product
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
            <Form className="d-flex ">
              <Form.Control className="searchArea" type="search"placeholder="Search" aria-label="Search">
              </Form.Control>
              <button className='search' ><FontAwesomeIcon icon={faSearch}/></button>
            </Form>
        </Container>
      </Navbar>
      </>
    );
  }
}
export default NavBar;
