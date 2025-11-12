import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { projectsData, Project } from '../data/projectsData';
import { useLightbox } from '../hooks/useLightbox';

// Import the separated components
import { DesktopNav } from './projects/DesktopNav';
import { MobileNav } from './projects/MobileNav';
import { ProjectDisplay } from './projects/ProjectDisplay';
import { Lightbox } from './projects/Lightbox';

const Projects: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const selectedProject = projectsData[selectedTab] || projectsData[0];
    
    if (!selectedProject || !projectsData.length) {
        return <section className="py-16 lg:py-20"><div className="max-w-[1400px] mx-auto px-6"><p>No projects available</p></div></section>;
    }

    const { currentIndex, setCurrentIndex, prev, next, touchHandlers } = useLightbox({
        imageCount: selectedProject.images?.length || 0,
        isOpen: isLightboxOpen,
        onClose: () => setIsLightboxOpen(false),
    });

    const handleOpenLightbox = (index: number) => {
        setCurrentIndex(index);
        setIsLightboxOpen(true);
    };

    const handleTabChange = (index: number) => {
        setSelectedTab(index);
    };
    return (
        <section className="py-16 lg:py-20 relative">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-[30px]">
                <div className="text-center mb-12">
                    <h2 className="section-title">Projects</h2>
                </div>

                <MobileNav
                    projects={projectsData}
                    selectedTab={selectedTab}
                    onTabChange={handleTabChange}
                />

                <div className="flex flex-col md:flex-row gap-10 min-h-[450px]">
                    <DesktopNav
                        projects={projectsData}
                        selectedTab={selectedTab}
                        onTabChange={handleTabChange}
                    />

                    <div className="w-full md:w-3/4">
                        <AnimatePresence mode="wait">
                            <ProjectDisplay
                                key={selectedTab}
                                project={selectedProject}
                                onOpenLightbox={handleOpenLightbox}
                            />
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            <Lightbox
                isOpen={isLightboxOpen}
                images={selectedProject.images}
                currentIndex={currentIndex}
                onClose={() => setIsLightboxOpen(false)}
                onPrev={prev}
                onNext={next}
                touchHandlers={touchHandlers}
            />
        </section>
    );
};

export default Projects;
