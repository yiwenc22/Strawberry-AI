import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-section">
                    <h3>Strawberry AI</h3>
                    <p>Advanced AI Solutions for the modern world.</p>
                </div>
                <div className="footer-section">
                    <h4>Founder</h4>
                    <p>Yiwen Chen</p>
                </div>
                <div className="footer-section">
                    <h4>Contact</h4>
                    <p>strawberry-seeds@strawberry-ai.com</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 Strawberry Ai LLC. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
