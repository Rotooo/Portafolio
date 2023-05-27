import React from 'react';
import Navbar from './components/navbar';
import HomeSection from './containers/home';
import AboutSection from './containers/about';
import ServicesSection from './containers/services';
import PortfolioSection from './containers/portfolio';
import ContactSection from './containers/contact';
import SkillSection from './containers/skills';
import FooterBottom from './components/FotterBottom';

export default function App() {
    return (
        <div className="App">
            <Navbar />
            <HomeSection />
            <AboutSection />
            <ServicesSection />
            <PortfolioSection />
            <ContactSection />
            <FooterBottom />
        </div>
    )
}