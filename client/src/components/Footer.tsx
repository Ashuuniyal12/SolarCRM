import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black border-t border-white/10 py-12 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold text-white/90 mb-4">
                            Solar<span className="text-white/60">Systems</span>
                        </h3>
                        <p className="text-white/60 leading-relaxed mb-6">
                            Leading provider of premium solar energy solutions. Powering a sustainable future, one installation at a time.
                        </p>
                        <div className="flex space-x-4">
                            {['twitter', 'linkedin', 'instagram'].map((social) => (
                                <motion.a
                                    key={social}
                                    href={`#${social}`}
                                    whileHover={{ scale: 1.2 }}
                                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                                >
                                    <span className="text-white/80 text-sm">{social[0].toUpperCase()}</span>
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white/90 font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {['About Us', 'Our Services', 'Case Studies', 'Blog', 'Careers'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-white/60 hover:text-white/90 transition-colors">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white/90 font-semibold mb-4">Contact</h4>
                        <ul className="space-y-2 text-white/60">
                            <li>📧 info@solarsystems.com</li>
                            <li>📞 (555) 123-4567</li>
                            <li>📍 123 Solar Street<br />Green City, ST 12345</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-white/40 text-sm mb-4 md:mb-0">
                        © {currentYear} SolarSystems. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-sm text-white/40">
                        <a href="#" className="hover:text-white/80 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white/80 transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white/80 transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
