import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Skill {
    icon: string;
    title: string;
    items: string[];
}

const skillsData: Skill[] = [
    { icon: 'fa-server', title: 'Data Center Ops', items: ['Rack & Device Management', 'Cabling Infrastructure', 'UPS, PAC, Rectifier Systems', 'Hardware Maintenance', 'Vendor Coordination'] },
    { icon: 'fa-chart-line', title: 'Network Monitoring', items: ['Zabbix (YAML/XML Templates)', 'SNMP Implementation', 'Cacti Traffic Monitoring', 'Real-time Alert Systems', 'Performance Analysis'] },
    { icon: 'fa-code', title: 'Scripting & Automation', items: ['Python (Zabbix API)', 'Telegram Bot Development', 'Bash Scripting', 'Task Automation', 'API Integration'] },
    { icon: 'fa-network-wired', title: 'Infrastructure', items: ['Ubuntu Server Administration', 'TrueNAS SCALE', 'Docker Containerization', 'Proxmox VE', 'Virtualization Platforms'] },
    { icon: 'fa-shield-alt', title: 'Network & Security', items: ['Firewall Configuration', 'DNS Management', 'VPN Implementation', 'NAT Configuration', 'Subnetting & VLAN'] },
    { icon: 'fa-globe', title: 'Web Stack', items: ['NGINX Configuration', 'Next.js Development', 'Node.js Applications', 'PostgreSQL, MySQL', 'Reverse Proxy Setup'] },
];

const Skills: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const handleTabChange = (index: number) => {
        setSelectedTab(index);

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
        <section className="py-16 lg:py-20 relative">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-[30px]">
                <div className="text-center mb-12">
                    <h2 className="section-title">Technical Expertise</h2>
                    <p className="text-[#64748b] text-lg md:text-xl font-light tracking-[1px]">Core Competencies & Technical Stack</p>
                </div>

                {/* Mobile Skill Navigation */}
                <div className="block md:hidden mb-8">
                    {/* Skill Counter & Navigation Hint */}
                    <div className="text-center mb-6">
                        <div className="inline-flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 border border-white/10">
                            <div className="w-2 h-2 bg-[#00d9ff] rounded-full animate-pulse"></div>
                            <span className="text-sm text-[#e0e6ed] font-medium">
                                Skill {selectedTab + 1} of {skillsData.length}
                            </span>
                        </div>
                        <p className="text-xs text-[#64748b] mt-2 font-light">
                            Swipe or tap to explore all skills
                        </p>
                    </div>

                    {/* Horizontal Scrollable Skill Cards */}
                    <div className="relative">
                        <div
                            ref={scrollContainerRef}
                            className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar"
                            style={{ scrollSnapType: 'x mandatory' }}
                        >
                            {skillsData.map((skill, index) => (
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
                                            {skill.title}
                                        </h3>
                                        <p className="text-xs text-[#64748b] line-clamp-2 leading-relaxed">
                                            {skill.items.slice(0, 3).join(', ')}
                                            {skill.items.length > 3 && '...'}
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
                            onClick={() => handleTabChange(Math.min(skillsData.length - 1, selectedTab + 1))}
                            disabled={selectedTab === skillsData.length - 1}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-8 h-8 bg-[#0a0f1c] border border-white/20 rounded-full flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-all duration-200"
                        >
                            <svg className="w-4 h-4 text-[#e0e6ed]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-4">
                        {skillsData.map((_, index) => (
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

                <div className="flex flex-col md:flex-row gap-10 min-h-[450px]">
                    {/* Desktop Tabs Navigation */}
                    <div className="hidden md:flex w-full md:w-1/4">
                        <div className="relative flex flex-col w-full border-l-2 border-white/10">
                             {skillsData.map((skill, index) => (
                                <button
                                    key={index}
                                    className={`relative w-full text-left p-4 pr-8 transition-colors duration-300 ${selectedTab === index ? 'text-[#00d9ff]' : 'text-[#64748b] hover:bg-white/5 hover:text-[#e0e6ed]'}`}
                                    onClick={() => setSelectedTab(index)}
                                >
                                    <span className="font-['Poppins'] font-semibold uppercase tracking-[1px]">{skill.title}</span>
                                    {selectedTab === index && (
                                        <motion.div
                                            layoutId="active-skill-indicator"
                                            className="absolute top-0 bottom-0 left-[-2px] w-[2px] bg-gradient-to-b from-[#00d9ff] to-[#8b5cf6] z-10"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Content Panel */}
                    <div className="w-full md:w-3/4">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 h-full"
                            >
                                <div>
                                    <div className="flex items-center gap-5 mb-8">
                                        <div className="w-[60px] h-[60px] bg-gradient-to-tr from-[#00d9ff] to-[#8b5cf6] rounded-[15px] flex items-center justify-center text-3xl text-[#050714]">
                                            <i className={`fa-solid ${skillsData[selectedTab].icon}`}></i>
                                        </div>
                                        <h3 className="font-['Poppins'] text-2xl font-semibold uppercase tracking-[1px]">{skillsData[selectedTab].title}</h3>
                                    </div>
                                    <ul className="list-none grid sm:grid-cols-2 gap-x-8 gap-y-4">
                                        {skillsData[selectedTab].items.map((item, i) => (
                                            <li key={i} className="py-2 text-[#64748b] flex items-center gap-4 text-base relative pl-6 before:content-['▸'] before:absolute before:left-0 before:text-[#00d9ff] before:text-xl">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
