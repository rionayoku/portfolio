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
    const touchStartYRef = useRef<number | null>(null);
    const touchStartTimeRef = useRef<number | null>(null);

    const onTouchStart = (e: React.TouchEvent) => {
        // Guard: Don't track touches if lightbox is not open
        if (!isOpen) return;

        touchStartXRef.current = e.touches[0].clientX;
        touchStartYRef.current = e.touches[0].clientY;
        touchStartTimeRef.current = Date.now();
    };

    const onTouchEnd = (e: React.TouchEvent) => {
        // Guard: Don't handle touches if lightbox is not open
        if (!isOpen) return;

        const startX = touchStartXRef.current;
        const startY = touchStartYRef.current;
        const startTime = touchStartTimeRef.current;
        if (startX == null || startY == null || startTime == null) return;

        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;
        const dx = endX - startX;
        const dy = endY - startY;
        const dt = Date.now() - startTime;

        // Swipe detection: require primarily horizontal swipes
        if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) && dt < 1000) {
            if (dx > 0) prev();
            else next();
        }

        touchStartXRef.current = null;
        touchStartYRef.current = null;
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
