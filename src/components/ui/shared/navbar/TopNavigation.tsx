import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { menuListItem } from '../../../../models/MenuList';
import ThemeToggle from '../motion/ThemeToggle';

import '../../../../styles/navbar.css';

/**
 * Desktop navigation. Below the `lg` breakpoint the menu is hidden and
 * MobileTabBar takes over, so only the brand and theme toggle remain.
 */
const TopNavigation = () => (
  <Navbar className="transparent navbar-inverse" sticky="top" expand="lg">
    <Container className="navbar-container__items ">
      <Link to="/" className="navbar-brand navbar-brand__text">
        Farhan
      </Link>

      <div className="d-flex align-items-center order-lg-last">
        <ThemeToggle />
      </div>

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto justify-content-start">
          {menuListItem.map((menuItem) => (
            <NavLink
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
export default TopNavigation;
