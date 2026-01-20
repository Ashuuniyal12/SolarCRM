import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface StatProps {
    end: number;
    suffix: string;
    label: string;
}

const AnimatedStat: React.FC<StatProps> = ({ end, suffix, label }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const duration = 2000;
            const increment = end / (duration / 16);

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);

            return () => clearInterval(timer);
        }
    }, [isInView, end]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
        >
            <div className="text-6xl md:text-7xl font-bold text-white/90 mb-2">
                {count}{suffix}
            </div>
            <div className="text-lg md:text-xl text-white/60 font-medium">
                {label}
            </div>
        </motion.div>
    );
};

const Stats: React.FC = () => {
    return (
        <section id="benefits" className="min-h-screen bg-gradient-to-b from-dark to-black py-24 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-24">
                    <AnimatedStat end={99} suffix="%" label="Customer Satisfaction" />
                    <AnimatedStat end={500} suffix="+" label="Installations Completed" />
                    <AnimatedStat end={25} suffix=" Years" label="Warranty Coverage" />
                </div>

                {/* Benefits Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-5xl md:text-6xl font-bold text-white/90 mb-6 tracking-tight">
                            Invest in Your Future
                        </h2>
                        <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-8">
                            Solar energy isn't just an environmentally conscious choice—it's a smart financial investment
                            that pays dividends for decades. Our premium systems deliver unmatched performance, reliability,
                            and savings.
                        </p>
                        <ul className="space-y-4">
                            {[
                                'ROI typically within 5-7 years',
                                'Increase property value by 4-6%',
                                'Federal tax incentives up to 30%',
                                'Protection against rising energy costs',
                            ].map((benefit, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="flex items-center text-white/80"
                                >
                                    <span className="text-2xl mr-3">✓</span>
                                    <span className="text-lg">{benefit}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-12">
                            <h3 className="text-3xl font-bold text-white/90 mb-6">
                                Calculate Your Savings
                            </h3>
                            <div className="space-y-6">
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-white/60 mb-2">Monthly Energy Bill</label>
                                        <div className="relative">
                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60">₹</span>
                                            <input
                                                type="number"
                                                placeholder="5000"
                                                className="w-full bg-white/5 border border-white/20 rounded-lg pl-10 pr-4 py-3 text-white/90 placeholder-white/40 focus:outline-none focus:border-yellow-400/60 focus:ring-2 focus:ring-yellow-400/20 transition-all"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-white/60 mb-2">Roof Size (sq ft)</label>
                                        <input
                                            type="number"
                                            placeholder="1500"
                                            className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white/90 placeholder-white/40 focus:outline-none focus:border-yellow-400/60 focus:ring-2 focus:ring-yellow-400/20 transition-all"
                                        />
                                    </div>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-white text-dark font-semibold py-4 rounded-full hover:shadow-2xl transition-shadow"
                                >
                                    Get Free Estimate
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
