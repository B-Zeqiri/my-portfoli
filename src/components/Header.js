import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(0deg, rgba(59,59,59,1) 0%, rgba(23,23,23,1) 87%, rgba(23,23,23,1) 87%);
  padding: 1rem 2rem;
  position: relative;
  font-family: 'Helvetica', 'Arial', sans-serif;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const NavLogo = styled.div`
  font-size: 1.5rem;
  color: #fff;
  font-weight: bold;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  transition: max-height 0.3s ease;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: rgba(180, 180, 180, 0.33);
    backdrop-filter: blur(5px);
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};  // Control visibility
    overflow: hidden;
    z-index: 10;
  }

  li {
    margin-left: 2rem;

    @media (max-width: 768px) {
      margin-left: 0;
      padding: 1rem;
      text-align: center;
      border-bottom: 1px solid white;

      &:last-child {
        border-bottom: none;
      }
    }

    a {
      color: #fff;
      text-decoration: none;
      font-size: 1rem;

      &:hover {
        color: #ccc;
      }
    }
  }
`;

const MenuButton = styled.div`
  display: none;
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar>
      <NavLogo>
        <Link to="/">Besart Zeqiri</Link>
      </NavLogo>
      <MenuButton onClick={toggleMenu}>
        ☰
      </MenuButton>
      <NavLinks isOpen={isOpen}>
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </li>
      </NavLinks>
    </Navbar>
  );
};

export default Header;
