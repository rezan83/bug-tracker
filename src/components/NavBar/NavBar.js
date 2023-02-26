import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';

function NavBar({ setSearchTitelQuery }) {
  const navigate = useNavigate();
  const [searchTitleText, setSearchTitleText] = useState('');

  const searchTitle = event => {
    event.preventDefault();
    setSearchTitelQuery(searchTitleText);
    setSearchTitleText('');
    navigate('search');
  };
  return (
    <>
      <Navbar className="main-nav" bg="primary rounded-bottom" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/">BugTracker</Link>
          </Navbar.Brand>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/">Dashboard</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/report">Report</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          
          <div className="nav-search">
            <form onSubmit={searchTitle}>
              <button className="btn search-title-btn" onClick={searchTitle}>
                &#128269;
              </button>
              <input
                type="search"
                name="search-title"
                value={searchTitleText}
                onChange={event => setSearchTitleText(event.target.value)}
              />
            </form>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
