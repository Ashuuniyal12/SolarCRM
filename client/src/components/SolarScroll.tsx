import React, { useRef, useEffect, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

const TOTAL_FRAMES = 153; // Based on your uploaded frames

const SolarScroll: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    // Scroll progress tracking
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    // Map scroll progress to frame index
    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

    // Preload all frames using Vite's glob import
    useEffect(() => {
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];

            // Vite's glob import to load all frames
            const frameModules = import.meta.glob('../assets/frames/ezgif-frame-*.jpg', { eager: false });
            const framePaths = Object.keys(frameModules).sort();

            for (const path of framePaths) {
                const img = new Image();
                const module = await frameModules[path]() as { default: string };
                img.src = module.default;

                await new Promise((resolve, reject) => {
                    img.onload = resolve;
                    img.onerror = reject;
                });

                loadedImages.push(img);
            }

            setImages(loadedImages);
            setImagesLoaded(true);
        };

        loadImages();
    }, []);

    // Render current frame on canvas
    useEffect(() => {
        if (!imagesLoaded || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const render = () => {
            const index = Math.round(frameIndex.get());
            const img = images[index];

            if (img) {
                // Set canvas dimensions to viewport
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;

                // Calculate aspect ratio fit (contain)
                const scale = Math.min(
                    canvas.width / img.width,
                    canvas.height / img.height
                );

                const x = (canvas.width - img.width * scale) / 2;
                const y = (canvas.height - img.height * scale) / 2;

                // Clear and draw
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
            }
        };

        // Subscribe to frame changes
        const unsubscribe = frameIndex.on('change', render);
        render(); // Initial render

        return () => {
            unsubscribe();
        };
    }, [frameIndex, images, imagesLoaded]);

    // Handle window resize
    useEffect(() => {
        if (!imagesLoaded) return;

        const handleResize = () => {
            const canvas = canvasRef.current;
            if (!canvas) return;

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [imagesLoaded]);

    // Text overlay scroll progress ranges
    const heroOpacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
    const heroY = useTransform(scrollYProgress, [0, 0.25], [0, -50]);

    const engineeringOpacity = useTransform(scrollYProgress, [0.25, 0.35, 0.5, 0.6], [0, 1, 1, 0]);
    const engineeringY = useTransform(scrollYProgress, [0.25, 0.35], [50, 0]);

    const techOpacity = useTransform(scrollYProgress, [0.55, 0.65, 0.8, 0.85], [0, 1, 1, 0]);
    const techY = useTransform(scrollYProgress, [0.55, 0.65], [50, 0]);

    const ctaOpacity = useTransform(scrollYProgress, [0.85, 0.9, 1], [0, 1, 1]);
    const ctaY = useTransform(scrollYProgress, [0.85, 0.9], [50, 0]);

    if (!imagesLoaded) {
        return (
            <div className="h-screen w-screen bg-dark flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-white/20 border-t-white/80 rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-white/60 text-sm tracking-wide">Loading Experience...</p>
                </div>
            </div>
        );
    }

    return (
        <div ref={containerRef} className="relative h-[400vh] bg-dark">
            {/* Sticky Canvas Container */}
            <div className="sticky top-0 h-screen w-screen overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full"
                    style={{ backgroundColor: '#050505' }}
                />

                {/* Text Overlays */}

                {/* Hero Text - 0% scroll */}
                <motion.div
                    style={{ opacity: heroOpacity, y: heroY }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white/90 tracking-tighter text-center px-8">
                        Powering a Smarter Future
                    </h1>
                </motion.div>

                {/* Engineering Text - 30% scroll */}
                <motion.div
                    style={{ opacity: engineeringOpacity, y: engineeringY }}
                    className="absolute inset-0 flex items-center justify-start pl-8 md:pl-16 lg:pl-24 pointer-events-none"
                >
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white/90 tracking-tight max-w-xl">
                        Precision Solar<br />Engineering
                    </h2>
                </motion.div>

                {/* Technical Details - 60% scroll */}
                <motion.div
                    style={{ opacity: techOpacity, y: techY }}
                    className="absolute inset-0 flex items-center justify-end pr-8 md:pr-16 lg:pr-24 pointer-events-none"
                >
                    <div className="text-right max-w-xl">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white/90 tracking-tight mb-4">
                            High-Efficiency Cells.<br />
                            Smart Inverters.<br />
                            Built to Last.
                        </h2>
                    </div>
                </motion.div>

                {/* CTA - 90% scroll */}
                <motion.div
                    style={{ opacity: ctaOpacity, y: ctaY }}
                    className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
                >
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white/90 tracking-tighter mb-8">
                        Switch to Solar Today
                    </h2>
                    <button className="px-8 py-4 bg-white text-dark font-semibold text-lg tracking-tight rounded-full hover:scale-105 transition-transform pointer-events-auto">
                        Get a Free Site Survey
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default SolarScroll;
