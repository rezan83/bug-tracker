import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './navbar.css';

function NavBar() {
  return (
    <>
      <Navbar
        className="main-nav"
        bg="primary rounded-bottom"
        variant="dark">
        <Container>
          <Navbar.Brand ><Link to="/">Bug Tracker</Link></Navbar.Brand>
          {/* <Nav className="me-auto"> */}
          <Link to="/">Dashboard</Link>
            <Link to="/report">Report</Link>
            {/* <Link to="/about">About</Link> */}
          {/* </Nav> */}
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
