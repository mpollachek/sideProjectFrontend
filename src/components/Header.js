import { useState } from 'react';
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
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import AWUlogo from '../assets/logo1.png';
import './Header.css'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AssignmentTurnedInRoundedIcon from '@mui/icons-material/AssignmentTurnedInRounded';
import PeopleIcon from '@mui/icons-material/People';
import EngineeringIcon from '@mui/icons-material/Engineering';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import QuizIcon from '@mui/icons-material/Quiz';
import ReportIcon from '@mui/icons-material/Report';

const Header = () => {
  //navbar open state
  const [menuOpen, setMenuOpen] = useState(false);
  // Popover open state
  const [popoverOpen, setPopoverOpen] = useState(false);

  const closeBoth = () => {
    setMenuOpen(!menuOpen);
    setPopoverOpen(!popoverOpen);
  }

  return(

    <Navbar dark sticky='top' expand='md' >
      <NavbarBrand className='ms-5' href='/'>
        <img src={AWUlogo} alt='All Workers Union Logo' 
        className='float-start brand'/>
      </NavbarBrand>
      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
      <Collapse isOpen={menuOpen} navbar>
        <Nav className='ms-auto' navbar>
        <NavItem onClick={() => setMenuOpen(!menuOpen)}>
              <NavLink className='nav-link navfont' to='/'>
                  <HomeRoundedIcon className='navicons'/>Home 
              </NavLink>
          </NavItem>
          <NavItem onClick={() => setMenuOpen(!menuOpen)}>
              <NavLink className='nav-link navfont' to='/Mission'>
                  <AssignmentTurnedInRoundedIcon className='navicons'/>Our Mission 
              </NavLink>
          </NavItem>

              {/* <NavItem className='navfont translatePop' id="dropdownPopover" onClick={() => setPopoverOpen(!popoverOpen)}>
                <div className='hand' >
              <ReportIcon className='navicons'/>
              Issues to Solve
              </div>
                <UncontrolledPopover
                  placement="bottom"
                  target="dropdownPopover"
                  trigger="legacy"
                  isOpen={popoverOpen}
                  >                    
                    <PopoverBody className='bgDrop navfont' >
                <NavLink 
                onClick={() => closeBoth} 
                className='nav-link' 
                to='/'
                >
                  balls
                  </NavLink >
                  <NavLink 
                onClick={() => closeBoth} 
                className='nav-link' 
                to='/'
                >
                  balls
                  </NavLink >
                  <NavLink 
                onClick={() => closeBoth} 
                className='nav-link' 
                to='/'
                >
                  balls
                  </NavLink >
                </PopoverBody>
                </UncontrolledPopover>
            </NavItem> */}
          

          <NavItem onClick={() => setMenuOpen(!menuOpen)}>
          <NavLink className='nav-link navfont' to='/Issues'>
                  <ReportIcon className='navicons'/>Issues to Solve 
              </NavLink>
          </NavItem>

          {/* <NavItem>
              <NavLink className='nav-link navfont' to='/AboutUs'>
                  <PeopleIcon className='navicons'/>Who We Are 
              </NavLink>
          </NavItem> */}

          <NavItem onClick={() => setMenuOpen(!menuOpen)}>
              <NavLink className='nav-link navfont' to='/GetInvolved'>
                  <EngineeringIcon className='navicons'/>Get Involved 
              </NavLink>
          </NavItem>
          <NavItem onClick={() => setMenuOpen(!menuOpen)}>
              <NavLink className='nav-link navfont' to='/Faq'>
                  <QuizIcon className='navicons'/>FAQ 
              </NavLink>
          </NavItem>
          <NavItem onClick={() => setMenuOpen(!menuOpen)}>
              <NavLink className='nav-link navfont' to='/Donate'>
                  <LocalAtmIcon className='navicons'/>Donate 
              </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>

  );
}

export default Header;