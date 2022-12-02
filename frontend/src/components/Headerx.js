import { Navbar, Nav, Container, NavDropdown, Badge, Form,
        Dropdown, DropdownButton, Button, InputGroup } from "react-bootstrap";

import { LinkContainer } from 'react-router-bootstrap';

const HeaderComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
  
        <Navbar.Brand href="/">The Best Online Shop</Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

            <InputGroup>
                      <DropdownButton id="dropdown-basic-button" title="All">
                          <Dropdown.Item href="#/action-1">Phones</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Computers</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Speakers</Dropdown.Item>
                      </DropdownButton>

                        <Form.Control type="text" placeholder="Search..."/>
                        <Button variant="warning">
                            <i className="bi bi-search"></i>
                            </Button>{' '}
            </InputGroup>
            </Nav>
            <Nav>
            <Nav.Link href="/admin/orders">Admin</Nav.Link>
      
            <NavDropdown title="John Doe" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/user/my-orders">My Orders</NavDropdown.Item>
              <NavDropdown.Item href="/user">My Profile</NavDropdown.Item>
              <NavDropdown.Item href="/">Logout</NavDropdown.Item>

            </NavDropdown>
            <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/register">Register</Nav.Link>
              <Nav.Link href="#pricing">
                <Badge pill bg="danger">
                    2
                </Badge>
                <i className="bi bi-cart-dash"></i>
                {/* <Nav.Link className="ms-2" href="/cart">Cart</Nav.Link> */}
                <span className="ms-2">Cart</span>
                </Nav.Link>
            
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderComponent;
