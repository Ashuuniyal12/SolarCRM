import React from 'react';
import { motion } from 'framer-motion';

const ContactCTA: React.FC = () => {
    return (
        <section id="contact" className="min-h-screen bg-dark py-24 px-6 lg:px-8 flex items-center">
            <div className="max-w-4xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-bold text-white/90 mb-6 tracking-tighter">
                        Ready to Go Solar?
                    </h2>
                    <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto">
                        Get a free site survey and personalized quote within 24 hours.
                    </p>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-white/80 mb-2 font-medium">Full Name</label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white/90 placeholder-white/40 focus:outline-none focus:border-yellow-400/60 focus:ring-2 focus:ring-yellow-400/20 focus:bg-white/10 transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-white/80 mb-2 font-medium">Email Address</label>
                            <input
                                type="email"
                                placeholder="john@example.com"
                                className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white/90 placeholder-white/40 focus:outline-none focus:border-yellow-400/60 focus:ring-2 focus:ring-yellow-400/20 focus:bg-white/10 transition-all"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-white/80 mb-2 font-medium">Phone Number</label>
                            <input
                                type="tel"
                                placeholder="(555) 123-4567"
                                className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white/90 placeholder-white/40 focus:outline-none focus:border-yellow-400/60 focus:ring-2 focus:ring-yellow-400/20 focus:bg-white/10 transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-white/80 mb-2 font-medium">Property Type</label>
                            <select className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white/90 focus:outline-none focus:border-yellow-400/60 focus:ring-2 focus:ring-yellow-400/20 focus:bg-white/10 transition-all [&>option]:bg-dark [&>option]:text-white">
                                <option value="" className="bg-dark text-white/60">Select type</option>
                                <option value="residential" className="bg-dark text-white">Residential</option>
                                <option value="commercial" className="bg-dark text-white">Commercial</option>
                                <option value="industrial" className="bg-dark text-white">Industrial</option>
                            </select>
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="block text-white/80 mb-2 font-medium">Message (Optional)</label>
                        <textarea
                            rows={4}
                            placeholder="Tell us about your project..."
                            className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white/90 placeholder-white/40 focus:outline-none focus:border-yellow-400/60 focus:ring-2 focus:ring-yellow-400/20 focus:bg-white/10 transition-all resize-none"
                        ></textarea>
                    </div>

                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-dark font-bold text-lg py-5 rounded-full hover:shadow-2xl hover:shadow-yellow-500/50 transition-all"
                    >
                        Schedule Free Consultation
                    </motion.button>

                    <p className="text-white/40 text-sm text-center mt-6">
                        No commitment required. We respect your privacy.
                    </p>
                </motion.form>
            </div>
        </section>
    );
};

export default ContactCTA;
