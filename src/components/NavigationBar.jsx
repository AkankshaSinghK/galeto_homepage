import React from "react";
import { Navbar, Nav, Button,Dropdown } from "react-bootstrap";


const NavigationBar = () => {
  const linkStyle = { color: "black", fontWeight: "bold" };
  const iconStyle = { color: "black", fontWeight: "bold" };

  return (
    <div className="container-fluid sticky-top" style={{ backgroundColor: "#fff" }}>
      <div className="container">
        <Navbar expand="md" className="px-4 py-2">
          <Navbar.Brand href="#">
            <img
              src="./assets/gelato_logo_black.svg"
              alt="Gelato Logo"
              style={{ height: "30px", marginRight: "10px" }}
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="align-items-center">
              {/* Contact Us */}
              <Nav.Link
                href="#"
                className="d-flex align-items-center rounded-pill hover-link"
                style={linkStyle}
              >
                <i className="bi bi-headset mx-2" style={iconStyle}></i>
                Contact us
              </Nav.Link>

               <Dropdown>
                <Dropdown.Toggle
                  as={Nav.Link}
                  className="d-flex align-items-center rounded-pill hover-link"
                  style={linkStyle}
                  id="dropdown-custom-components"
                >
                  <i className="bi bi-globe mx-2" style={iconStyle}></i>
                  IN/INR
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">Language - IN</Dropdown.Item>
                  <Dropdown.Item href="#">Currency - INR</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              {/* Cart */}
              <Nav.Link
                href="#"
                className="d-flex align-items-center rounded-pill hover-link"
                style={linkStyle}
              >
                <i className="bi bi-cart-fill mx-2" style={iconStyle}></i>
                Cart
              </Nav.Link>

              {/* Sign in */}
              <Nav.Link
                href="#"
                className="d-flex align-items-center rounded-pill hover-link"
                style={linkStyle}
              >
                <i className="bi bi-person-fill mx-2" style={iconStyle}></i>
                Sign in
              </Nav.Link>

              {/* Sign up button */}
              <Button
                variant="dark"
                className="rounded-pill px-3 mx-2"
                style={{ fontWeight: "bold" }}
              >
                Sign up for free
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <hr className="bg-secondary" />
    </div>
  );
};

export default NavigationBar;
