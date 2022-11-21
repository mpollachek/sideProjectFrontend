import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
  Container,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  ButtonDropdown,
  Row,
  Dropdown,
  UncontrolledPopover,
  PopoverBody,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import AWUlogo from "../assets/logo1.png";
import "./Header.css";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AssignmentTurnedInRoundedIcon from "@mui/icons-material/AssignmentTurnedInRounded";
import PeopleIcon from "@mui/icons-material/People";
import EngineeringIcon from "@mui/icons-material/Engineering";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import QuizIcon from "@mui/icons-material/Quiz";
import ReportIcon from "@mui/icons-material/Report";

const Header = () => {
  //navbar open state
  const [menuOpen, setMenuOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar dark sticky="top" expand="md"
    style={{overflow: 'visible'}}
    >
      <NavbarBrand className="ms-5" href="/">
        <img
          src={AWUlogo}
          alt="All Workers Union Logo"
          className="float-start brand"
        />
      </NavbarBrand>
      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
      <Collapse isOpen={menuOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem onClick={() => setMenuOpen(!menuOpen)}>
            <NavLink className="nav-link navfont" to="/">
              <HomeRoundedIcon className="navicons" />
              Home
            </NavLink>
          </NavItem>

          {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="navfont">
              <ReportIcon className="navicons" />
                Issues to Solve
              </DropdownToggle>
              <DropdownMenu right 
              style={{position: 'fixed'}}
              >
                <DropdownItem onClick={() => setMenuOpen(!menuOpen)}>
                <NavLink className="nav-link navfont" to="/Issues">
                Compensation
                </NavLink>
                </DropdownItem>
                <DropdownItem onClick={() => setMenuOpen(!menuOpen)}>
                <NavLink className="nav-link navfont" to="/Issues">
                  Paid Time Off
                  </NavLink>
                  </DropdownItem>
                <DropdownItem onClick={() => setMenuOpen(!menuOpen)}>
                <NavLink className="nav-link navfont" to="/Issues">
                  Corruption
                  </NavLink>
                  </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}

          <NavItem onClick={() => setMenuOpen(!menuOpen)}>
            <NavLink className="nav-link navfont" to="/Issues">
              <ReportIcon className="navicons" />
              Issues to Solve
            </NavLink>
          </NavItem>

          <NavItem onClick={() => setMenuOpen(!menuOpen)}>
            <NavLink className="nav-link navfont" to="/Mission">
              <AssignmentTurnedInRoundedIcon className="navicons" />
              Our Mission
            </NavLink>
          </NavItem>

          {/* <NavItem>
              <NavLink className='nav-link navfont' to='/AboutUs'>
                  <PeopleIcon className='navicons'/>Who We Are 
              </NavLink>
          </NavItem> */}

          <NavItem onClick={() => setMenuOpen(!menuOpen)}>
            <NavLink className="nav-link navfont" to="/GetInvolved">
              <EngineeringIcon className="navicons" />
              Get Involved
            </NavLink>
          </NavItem>
          <NavItem onClick={() => setMenuOpen(!menuOpen)}>
            <NavLink className="nav-link navfont" to="/Faq">
              <QuizIcon className="navicons" />
              FAQ
            </NavLink>
          </NavItem>
          <NavItem onClick={() => setMenuOpen(!menuOpen)}>
            <NavLink className="nav-link navfont" to="/Donate">
              <LocalAtmIcon className="navicons" />
              Donate
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
