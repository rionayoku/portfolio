import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface ImageSliderProps {
    images: string[];
    onImageClick: (index: number) => void;
}

const isVideo = (src: string) => /\.(mp4|webm|ogg)$/i.test(src);

const sliderVariants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 300 : -300,
        opacity: 0,
        rotateY: direction > 0 ? -60 : 60,
        scale: 0.8
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
        rotateY: 0,
        scale: 1
    },
    exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? 300 : -300,
        opacity: 0,
        rotateY: direction < 0 ? 60 : -60,
        scale: 0.8
    })
};

export const ImageSlider: React.FC<ImageSliderProps> = ({ images, onImageClick }) => {
    const [[page, direction], setPage] = useState([0, 0]);
    const [isAutoSliding, setIsAutoSliding] = useState(true);
    const timerRef = React.useRef<NodeJS.Timeout | null>(null);

    const imageIndex = (page % images.length + images.length) % images.length;

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

    const jumpToImage = (index: number) => {
        setPage([index, index > imageIndex ? 1 : -1]);
    };

    const startAutoSlide = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        const delayMs = isVideo(images[imageIndex]) ? 50000 : 4000;
        timerRef.current = setTimeout(() => paginate(1), delayMs);
    };

    useEffect(() => {
        if (isAutoSliding && images.length > 1) {
            startAutoSlide();
        }
        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, [isAutoSliding, page, images.length]);

    const handleImageClick = (e: React.MouseEvent) => {
        // If the click originated from a button or pause-play div, don't open lightbox
        if ((e.target as HTMLElement).closest('button') || (e.target as HTMLElement).closest('[data-testid="pause-play"]')) {
            return;
        }
        
        console.log('🖱️ Image container clicked');
        console.log('✨ Triggering lightbox for index:', imageIndex);
        onImageClick(imageIndex);
    };

    const handleInteraction = (action: () => void) => (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsAutoSliding(false);
        if (timerRef.current) clearTimeout(timerRef.current);
        action();
    };

    return (
        <div
            className="project-slider-container relative w-full aspect-[4/3] overflow-hidden rounded-lg border border-white/10"
            onMouseEnter={() => setIsAutoSliding(false)}
            onMouseLeave={() => setIsAutoSliding(true)}
            style={{ pointerEvents: 'auto' }}
        >
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={page}
                    custom={direction}
                    variants={sliderVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        rotateY: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    className="absolute w-full h-full cursor-pointer"
                    onClick={handleImageClick}
                >
                    {isVideo(images[imageIndex]) ? (
                        <video
                            src={images[imageIndex]}
                            className="w-full h-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                    ) : (
                        <LazyLoadImage
                            src={images[imageIndex]}
                            alt={`Project image ${imageIndex + 1}`}
                            className="w-full h-full object-cover"
                            effect="blur"
                        />
                    )}
                </motion.div>
            </AnimatePresence>

            {images.length > 1 && (
                <>
                    {/* Controls are given a higher z-index to be on top of the overlay */}
                    <button
                        onClick={handleInteraction(() => paginate(-1))}
                        className="slider-arrow left-2 md:left-4 z-20"
                    >
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                    <button
                        onClick={handleInteraction(() => paginate(1))}
                        className="slider-arrow right-2 md:right-4 z-20"
                    >
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                    <div className="slider-dots z-20">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                className={`slider-dot ${imageIndex === i ? 'active' : ''}`}
                                onClick={handleInteraction(() => jumpToImage(i))}
                            />
                        ))}
                    </div>
                    <div 
                        className="absolute top-3 right-3 bg-black/50 rounded-full p-2 z-20 cursor-pointer"
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsAutoSliding(prev => !prev);
                        }}
                        data-testid="pause-play"
                    >
                        <i className={`fa-solid ${isAutoSliding ? 'fa-pause' : 'fa-play'} text-white text-xs`}></i>
                    </div>
                </>
            )}
        </div>
    );
};
