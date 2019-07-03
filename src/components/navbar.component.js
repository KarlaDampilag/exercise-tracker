import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default class MyNavbar extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <div className="container">
          <Navbar.Brand href="/">ExerTracker</Navbar.Brand>
          <Navbar.Toggle aria-controls="basics-navbar-nav" />
          <Navbar.Collapse id="my-navbar">
            <Nav className="collapse navbar-collapse">
              <Nav.Link href="/">Exercises</Nav.Link>
              <Nav.Link href="/create">Create Exercise Log</Nav.Link>
              <Nav.Link href="/user">Create User</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

    )
  }
}
