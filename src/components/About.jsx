import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <motion.div
                    className="about-content"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="section-title">About Us</h2>
                    <p className="about-text">
                        Strawberry AI is dedicated to revolutionizing business operations through advanced artificial intelligence.
                        From smart POS systems to predictive stock analysis, we provide the tools you need to succeed in the digital age.
                    </p>
                    <div className="about-stats">
                        <div className="stat-item">
                            <h3>99%</h3>
                            <p>Accuracy</p>
                        </div>
                        <div className="stat-item">
                            <h3>24/7</h3>
                            <p>AI Support</p>
                        </div>
                        <div className="stat-item">
                            <h3>Global</h3>
                            <p>Reach</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
