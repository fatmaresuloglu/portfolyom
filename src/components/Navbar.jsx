// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css'; // Birazdan oluşturacağız

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">FATMA RESULOĞLU</div>
      <ul className="nav-links">
        <li><a href="#hero">Ana Sayfa</a></li>
        <li><a href="#about">Hakkımda</a></li>
        <li><a href="#projects">Projeler</a></li>
        <li><a href="#contact">İletişim</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;