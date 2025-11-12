import React, { useRef } from 'react';
import { Project } from '../../data/projectsData';

interface MobileNavProps {
    projects: Project[];
    selectedTab: number;
    onTabChange: (index: number) => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({
    projects,
    selectedTab,
    onTabChange
}) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const handleTabChange = (index: number) => {
        onTabChange(index);

        // Scroll the selected card into view in the horizontal list
        if (scrollContainerRef.current) {
            const selectedCard = scrollContainerRef.current.children[index] as HTMLElement;
            if (selectedCard) {
                const container = scrollContainerRef.current;
                const containerWidth = container.clientWidth;
                const cardWidth = selectedCard.offsetWidth;
                const cardLeft = selectedCard.offsetLeft;

                // Calculate the position to center the card in the container
                const targetScrollLeft = cardLeft - (containerWidth / 2) + (cardWidth / 2);

                container.scrollTo({
                    left: Math.max(0, targetScrollLeft),
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <div className="block md:hidden mb-8">
            {/* Project Counter & Navigation Hint */}
            <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 border border-white/10">
                    <div className="w-2 h-2 bg-[#00d9ff] rounded-full animate-pulse"></div>
                    <span className="text-sm text-[#e0e6ed] font-medium">
                        Project {selectedTab + 1} of {projects.length}
                    </span>
                </div>
                <p className="text-xs text-[#64748b] mt-2 font-light">
                    Swipe or tap to explore all projects
                </p>
            </div>

            {/* Horizontal Scrollable Project Cards */}
            <div className="relative">
                <div
                    ref={scrollContainerRef}
                    className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar"
                    style={{ scrollSnapType: 'x mandatory' }}
                >
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`flex-shrink-0 w-64 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                                selectedTab === index
                                    ? 'border-[#00d9ff] bg-gradient-to-br from-[#00d9ff]/10 to-[#8b5cf6]/10 shadow-lg shadow-[#00d9ff]/20'
                                    : 'border-white/20 bg-white/5 hover:border-white/40 hover:bg-white/10'
                            }`}
                            onClick={() => handleTabChange(index)}
                            style={{ scrollSnapAlign: 'start' }}
                        >
                            <div className="p-4">
                                <div className="flex items-center justify-between mb-3">
                                    <div className={`w-3 h-3 rounded-full ${
                                        selectedTab === index ? 'bg-[#00d9ff] animate-pulse' : 'bg-white/30'
                                    }`}></div>
                                    <span className="text-xs text-[#64748b] font-medium">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                </div>
                                <h3 className="font-['Poppins'] text-sm font-bold text-[#e0e6ed] uppercase tracking-[0.5px] mb-2 line-clamp-2">
                                    {project.shortLabel}
                                </h3>
                                <p className="text-xs text-[#64748b] line-clamp-2 leading-relaxed">
                                    {typeof project.longDescription[0] === 'string'
                                        ? project.longDescription[0]
                                        : project.longDescription[0].main
                                    }
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={() => handleTabChange(Math.max(0, selectedTab - 1))}
                    disabled={selectedTab === 0}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-8 h-8 bg-[#0a0f1c] border border-white/20 rounded-full flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-all duration-200"
                >
                    <svg className="w-4 h-4 text-[#e0e6ed]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    onClick={() => handleTabChange(Math.min(projects.length - 1, selectedTab + 1))}
                    disabled={selectedTab === projects.length - 1}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-8 h-8 bg-[#0a0f1c] border border-white/20 rounded-full flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-all duration-200"
                >
                    <svg className="w-4 h-4 text-[#e0e6ed]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-4">
                {projects.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleTabChange(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                            selectedTab === index
                                ? 'bg-[#00d9ff] w-6'
                                : 'bg-white/30 hover:bg-white/50'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};
