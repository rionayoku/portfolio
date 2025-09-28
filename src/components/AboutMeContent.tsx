import React from 'react';
import { motion } from 'framer-motion';

const AboutMeContent: React.FC = () => {
    const handleProjectClick = (projectId: string) => {
        const element = document.querySelector('#projects');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setTimeout(() => {
                const projectTab = document.querySelector(`[data-project-index="${projectId}"]`) as HTMLElement;
                if (projectTab) projectTab.click();
            }, 500);
        }
    };

    return (
        <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
            <div className="text-[#e0e6ed] text-sm md:text-base lg:text-lg leading-relaxed">
                <p className="text-left md:text-justify">
                    I am an IT Network & Systems Engineer with experience across Indonesia—specialized in network monitoring, automation, and data center ops. I love solving challenging connectivity problems and bringing reliable systems to remote locations.
                </p>
            </div>
        </motion.div>
    );
};

export default AboutMeContent;
