import React from 'react';
import { motion } from 'framer-motion';
import iconPos from '../assets/icon-pos.png';
import iconStock from '../assets/icon-stock.png';
import './Features.css';

const Features = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const hoverEffect = {
        scale: 1.05,
        boxShadow: "0 15px 40px rgba(255, 46, 99, 0.3)",
        borderColor: "#FF2E63"
    };

    return (
        <section id="features" className="features-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    Our Solutions
                </motion.h2>
                <div className="features-grid">
                    <motion.div
                        className="feature-card"
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        whileHover={hoverEffect}
                    >
                        <div className="card-bg-animation"></div>
                        <div className="icon-wrapper">
                            <img src={iconPos} alt="AI POS System" />
                        </div>
                        <h3>AI Cashier & POS</h3>
                        <p>
                            Experience seamless and efficient transactions with our advanced AI-powered cashier and POS systems.
                        </p>
                    </motion.div>
                    <motion.div
                        className="feature-card"
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        whileHover={hoverEffect}
                    >
                        <div className="card-bg-animation"></div>
                        <div className="icon-wrapper">
                            <img src={iconStock} alt="AI Stock Analysis" />
                        </div>
                        <h3>AI Stock & Business</h3>
                        <p>
                            Optimize your business with cutting-edge AI stock analysis and data-driven insights.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Features;
