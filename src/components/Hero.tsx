import React from 'react';
import { motion } from 'framer-motion';
import { WordRotate } from './WordRotate';
    import TerminalHero from './TerminalHero';

const ALL_ICONS = [
    `${import.meta.env.BASE_URL}src/images/tech-icons/Mikrotik.svg`,
    `${import.meta.env.BASE_URL}src/images/tech-icons/ubiquiti.svg`,
    `${import.meta.env.BASE_URL}src/images/tech-icons/cacti_logo.svg`,
    `${import.meta.env.BASE_URL}src/images/tech-icons/oracle-1.svg`,
    `${import.meta.env.BASE_URL}src/images/tech-icons/Truenas.svg`,
    `${import.meta.env.BASE_URL}src/images/tech-icons/ibm.svg`,
    `${import.meta.env.BASE_URL}src/images/tech-icons/ubuntu-4.svg`,
    `${import.meta.env.BASE_URL}src/images/tech-icons/python-5.svg`,
    `${import.meta.env.BASE_URL}src/images/tech-icons/Nextjs.svg`,
    `${import.meta.env.BASE_URL}src/images/tech-icons/proxmox.svg`,
    `${import.meta.env.BASE_URL}src/images/tech-icons/zabbix-1.svg`,
    `${import.meta.env.BASE_URL}src/images/tech-icons/docker-4.svg`,
    `${import.meta.env.BASE_URL}src/images/tech-icons/Vite.svg`,
    `${import.meta.env.BASE_URL}src/images/tech-icons/telkomsel-new-logo-2021.svg`
];

const repeatedIcons = (icons: string[], repeat = 2) => Array.from({ length: repeat }).flatMap(() => icons);

const Hero: React.FC = () => {

    const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        if (href) {
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

    return (
        <section id="home" className="text-slate-100 overflow-hidden relative">
            <div className="relative z-10 flex flex-col text-center max-w-7xl mx-auto" style={{ padding: '20px', paddingBottom: '60px' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ marginTop: '80px' }}>
                    <motion.p
                        className="font-['Poppins'] text-[clamp(1rem,4vw,2.2rem)] text-slate-300 mb-2 font-bold tracking-[3px] uppercase"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        IT Network & Systems Engineer
                    </motion.p>
                    <motion.div
                        className="mb-6"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <WordRotate
                            words={[
                                "Data Center Operations",
                                "IT Infrastructure Specialist",
                                "System Administration",
                                "Network Monitoring & Automation",
                                "Network & Security Implementation",
                                "Enterprise Technical Support"
                            ]}
                            className="font-['Poppins'] font-bold uppercase tracking-wider text-lg md:text-xl lg:text-2xl text-gradient"
                        />
                    </motion.div>
                    <motion.div
                        className="w-full overflow-hidden"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <TerminalHero />
                    </motion.div>
                </div>

                <motion.div
                    className="relative pb-1 w-full max-w-6xl mx-auto mt-2 flex items-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                >
                    <div className="text-left flex-shrink-0 hidden md:block">
                        <span className="text-slate-400 text-sm md:text-base font-medium">
                            Tech &<br />
                            Companies
                        </span>
                    </div>
                    <div className="w-px bg-slate-400 h-16 flex-shrink-0 hidden md:block"></div>
                    <div
                        className="relative overflow-hidden flex-1"
                        style={{
                            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                            maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)'
                        }}
                    >
                        <motion.div
                            className="flex gap-6 md:gap-10 whitespace-nowrap"
                            animate={{ x: '-50%' }}
                            transition={{ ease: 'linear', duration: 20, repeat: Infinity, repeatType: 'loop' }}
                        >
                            {repeatedIcons(ALL_ICONS, 4).map((src, i) => (
                            <div key={i} className="h-14 w-14 md:h-16 md:w-16 flex-shrink-0 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] shadow-md flex items-center justify-center p-2">
                                <img src={src} alt="Technology Icon" className="h-full w-full object-contain" />
                            </div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

    export default Hero;
