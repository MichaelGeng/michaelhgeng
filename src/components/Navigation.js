import React, { Component } from 'react'
import {Navbar, MenuItem, Nav, NavItem, NavDropdown} from 'react-bootstrap';

class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar>

          <Navbar.Header>
              <Navbar.Brand>
              <a href="#home">MG</a>
              </Navbar.Brand>
          </Navbar.Header>

          <Nav>
              <NavItem eventKey={1} href="#">
                Bio
              </NavItem>
              <NavItem eventKey={2} href="#">
                Experience
              </NavItem>
              <NavItem eventKey={3} href="#">
                Skills
              </NavItem>
              <NavItem eventKey={4} href="#">
                Contact
              </NavItem>
          </Nav>
        </Navbar>;
      </div>
    )
  }
}

export default Navigation;