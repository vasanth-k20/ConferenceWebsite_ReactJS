import React, { useEffect } from 'react';
import './Header.css';

export default function Header() {

  useEffect(() => {
    // Handle dropdown toggle for normal and responsive navigation
    const dropdowns = document.querySelectorAll('.nav-links .dropdown');

    dropdowns.forEach((dropdown) => {
      const toggle = dropdown.querySelector('a');
      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const isActive = dropdown.classList.contains('active');
        document.querySelectorAll('.nav-links .dropdown.active').forEach((activeDropdown) => {
          activeDropdown.classList.remove('active');
        });
        if (!isActive) {
          dropdown.classList.add('active');
        }
      });
    });

    // Close dropdown if clicked outside
    const handleClickOutside = (e) => {
      if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.nav-links .dropdown.active').forEach((activeDropdown) => {
          activeDropdown.classList.remove('active');
        });
      }
    };
    document.addEventListener('click', handleClickOutside);

    // Handle menu toggle for responsive design
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.top-nav ul');

    if (menuToggle && navMenu) {
      menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
      });
    }

    // Cleanup when resizing the window
    const handleResize = () => {
      if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        document.querySelectorAll('.nav-links .dropdown.active').forEach((dropdown) => {
          dropdown.classList.remove('active');
        });
      }
    };
    window.addEventListener('resize', handleResize);

    // Highlight active link
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

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener('click', handleClickOutside);
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
              <div>
                <a href="#about">
                  About Us <i className="fas fa-chevron-down dropdown-icon"></i>
                </a>
                <div className="dropdown-menu">
                  <div><a href="/AboutUs/About_the_Conference">About the Conference</a></div>
                  <div><a href="/AboutUs/Scope_of_conference">Scope of Conference</a></div>
                  <div><a href="/AboutUs/Origizing_Comittee">Organizing Committee</a></div>
                  <div><a href="/AboutUs/Editorial_Board">Editorial Board</a></div>
                </div>
              </div>
            </li>
            <li className="dropdown">
              <a href="#author's">
                Author's Desk <i className="fas fa-chevron-down dropdown-icon"></i>
              </a>
              <div className="dropdown-menu">
                <div><a href="/Authors_Desk/Key_Date">Key Date</a></div>
                <div><a href="/Authors_Desk/Registration_Details">Registration Details</a></div>
                <div><a href="/Authors_Desk/New_paper_submission">New Paper Submission</a></div>
              </div>
            </li>
            <li className="active">
              <a href="/Home/Contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
