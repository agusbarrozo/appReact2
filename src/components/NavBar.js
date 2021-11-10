import { Link } from "react-router-dom";
import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Button } from "reactstrap";
import CartWidget from "./CartWidget";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">bismoke</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">about us</NavLink>
            </NavItem>
            <NavItem>
              <Link to="/category">products</Link>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">find a store</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">learn</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">get in touch</NavLink>
            </NavItem>
            <NavItem>
              <Link to={"/cart"}>
                <Button outline color="secondary">
                  <CartWidget />
                </Button>{" "}
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
