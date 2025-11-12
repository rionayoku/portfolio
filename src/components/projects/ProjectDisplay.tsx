import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../data/projectsData';
import { ImageSlider } from './ImageSlider';

interface ProjectDisplayProps {
    project: Project;
    onOpenLightbox: (index: number) => void;
}

export const ProjectDisplay: React.FC<ProjectDisplayProps> = ({
    project,
    onOpenLightbox
}) => {
    return (
        <motion.div
            key={project.title}
            initial={{ opacity: 0.8, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0.8, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 h-full flex flex-col lg:flex-row gap-8"
            style={{ pointerEvents: 'auto' }}
        >
            <div className="w-full lg:w-1/2 flex-shrink-0" style={{ perspective: '1000px' }}>
                <ImageSlider images={project.images} onImageClick={onOpenLightbox} />
            </div>

            <div className="w-full lg:w-1/2 flex flex-col">
                <h3 className="font-['Poppins'] text-2xl font-bold mb-2 text-gradient">
                    {project.title}
                </h3>
                <div className="mb-4 flex flex-wrap gap-2">
                    {project.techStack?.replace(/^\s*Tech:\s*/i, '').split(',').filter(tag => tag.trim()).map((tag, index) => (
                        <span
                            key={`${tag.trim()}-${index}`}
                            className="px-3 py-1 rounded-full text-xs font-semibold text-[#e0e6ed] bg-gradient-to-r from-[#00d9ff1a] to-[#8b5cf61a] border border-white/10 shadow-[0_2px_10px_rgba(0,0,0,0.15)] hover:border-[#00d9ff55] transition-colors"
                        >
                            {tag.trim()}
                        </span>
                    ))}                </div>
                <ul className="text-[#a0aec0] leading-relaxed text-base space-y-3">
                    {Array.isArray(project.longDescription) ? (
                        project.longDescription.map((item, index) => {
                            // Validate item is either a string or an object with required fields
                            if (typeof item === 'string') {
                                return (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="text-[#00d9ff] text-lg font-bold mt-0.5 flex-shrink-0">
                                            •
                                        </span>
                                        <div className="flex-1">
                                            <span>{item}</span>
                                        </div>
                                    </li>
                                );
                            } else if (item && typeof item === 'object') {
                                // Validate object structure: main should be a string, features should be an array
                                const main = typeof item.main === 'string' ? item.main : '';
                                const features = Array.isArray(item.features) ? item.features : [];
                                
                                return (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="text-[#00d9ff] text-lg font-bold mt-0.5 flex-shrink-0">
                                            •
                                        </span>
                                        <div className="flex-1">
                                            <div className="space-y-3">
                                                {main && <span>{main}</span>}
                                                {features.length > 0 && (
                                                    <ul className="ml-4 space-y-2">
                                                        {features.map((feature, featureIndex) => (
                                                            <li key={featureIndex} className="flex items-start gap-2">
                                                                <span className="text-[#00d9ff] text-sm font-bold mt-1 flex-shrink-0">
                                                                    ◦
                                                                </span>
                                                                <span className="text-sm">{feature}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        </div>
                                    </li>
                                );
                            }
                            // Skip invalid items silently
                            return null;
                        })
                    ) : null}
                </ul>
            </div>
        </motion.div>
    );
};
