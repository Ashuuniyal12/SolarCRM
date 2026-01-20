import React from 'react';
import { motion } from 'framer-motion';
import { Zap, IndianRupee, Leaf, Shield, BarChart3, Wrench } from 'lucide-react';

const features = [
    {
        icon: Zap,
        title: 'High Efficiency',
        description: 'Convert sunlight into clean energy with industry-leading 22% efficiency rates.',
    },
    {
        icon: IndianRupee,
        title: 'Cost Savings',
        description: 'Reduce your energy bills by up to 70% with our advanced solar panel systems.',
    },
    {
        icon: Leaf,
        title: 'Eco-Friendly',
        description: 'Reduce carbon footprint and contribute to a sustainable future for our planet.',
    },
    {
        icon: Shield,
        title: '25-Year Warranty',
        description: 'Industry-leading warranty coverage ensures long-term peace of mind.',
    },
    {
        icon: BarChart3,
        title: 'Smart Monitoring',
        description: 'Track your energy production in real-time with our advanced IoT platform.',
    },
    {
        icon: Wrench,
        title: 'Expert Installation',
        description: 'Professional installation by certified technicians with 100+ projects completed.',
    },
];

const Features: React.FC = () => {
    return (
        <section id="features" className="min-h-screen bg-dark py-24 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-white/90 mb-6 tracking-tight">
                        Why Choose Solar?
                    </h2>
                    <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
                        Experience the future of sustainable energy with cutting-edge technology and unmatched reliability.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ translateY: -8 }}
                                className="relative group"
                            >
                                {/* Laser Beam Border Effect */}
                                <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {/* Glowing border base */}
                                    <div className="absolute inset-0 rounded-2xl border-2 border-yellow-400/30 blur-[2px]"></div>

                                    {/* Laser beam runner */}
                                    <div
                                        className="absolute bg-gradient-to-r from-transparent via-yellow-400 to-transparent shadow-[0_0_15px_3px_rgba(250,204,21,0.8)]"
                                        style={{
                                            animation: 'laser-beam 3s linear infinite',
                                            filter: 'drop-shadow(0 0 8px rgba(250, 204, 21, 1))'
                                        }}
                                    ></div>

                                    {/* Secondary glow layer */}
                                    <div
                                        className="absolute bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-70"
                                        style={{
                                            animation: 'laser-beam 3s linear infinite 0.15s',
                                            filter: 'blur(4px)'
                                        }}
                                    ></div>
                                </div>

                                {/* Card Content */}
                                <div className="relative bg-dark border border-white/10 rounded-2xl p-8 h-full group-hover:border-yellow-400/20 transition-all duration-500">
                                    <div className="mb-4 w-14 h-14 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                        <Icon className="w-7 h-7 text-yellow-400" />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-white/90 mb-3 tracking-tight">
                                        {feature.title}
                                    </h3>
                                    <p className="text-white/60 leading-relaxed">
                                        {feature.description}
                                    </p>

                                    {/* Sparkle elements */}
                                    <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                                    <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" style={{ animationDelay: '0.2s' }}></div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Features;
