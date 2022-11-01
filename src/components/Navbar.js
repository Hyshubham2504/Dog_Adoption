import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes, FaDog } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink  exact="true" to="/" className="nav-logo">
            <FaDog className="nav-pic "> </FaDog>
            Paw Prints
          </NavLink>

          <div className="links">
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  exact="true"
                  to="/"
                  // activeclassname="active"
                  // className="nav-links"
                  className={({ isActive }) => "nav-links" + (isActive ? " active" : "")}
                  onClick={handleClick}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact="true"
                  to="/about"
                  // activeClassName="active"
                  // className="nav-links"
                  className={({ isActive }) => "nav-links" + (isActive ? " active" : "")}
                  onClick={handleClick}
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                {/* <NavLink
                exact
                to="/care"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Ways to care
              </NavLink> */}
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">
                    Ways to care
                  </Dropdown.Toggle>

                  <Dropdown.Menu id="dropdown-menu">
                    <Dropdown.Item   >
                      
                      <NavLink
                         exact="true"
                        to="/donate"
                      //  activeClassName="active"
                      //   className="dropdown-links"
                      className={({ isActive }) => "dropdown-links" + (isActive ? " active" : "")}
                        onClick={handleClick}
                      >
                        Donate
                      </NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      
                      <NavLink
                        exact="true"
                        to="/volunteer"
                        // activeClassName="active"
                        // className="dropdown-links"
                        className={({ isActive }) => "dropdown-links" + (isActive ? " active" : "")}
                        onClick={handleClick}
                      >
                       Volunteer
                      </NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item">
                     
                      <NavLink
                         exact="true" to="/adopt"
                        // activeClassName="active"
                        // className="dropdown-links"
                        className={({ isActive }) => "dropdown-links" + (isActive ? " active" : "")}
                        onClick={handleClick}
                      >
                        Adopt
                      </NavLink>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li className="nav-item">
                <NavLink
                   exact="true" to="/contact"
                  // activeClassName="active"
                  // className="nav-links"
                  className={({ isActive }) => "nav-links" + (isActive ? " active" : "")}
                  onClick={handleClick}
                >
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact="true" to="/donate"
                  // activeClassName="active"
                  // className="nav-links"
                  className={({ isActive }) => "nav-links" + (isActive ? " active" : "")}
                  onClick={handleClick}
                >
                  <Button variant="light" size="md">
                    Donate
                  </Button>
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="nav-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;