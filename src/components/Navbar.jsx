import React, { useState, useEffect } from 'react';
import strawberryIcon from '../assets/strawberry-icon.png';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <div className="logo">
                    <img src={strawberryIcon} alt="Strawberry AI" className="logo-icon" />
                    Strawberry AI
                </div>

                <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>

                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <li><a href="#" onClick={() => setIsOpen(false)}>Home</a></li>
                    <li><a href="#features" onClick={() => setIsOpen(false)}>Solutions</a></li>
                    <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
                    <li><a href="#contact" className="btn-small" onClick={() => setIsOpen(false)}>Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
