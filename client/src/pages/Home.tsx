import React from 'react';
import Navbar from '../components/Navbar';
import SolarScroll from '../components/SolarScroll';
import Features from '../components/Features';
import Stats from '../components/Stats';
import ContactCTA from '../components/ContactCTA';
import Footer from '../components/Footer';

const Home: React.FC = () => {
    return (
        <div className="w-full min-h-screen bg-dark">
            {/* Fixed Navigation */}
            <Navbar />

            {/* Hero Scrollytelling Section */}
            <section id="home" className="relative">
                <SolarScroll />
            </section>

            {/* Features Section */}
            <Features />

            {/* Statistics & Benefits Section */}
            <Stats />

            {/* Contact CTA Section */}
            <ContactCTA />

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Home;
