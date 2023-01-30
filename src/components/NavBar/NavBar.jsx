import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import planet from '../../assets/planet.png';
import './NavBar.css';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar">
      <Container>
        <Link to="/" className="justify-content-center">
          <img
            src={planet}
            width="60"
            height="60"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          <span className="brand-text">
            Space Travelers Hub
          </span>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className="nav-items">
            <NavLink to="/">Rockets</NavLink>
            <NavLink to="/mission">Mission</NavLink>
            <NavLink to="/my-profile">My Profile</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
