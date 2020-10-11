import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBBtn } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import Logo from "./logo.png";
import "./navbar.css"
class NavBar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      <MDBNavbar style={{color: "rgba(173, 216, 230, 0.4"}} dark expand="md">
        <MDBNavbarBrand>
            <img height='50rem' src={Logo}/>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav center>
            <MDBNavItem>
            < a href={this.props.title === "Take a tour" ? "/tour" : "/"} class="cta" padding="2rem">
              <span >{this.props.title}</span>
                  <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
            </a>
              {/* <MDBNavLink style={{fontFamily:"Open Sans", fontSize:"2rem"}}to="/">Take Tour</MDBNavLink> */}
            </MDBNavItem>  
          </MDBNavbarNav>
          <MDBNavbarNav right>
            {/* <MDBNavItem>
              <MDBNavLink to="/">About Us</MDBNavLink>
            </MDBNavItem> */}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
    );
  }
}

export default NavBar;