import React, { useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {

  useEffect(() => {
    // Handle dropdown toggle for normal and responsive navigation
    const handleDropdownToggle = (e) => {
      const toggle = e.target.closest('.dropdown > a');
      if (toggle) {
        e.preventDefault();
        e.stopPropagation();
        const dropdown = toggle.parentElement;
        const isActive = dropdown.classList.contains('active');

        // Close all other active dropdowns
        document.querySelectorAll('.nav-links .dropdown.active').forEach((activeDropdown) => {
          if (activeDropdown !== dropdown) {
            activeDropdown.classList.remove('active');
          }
        });

        // Toggle the clicked dropdown
        dropdown.classList.toggle('active', !isActive);
      }
    };

    // Close dropdown if clicked outside
    const handleClickOutside = (e) => {
      if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.nav-links .dropdown.active').forEach((activeDropdown) => {
          activeDropdown.classList.remove('active');
        });
      }
    };

    // Handle menu toggle for responsive design
    const handleMenuToggle = () => {
      const navMenu = document.querySelector('.top-nav ul');
      if (navMenu) {
        navMenu.classList.toggle('active');
      }
    };

    // Cleanup when resizing the window
    const handleResize = () => {
      if (window.innerWidth > 768) {
        const navMenu = document.querySelector('.top-nav ul');
        if (navMenu) {
          navMenu.classList.remove('active');
        }
        document.querySelectorAll('.nav-links .dropdown.active').forEach((dropdown) => {
          dropdown.classList.remove('active');
        });
      }
    };

    // Highlight active link
    const highlightActiveLink = () => {
      const navLinks = document.querySelectorAll('.top-nav ul li a');
      navLinks.forEach((link) => {
        if (link.href === window.location.href) {
          link.classList.add('active');
          const parentDropdown = link.closest('.dropdown');
          if (parentDropdown) {
            parentDropdown.querySelector('a').classList.add('active');
          }
        }
      });
    };

    // Attach event listeners
    document.addEventListener('click', handleDropdownToggle);
    document.addEventListener('click', handleClickOutside);
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
      menuToggle.addEventListener('click', handleMenuToggle);
    }
    window.addEventListener('resize', handleResize);
    highlightActiveLink();

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener('click', handleDropdownToggle);
      document.removeEventListener('click', handleClickOutside);
      if (menuToggle) {
        menuToggle.removeEventListener('click', handleMenuToggle);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="header-top">
      <div className="nav-container">
        <div className="logo">
          <a href="/">
            <img src="/img/Logoo.png" alt="ICCSI Logo" />
          </a>
        </div>
        <nav className="top-nav">
          <span className="menu-toggle">&#9776;</span>
          <ul className="nav-links">
            <li className="active">
              <a href="/">Home</a>
            </li>
            <li className="dropdown">
              <a href="">
                About Us <i className="fas fa-chevron-down dropdown-icon"></i>
              </a>
              <div className="dropdown-menu">
                <div><Link to="/about">About the Conference</Link></div>
                <div><Link to="/scope">Scope the Conference</Link></div>
                <div><Link to="/organize">Origizing Comittee</Link></div>
                <div><Link to="/editorial">Editorial Board</Link></div>
              </div>
            </li>
            <li className="dropdown">
              <a href="">
                Author's Desk <i className="fas fa-chevron-down dropdown-icon"></i>
              </a>
              <div className="dropdown-menu">
                <div><Link to="/keydates">Key Date</Link></div>
                <div><Link to="/registration">Registration Details</Link></div>
                <div><Link to="/papersub">New Paper Submission</Link></div>
              </div>
            </li>
            <li className="active">
            <div><Link to="/contact">Contact</Link></div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}