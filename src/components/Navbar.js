import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
const Navbarr = () => {
  return (
    <>
      <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
          <Container>
              <Navbar.Toggle aria-controls='responsive-navbar-nav' />
              <Navbar.Collapse id='responsive-navbar-nav'>
                  <Nav>
                      <Nav.Link href='/'>Animex</Nav.Link>
                      <Nav.Link href='/QuotesAnimeName'>Search Quotes</Nav.Link>
                      <Nav.Link href='/third'>Third</Nav.Link>
                  </Nav>
              </Navbar.Collapse>
          </Container>
      </Navbar>
    </>
  );
};

export default Navbarr;