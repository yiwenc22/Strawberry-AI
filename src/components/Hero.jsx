import React from 'react';
import heroBg from '../assets/hero-bg.png';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1 className="hero-title">
          Advanced <span className="highlight">AI Solutions</span>
        </h1>
        <p className="hero-subtitle">
          Empowering your business with next-generation artificial intelligence.
        </p>
        <a href="#features" className="btn hero-btn">Explore Solutions</a>
      </div>
    </section>
  );
};

export default Hero;
