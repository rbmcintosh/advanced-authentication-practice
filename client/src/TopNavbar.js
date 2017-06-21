import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const TopNavbar = (props) => {
  if(props.showNavItems === true) {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem onClick={props.onSignOut}>Sign Out</NavItem>
          </Nav>
          <Nav pullRight>
            <Link to="/secret"><Navbar.Text>Secret</Navbar.Text></Link>
          </Nav>
          <Nav pullRight>
            <Link to="/classcomponent1"><Navbar.Text>ClassComponent1</Navbar.Text></Link>
          </Nav>
          <Nav pullRight>
            <Link to="/classcomponent2"><Navbar.Text>ClassComponent2</Navbar.Text></Link>
          </Nav>
          <Nav pullRight>
            <Link to="/classcomponent3"><Navbar.Text>ClassComponent3</Navbar.Text></Link>
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>
    );
  } 
  else {
    return null;
  }
};

TopNavbar.propTypes = {
  onSignOut: PropTypes.func.isRequired,
  showNavItems: PropTypes.bool.isRequired
};

export default TopNavbar;
