import { useState, useEffect, useRef } from 'react';

interface UseLightboxProps {
    imageCount: number;
    isOpen: boolean;
    onClose: () => void;
}

export const useLightbox = ({ imageCount, isOpen, onClose }: UseLightboxProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prev = () => setCurrentIndex((idx) => (idx - 1 + imageCount) % imageCount);
    const next = () => setCurrentIndex((idx) => (idx + 1) % imageCount);

    // Keyboard navigation and closing
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') prev();
            if (e.key === 'ArrowRight') next();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, imageCount, onClose, prev, next]);

    // Lock body scroll when lightbox is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    // Touch gesture handling
    const touchStartXRef = useRef<number | null>(null);
    const touchStartTimeRef = useRef<number | null>(null);

    const onTouchStart = (e: React.TouchEvent) => {
        touchStartXRef.current = e.touches[0].clientX;
        touchStartTimeRef.current = Date.now();
    };

    const onTouchEnd = (e: React.TouchEvent) => {
        const startX = touchStartXRef.current;
        const startTime = touchStartTimeRef.current;
        if (startX == null || startTime == null) return;

        const endX = e.changedTouches[0].clientX;
        const dx = endX - startX;
        const dt = Date.now() - startTime;

        if (Math.abs(dx) > 40 && dt < 1000) { // Swipe detection
            if (dx > 0) prev();
            else next();
        }

        touchStartXRef.current = null;
        touchStartTimeRef.current = null;
    };

    return {
        currentIndex,
        setCurrentIndex,
        prev,
        next,
        touchHandlers: {
            onTouchStart,
            onTouchEnd,
        },
    };
};
