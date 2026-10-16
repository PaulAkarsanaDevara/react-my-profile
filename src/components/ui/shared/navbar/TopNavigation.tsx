import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { menuListItem } from '../../../../models/MenuList';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useState } from 'react';
import ThemeToggle from '../motion/ThemeToggle';

import '../../../../styles/navbar.css';

const TopNavigation = () => {
  const [expanded, setExpanded] = useState(false);
  const closeNavbar = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setExpanded(false);
  };

  return (
    <Navbar
      className="transparent navbar-inverse"
      sticky="top"
      collapseOnSelect
      expand="lg"
      expanded={expanded}
    >
      <Container className="navbar-container__items ">
        <Link to="/" className="navbar-brand navbar-brand__text">
          Farhan
        </Link>

        <div className="d-flex align-items-center gap-2 order-lg-last">
          <ThemeToggle />
          <Navbar.Toggle
            onClick={() => setExpanded(!expanded)}
            aria-controls="responsive-navbar-nav"
          >
            <RxHamburgerMenu fontSize={22} />
          </Navbar.Toggle>
        </div>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto justify-content-start">
            {menuListItem.map((menuItem) => (
              <NavLink
                onClick={closeNavbar}
                key={menuItem.links}
                to={menuItem.links}
                end={menuItem.links === '/'}
                className="nav-link custom-nav__link mx-md-3 "
              >
                {({ isActive }) => (
                  <>
                    {menuItem.name}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="nav-link__indicator"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default TopNavigation;
