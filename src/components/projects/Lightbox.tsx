import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LightboxProps {
    isOpen: boolean;
    images: string[];
    currentIndex: number;
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
    touchHandlers: {
        onTouchStart: (e: React.TouchEvent) => void;
        onTouchEnd: (e: React.TouchEvent) => void;
    };
}

const isVideo = (src: string) => /\.(mp4|webm|ogg)(\?|$)/i.test(src);

export const Lightbox: React.FC<LightboxProps> = ({
    isOpen,
    images,
    currentIndex,
    onClose,
    onPrev,
    onNext,
    touchHandlers
}) => {
    // Guard: Validate images array and currentIndex before rendering
    const isValidIndex = images && images.length > 0 && currentIndex >= 0 && currentIndex < images.length;
    
    // Keyboard navigation: Escape to close, ArrowLeft/ArrowRight to navigate
    useEffect(() => {
        // Return early if lightbox is not open
        if (!isOpen) {
            return;
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            switch (event.key) {
                case 'Escape':
                    onClose();
                    break;
                case 'ArrowLeft':
                    event.preventDefault();
                    onPrev();
                    break;
                case 'ArrowRight':
                    event.preventDefault();
                    onNext();
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose, onPrev, onNext]);
    
    // Return null if lightbox is not open or if data is invalid
    if (!isOpen || !isValidIndex) {
        return null;
    }

    const currentImage = images[currentIndex];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.button
                        className="absolute top-4 right-4 md:top-6 md:right-6 text-white text-3xl p-3 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-200 z-[10000]"
                        style={{ zIndex: 10000 }}
                        onClick={(e) => { e.stopPropagation(); onClose(); }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        ✕
                    </motion.button>

                    <motion.button
                        className="absolute left-4 md:left-8 text-white text-4xl p-4 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-200 z-[10000]"
                        style={{ zIndex: 10000 }}
                        onClick={(e) => { e.stopPropagation(); onPrev(); }}
                        whileHover={{ scale: 1.1, x: -2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        ‹
                    </motion.button>

                    <motion.div
                        className="max-w-[95vw] max-h-[95vh] flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                        {...touchHandlers}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {isVideo(currentImage) ? (
                            <video
                                src={currentImage}
                                className="max-w-full max-h-full rounded-lg"
                                autoPlay
                                muted
                                loop
                                controls={false}
                            />
                        ) : (
                            <img
                                src={currentImage}
                                className="max-w-full max-h-full rounded-lg"
                                alt="Lightbox content"
                            />
                        )}
                    </motion.div>

                    <motion.button
                        className="absolute right-4 md:right-8 text-white text-4xl p-4 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-200 z-[10000]"
                        style={{ zIndex: 10000 }}
                        onClick={(e) => { e.stopPropagation(); onNext(); }}
                        whileHover={{ scale: 1.1, x: 2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        ›
                    </motion.button>

                    <motion.div
                        className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-medium"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                    >
                        {currentIndex + 1} / {images.length}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
