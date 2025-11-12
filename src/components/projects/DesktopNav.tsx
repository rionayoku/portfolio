import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../data/projectsData';

interface DesktopNavProps {
    projects: Project[];
    selectedTab: number;
    onTabChange: (index: number) => void;
}

export const DesktopNav: React.FC<DesktopNavProps> = ({
    projects,
    selectedTab,
    onTabChange
}) => {
    return (
        <div className="hidden md:flex w-full md:w-1/4">
            <div className="relative flex flex-col w-full border-l-2 border-white/10">
                {projects.map((item, index) => (
                    <button
                        key={index}
                        data-project-index={index}
                        className={`relative w-full text-left p-4 pr-8 transition-colors duration-300 ${
                            selectedTab === index
                                ? 'text-[#00d9ff]'
                                : 'text-[#64748b] hover:bg-white/5 hover:text-[#e0e6ed]'
                        }`}
                        onClick={() => onTabChange(index)}
                    >
                        <span className="font-['Poppins'] font-semibold uppercase tracking-[1px]">
                            {item.shortLabel}
                        </span>
                        {selectedTab === index && (
                            <motion.div
                                layoutId="active-project-indicator"
                                className="absolute top-0 bottom-0 left-[-2px] w-[2px] bg-gradient-to-b from-[#00d9ff] to-[#8b5cf6] z-10"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
};
