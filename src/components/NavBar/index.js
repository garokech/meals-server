import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from "react-router-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import { MyContext } from '../../context';
import { useContext } from 'react';

function AppNavbar() {
  const {user} = useContext(MyContext)
  return (
    <Navbar expand="lg" style={{$color:'#565a75'}}>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className='text-light'>Meals</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          { !user && (
            <Nav className="me-auto">
              <LinkContainer to="/login">
                <Nav.Link className='text-light'>Login</Nav.Link>
              </LinkContainer>{" "}
              <LinkContainer to="/signup">
<<<<<<< HEAD
                <Nav.Link className='text-light'>Signup</Nav.Link>
=======
                <Nav.Link>Signup</Nav.Link> 
>>>>>>> e1f8eebc10238f1bc36bec4bfbe65fdaf963a29d
              </LinkContainer>
            </Nav>
            )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default AppNavbar;