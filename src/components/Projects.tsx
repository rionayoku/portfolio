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

    const selectedProject = projectsData[selectedTab];

    const { currentIndex, setCurrentIndex, prev, next, touchHandlers } = useLightbox({
        imageCount: selectedProject.images.length,
        isOpen: isLightboxOpen,
        onClose: () => setIsLightboxOpen(false),
    });

    const handleOpenLightbox = (index: number) => {
        console.log('🔍 handleOpenLightbox called with index:', index, 'Project:', selectedProject.title);
        console.log('📊 Current state - isLightboxOpen:', isLightboxOpen, 'currentIndex:', currentIndex);
        setCurrentIndex(index);
        setIsLightboxOpen(true);
        console.log('✅ Lightbox state updated');
    };

    const handleTabChange = (index: number) => {
        console.log('Changing to project tab:', index, 'Project:', projectsData[index].title);
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
