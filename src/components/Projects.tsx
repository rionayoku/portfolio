import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface Project {
    shortLabel: string;
    title: string;
    techStack: string;
    longDescription: (string | { main: string; features: string[] })[];
    images: string[];
}

const projectsData: Project[] = [
    {
        shortLabel: 'Network Monitoring',
        title: 'Zabbix Monitoring',
        techStack: 'Tech: Interactive Telegram Bot, Python, API Integration, Automation, Zabbix,Cacti, SNMP, Network Infrastructure, RRDtool',
        longDescription: [
            'Designed and deployed a comprehensive monitoring solution using Zabbix and Cacti to track the health of critical network infrastructure, including routers, switches, and servers',
            {
                main: 'Engineered an interactive, command-driven Telegram bot in Python that integrated with the Zabbix API. This bot empowered the technical team with the following capabilities:',
                features: [
                    'Receive proactive alerts on performance degradation and outages',
                    'Execute on-demand status checks on any monitored device',
                    'List all registered hosts and retrieve real-time data without needing system access'
                ]
            },
            'Achieved 99.9% uptime visibility with proactive monitoring and detailed analytics'
        ],
        images: [
            `${import.meta.env.BASE_URL}src/images/TTC/zabbix-dashboard.png`,
            `${import.meta.env.BASE_URL}src/images/TTC/Cacti.png`,
            `${import.meta.env.BASE_URL}src/images/TTC/network-topology.png`,
            `${import.meta.env.BASE_URL}src/images/TTC/cacti1.png`
        ]
    },
    {
        shortLabel: 'Sarmi-Mamberamo Wireless Network',
        title: 'Government Wireless Network (PtMP)',
        techStack: 'Tech: MikroTik RouterOS, Ubiquiti airFiber, Microwave Backhaul, Solar Power Systems, VLANs, QoS, VPN, L2TP',
        longDescription: [
            'Integrated MikroTik routers with existing Palapa Ring Timur (PTT) long-distance microwave links to establish internet access for remote locations.',
            'Led planning and deployment of point-to-multipoint (PtMP) wireless network',
            'Managed tower site installations, link planning optimization, and supported deployment of on-site equipment shelters with integrated solar power systems to ensure continuous remote operations.',
            'Connected multiple government offices across 10+ km of challenging mountainous terrain',
            'Configured and managed MikroTik RouterOS devices in production networks.',          
        ],
        images: [
            `${import.meta.env.BASE_URL}src/images/Mamberamo/jyp-sarmi-mamberamo_optimized.mp4`,
            `${import.meta.env.BASE_URL}src/images/Mamberamo/mi.jpeg`,
            `${import.meta.env.BASE_URL}src/images/Mamberamo/Sarmi-Burmeso.png`,
            `${import.meta.env.BASE_URL}src/images/Mamberamo/ptt.jpg`,
            `${import.meta.env.BASE_URL}src/images/Mamberamo/mountain3towerinstallation.jpeg`,
            `${import.meta.env.BASE_URL}src/images/Mamberamo/Burmeso2.png`,
            `${import.meta.env.BASE_URL}src/images/Mamberamo/mountain2towerinstallation.jpeg`,
            `${import.meta.env.BASE_URL}src/images/Mamberamo/ptt-tower-burmeso1.jpg`,
            `${import.meta.env.BASE_URL}src/images/Mamberamo/ptt-tower-burmeso2.jpg`,
            `${import.meta.env.BASE_URL}src/images/Mamberamo/mountain1towerinstallationShelter.jpg`,
            `${import.meta.env.BASE_URL}src/images/Mamberamo/mountain4towerinstallation.jpg`,
            `${import.meta.env.BASE_URL}src/images/Mamberamo/mountain5towerinstallation.jpg`,
            `${import.meta.env.BASE_URL}src/images/Mamberamo/mountain6towerinstallation.jpg`            
        ]
    },
    {
        shortLabel: 'PON PAPUA 2020 CCTV Surveillance',
        title: 'CCTV Surveillance System',
        techStack: 'Tech: CCTV Cameras, Video Surveillance, Network Security, PONPAPUA2020, L2TP, MikroTik',
        longDescription: [
            'Designed and installed comprehensive CCTV surveillance systems',
            'Integrated network cameras and video management software',
            'Implemented secure storage solutions and real-time surveillance capabilities',
            'Configured video analytics and remote monitoring systems',
            'Enhanced security and incident prevention through advanced monitoring'
        ],
        images: [
            `${import.meta.env.BASE_URL}src/images/cctv-project/cctvss_optimized.mp4`,            
            `${import.meta.env.BASE_URL}src/images/cctv-project/networkdiagram.jpg`
        ]
    },
    {
        shortLabel: 'Wamena-Jayapura Link',
        title: 'Wamena to Jayapura Wireless Link',
        techStack: 'Tech: AirFiber Microwave Backhaul, Solar Power Systems, Helicopter Transport, Point-to-Point Wireless',
        longDescription: [
            'Established wireless connection from Wamena to Jayapura using Ubiquiti airFiber professional-grade point-to-point microwave links',
            'Installed equipment on Cyclop Mountain requiring helicopter transport logistics',
            'Built protective shelter and implemented solar panel power systems',
            'Overcame significant logistical and technical challenges in remote location',
            'Achieved reliable connectivity over 50+ km of mountainous terrain',
            'Ensured continuous operation in harsh environmental conditions'
        ],
        images: [
            `${import.meta.env.BASE_URL}src/images/YongsuProject/yongsu.png`,
            `${import.meta.env.BASE_URL}src/images/YongsuProject/yongsu2.png`,
            `${import.meta.env.BASE_URL}src/images/YongsuProject/yongsucliff.png`,
            `${import.meta.env.BASE_URL}src/images/YongsuProject/yongsucliff2.png`,
            `${import.meta.env.BASE_URL}src/images/YongsuProject/heli1.png`,
            `${import.meta.env.BASE_URL}src/images/YongsuProject/heli2.png`,
            `${import.meta.env.BASE_URL}src/images/YongsuProject/heli3.png`,
            `${import.meta.env.BASE_URL}src/images/YongsuProject/heli4.png`,
            `${import.meta.env.BASE_URL}src/images/YongsuProject/heli5.png`,
            `${import.meta.env.BASE_URL}src/images/YongsuProject/heli6.png`,
            `${import.meta.env.BASE_URL}src/images/YongsuProject/heli7.png`,
            `${import.meta.env.BASE_URL}src/images/YongsuProject/heli8.png`,
            `${import.meta.env.BASE_URL}src/images/YongsuProject/heli9.png`,
            `${import.meta.env.BASE_URL}src/images/YongsuProject/heli10.png`,
            `${import.meta.env.BASE_URL}src/images/YongsuProject/dormena.png`
        ]
    },
    {
        shortLabel: 'PTMP Network',
        title: 'PT Internusa Clients Network',
        techStack: 'Tech: Wifi Network, PTMP Network, MikroTik RouterOS, Ubiquiti',
        longDescription: [
            'Designed and implemented network infrastructure for PT Internusa Total Solution',
            'Configured WiFi and PTMP network solutions for client connectivity',
            'Utilized MikroTik RouterOS and Ubiquiti equipment for reliable performance',
            'Provided ongoing technical support and network maintenance',
            'Ensured stable connectivity for business operations'
        ],
        images: [
            `${import.meta.env.BASE_URL}src/images/TVRI/1.jpeg`,
            `${import.meta.env.BASE_URL}src/images/TVRI/2.jpeg`,
            `${import.meta.env.BASE_URL}src/images/TVRI/3.jpeg`,
            `${import.meta.env.BASE_URL}src/images/TVRI/4.jpeg`,
            `${import.meta.env.BASE_URL}src/images/TVRI/5.jpeg`,
            `${import.meta.env.BASE_URL}src/images/TVRI/6.jpeg`,
            `${import.meta.env.BASE_URL}src/images/TVRI/7.jpeg`,
            `${import.meta.env.BASE_URL}src/images/TVRI/mi6.jpeg`
        ]
    },
    {
        shortLabel: 'International Business Machines (IBM)',
        title: 'IBM Banking Machines',
        techStack: 'Tech: CRM/CDM machines, Banking Machines, Field Support Engineer',
        longDescription: [
            'Performed full-lifecycle support for banking machines (Hitachi-Omron, Wincor, Hyosung)',
            'Served as field support engineer for major banks (BCA, BNI, Bank Muamat)',
            'Maintained 99.5% operational uptime across Papua region ( Jayapura, Merauke, Sorong, Manokwari, Nabire, Timika)',
            'Provided installation, maintenance, and troubleshooting services for banking machines'
        ],
        images: [
            `${import.meta.env.BASE_URL}src/images/IBM/50thfloorIBM.jpg`,
            `${import.meta.env.BASE_URL}src/images/IBM/lobbyIBM.jpg`
        ]
    },

    {
        shortLabel: 'Pajak Bumi & Bangunan Kabupaten Jayapura',
        title: 'PBB Tax System Development',
        techStack: 'Tech: Oracle, SQL, Win Server 2008, Active Directory, DNS, Tax System',
        longDescription: [
            'Provided Oracle 11g database administration for government tax system project',
            'Performed troubleshooting, user access management, and backup operations',
            'Configured Windows Server 2008 with Active Directory and DNS services',
            'Ensured data integrity and system reliability for critical government operations',
            'Maintained 24/7 system availability for tax processing functions'
        ],
        images: [
            `${import.meta.env.BASE_URL}src/images/ProjectPBBkabJYp/pbbkabjyp1.jpg`,
            `${import.meta.env.BASE_URL}src/images/ProjectPBBkabJYp/pbbkabjyp2.jpg`,
            `${import.meta.env.BASE_URL}src/images/ProjectPBBkabJYp/pbbkabjyp3.jpg`,
            `${import.meta.env.BASE_URL}src/images/ProjectPBBkabJYp/pbbkabjyp4.jpg`,
            `${import.meta.env.BASE_URL}src/images/ProjectPBBkabJYp/pbbkabjyp5.jpg`
        ]
    },
    {
        shortLabel: 'Wireless Installations',
        title: 'Wireless Network Installations',
        techStack: 'Tech: MikroTik RouterOS, Ubiquiti, WiFi Analysis, Point-to-Point, Point-to-Multipoint',
        longDescription: [
            'Deployed multiple wireless network projects including P2P, PTMP links and WiFi installations',
            'Utilized MikroTik routers and Ubiquiti equipment for reliable connectivity',
            'Conducted comprehensive site surveys and signal analysis for optimal coverage',
            'Optimized network configurations for maximum performance and reliability',
            'Implemented solutions across various challenging environments and terrains'
        ],
        images: [
            `${import.meta.env.BASE_URL}src/images/WIFI-Installations/wifi-analyzer.jpeg`,
            `${import.meta.env.BASE_URL}src/images/WIFI-Installations/wifi-dish.jpeg`,
            `${import.meta.env.BASE_URL}src/images/WIFI-Installations/wifi-dish2.jpeg`,
            `${import.meta.env.BASE_URL}src/images/WIFI-Installations/wifi-dish3.jpeg`,
            `${import.meta.env.BASE_URL}src/images/WIFI-Installations/site1.jpeg`,
            `${import.meta.env.BASE_URL}src/images/WIFI-Installations/router-mikrotik.jpeg`
        ]
    },
    {
        shortLabel: 'Aston Hotel Network',
        title: 'Hotel Network Infrastructure',
        techStack: 'Tech: Hospitality Networking, Guest WiFi, Property Management',
        longDescription: [
            'Developed complete network infrastructure for hotel properties',
            'Implemented guest WiFi systems and property management network integration',
            'Configured secure connectivity for hospitality services',
            'Ensured high-speed internet access and secure payment processing',
            'Delivered reliable communication systems for enhanced guest experience'
        ],
        images: [
            `${import.meta.env.BASE_URL}src/images/HotelAstonJYP/astonHotel.jpg`
        ]
    },
];


const Projects: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [[page, direction], setPage] = useState([0, 0]);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const handleTabChange = (index: number) => {
        setSelectedTab(index);
        setPage([0, 0]); // Reset image index and direction when changing projects

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

    const project = projectsData[selectedTab];
    const images = project.images;
    const imageIndex = (page % images.length + images.length) % images.length;

    const isVideo = (src: string) => /\.(mp4|webm|ogg)$/i.test(src);

 
    const [isAutoSliding, setIsAutoSliding] = useState(true);

    
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    
    useEffect(() => {
        if (!isAutoSliding || images.length <= 1 || lightboxOpen) return;

        const isCurrentVideo = isVideo(images[imageIndex]);
        const delayMs = isCurrentVideo ? 50000 : 4000; // 50s for videos, 4s for images

        const timeout = setTimeout(() => {
            setPage(prev => [prev[0] + 1, 1]);
        }, delayMs);

        return () => clearTimeout(timeout);
    }, [isAutoSliding, images.length, imageIndex, lightboxOpen]);

   
    const handleMouseEnter = () => setIsAutoSliding(false);
    const handleMouseLeave = () => setIsAutoSliding(true);

    const openLightbox = (index: number) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => setLightboxOpen(false);

    const lightboxPrev = () => setLightboxIndex((idx) => (idx - 1 + images.length) % images.length);
    const lightboxNext = () => setLightboxIndex((idx) => (idx + 1) % images.length);

    
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (!lightboxOpen) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') lightboxPrev();
            if (e.key === 'ArrowRight') lightboxNext();
        };

        if (lightboxOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = '';

        window.addEventListener('keydown', onKey);
        return () => {
            window.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [lightboxOpen, images.length]);

    
    const touchStartXRef = useRef<number | null>(null);
    const touchStartTimeRef = useRef<number | null>(null);

    const onLightboxTouchStart = (e: React.TouchEvent) => {
        touchStartXRef.current = e.touches[0].clientX;
        touchStartTimeRef.current = Date.now();
    };

    
    const [lightboxIsPortrait, setLightboxIsPortrait] = useState(false);
    const onLightboxImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
        const img = e.currentTarget;
        setLightboxIsPortrait(img.naturalHeight > img.naturalWidth);
    };

    const onLightboxTouchEnd = (e: React.TouchEvent) => {
        const startX = touchStartXRef.current;
        const startTime = touchStartTimeRef.current;
        if (startX == null || startTime == null) return;
        const endX = e.changedTouches[0].clientX;
        const dx = endX - startX;
        const dt = Date.now() - startTime;
        const absDx = Math.abs(dx);        
        if (absDx > 40 && dt < 1000) {
            if (dx > 0) lightboxPrev();
            else lightboxNext();
        }
        touchStartXRef.current = null;
        touchStartTimeRef.current = null;
    };


    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

    const jumpToImage = (index: number) => {
        const newDirection = index > imageIndex ? 1 : -1;
        setPage([index, newDirection]);
    }
    
    const sliderVariants = {
      enter: (direction: number) => ({
        x: direction > 0 ? 300 : -300,
        opacity: 0,
        rotateY: direction > 0 ? -60 : 60,
        scale: 0.8
      }),
      center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
        rotateY: 0,
        scale: 1
      },
      exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? 300 : -300,
        opacity: 0,
        rotateY: direction < 0 ? 60 : -60,
        scale: 0.8
      })
    };
    
    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };


    return (
        <section className="py-16 lg:py-20 relative">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-[30px]">
                <div className="text-center mb-12">
                    <h2 className="section-title">Projects</h2>                    
                </div>

                 {/* Mobile Project Navigation */}
                <div className="block md:hidden mb-8">
                    {/* Project Counter & Navigation Hint */}
                    <div className="text-center mb-6">
                        <div className="inline-flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 border border-white/10">
                            <div className="w-2 h-2 bg-[#00d9ff] rounded-full animate-pulse"></div>
                            <span className="text-sm text-[#e0e6ed] font-medium">
                                Project {selectedTab + 1} of {projectsData.length}
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
                            {projectsData.map((project, index) => (
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
                            onClick={() => handleTabChange(Math.min(projectsData.length - 1, selectedTab + 1))}
                            disabled={selectedTab === projectsData.length - 1}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-8 h-8 bg-[#0a0f1c] border border-white/20 rounded-full flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-all duration-200"
                        >
                            <svg className="w-4 h-4 text-[#e0e6ed]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-4">
                        {projectsData.map((_, index) => (
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
                             {projectsData.map((item, index) => (
                                <button
                                    key={index}
                                    data-project-index={index}
                                    className={`relative w-full text-left p-4 pr-8 transition-colors duration-300 ${selectedTab === index ? 'text-[#00d9ff]' : 'text-[#64748b] hover:bg-white/5 hover:text-[#e0e6ed]'}`}
                                    onClick={() => handleTabChange(index)}
                                >
                                    <span className="font-['Poppins'] font-semibold uppercase tracking-[1px]">{item.shortLabel}</span>
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

                     {/* Content Panel */}
                    <div className="w-full md:w-3/4">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedTab}
                                initial={{ opacity: 0.8, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0.8, y: -20 }}
                                transition={{ duration: 0.4 }}
                                className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 h-full flex flex-col lg:flex-row gap-8"
                            >
                                {/* Image Slider FIRST */}
                                <div className="w-full lg:w-1/2 flex-shrink-0" style={{ perspective: '1000px' }}>
                                    <div
                                        className="project-slider-container relative w-full aspect-[4/3] overflow-hidden rounded-lg border border-white/10"
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                        style={{ zIndex: 1 }}
                                    >
                                        <AnimatePresence initial={false} custom={direction}>
                                            <motion.div
                                                key={page}
                                                custom={direction}
                                                variants={sliderVariants}
                                                initial="enter"
                                                animate="center"
                                                exit="exit"
                                                transition={{
                                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                                    rotateY: { type: "spring", stiffness: 300, damping: 30 },
                                                    opacity: { duration: 0.2 }
                                                }}
                                                className="absolute w-full h-full"
                                                style={{ pointerEvents: 'auto' }}
                                            >
                                                {isVideo(images[imageIndex]) ? (
                                                    <video
                                                        src={images[imageIndex]}
                                                        className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity duration-200"
                                                        autoPlay
                                                        muted
                                                        loop
                                                        playsInline
                                                        preload="none"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            e.stopPropagation();
                                                            openLightbox(imageIndex);
                                                        }}
                                                    />
                                                ) : (
                                                    <LazyLoadImage
                                                        src={images[imageIndex]}
                                                        alt={`Project image ${imageIndex + 1}`}
                                                        className="w-full h-full object-cover cursor-pointer active:cursor-grabbing hover:opacity-90 transition-opacity duration-200"
                                                        effect="blur"
                                                        draggable={false}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            e.stopPropagation();
                                                            openLightbox(imageIndex);
                                                        }}
                                                    />
                                                )}

                                            
                                            </motion.div>
                                        </AnimatePresence>
                                        
                                        {images.length > 1 && (
                                            <>
                                                <button
                                                    aria-label="Previous Image"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        paginate(-1);
                                                    }}
                                                    className="slider-arrow left-2 md:left-4"
                                                    style={{ pointerEvents: 'auto' }}
                                                >
                                                    <i className="fa-solid fa-chevron-left"></i>
                                                </button>
                                                <button
                                                    aria-label="Next Image"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        paginate(1);
                                                    }}
                                                    className="slider-arrow right-2 md:right-4"
                                                    style={{ pointerEvents: 'auto' }}
                                                >
                                                    <i className="fa-solid fa-chevron-right"></i>
                                                </button>
                                            </>
                                        )}
                                        
                                        <div className="slider-dots">
                                            {images.map((_, i) => (
                                                <button
                                                  aria-label={`Go to image ${i + 1}`}
                                                  key={i}
                                                  className={`slider-dot ${imageIndex === i ? 'active' : ''}`}
                                                  onClick={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    jumpToImage(i);
                                                  }}
                                                  style={{ pointerEvents: 'auto' }}
                                                ></button>
                                            ))}
                                        </div>
                                        
                                        {/* Auto-slide indicator */}
                                        {images.length > 1 && (
                                            <div className="absolute top-3 right-3 bg-black/50 rounded-full p-2">
                                                <i className={`fa-solid ${isAutoSliding ? 'fa-pause' : 'fa-play'} text-white text-xs`}></i>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Description BELOW */}
                                <div className="w-full lg:w-1/2 flex flex-col">
                                    <h3 className="font-['Poppins'] text-2xl font-bold mb-2 text-gradient">{project.title}</h3>
                                    <div className="mb-4 flex flex-wrap gap-2">
                                        {project.techStack.replace(/^\s*Tech:\s*/i, '').split(',').map((tag) => (
                                            <span
                                                key={tag.trim()}
                                                className="px-3 py-1 rounded-full text-xs font-semibold text-[#e0e6ed] bg-gradient-to-r from-[#00d9ff1a] to-[#8b5cf61a] border border-white/10 shadow-[0_2px_10px_rgba(0,0,0,0.15)] hover:border-[#00d9ff55] transition-colors"
                                            >
                                                {tag.trim()}
                                            </span>
                                        ))}
                                    </div>
                                    <ul className="text-[#a0aec0] leading-relaxed text-base space-y-3">
                                        {project.longDescription.map((item, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <span className="text-[#00d9ff] text-lg font-bold mt-0.5 flex-shrink-0">•</span>
                                                <div className="flex-1">
                                                    {typeof item === 'string' ? (
                                                        <span>{item}</span>
                                                    ) : (
                                                        <div className="space-y-3">
                                                            <span>{item.main}</span>
                                                            <ul className="ml-4 space-y-2">
                                                                {item.features.map((feature, featureIndex) => (
                                                                    <li key={featureIndex} className="flex items-start gap-2">
                                                                        <span className="text-[#00d9ff] text-sm font-bold mt-1 flex-shrink-0">◦</span>
                                                                        <span className="text-sm">{feature}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                        {/* Lightbox modal for full-size images */}
                        <AnimatePresence>
                            {lightboxOpen && (
                                <motion.div
                                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                                    style={{
                                        background: 'rgba(0, 0, 0, 0.9)',
                                        backdropFilter: 'blur(8px)'
                                    }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    onClick={closeLightbox}
                                >
                                    {/* Close button */}
                                    <motion.button
                                        className="absolute top-4 right-4 md:top-6 md:right-6 text-white text-3xl p-3 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-200 z-[10000]"
                                        style={{ zIndex: 10000 }}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            closeLightbox();
                                        }}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        ✕
                                    </motion.button>

                                    {/* Previous button */}
                                    <motion.button
                                        className="absolute left-4 md:left-8 text-white text-4xl p-4 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-200 z-[10000]"
                                        style={{ zIndex: 10000 }}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            lightboxPrev();
                                        }}
                                        whileHover={{ scale: 1.1, x: -2 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        ‹
                                    </motion.button>

                                    {/* Main content */}
                                    <motion.div
                                        className={`max-w-[95vw] max-h-[95vh] flex items-center justify-center p-2 ${lightboxIsPortrait ? 'px-6' : ''}`}
                                        onClick={(e) => e.stopPropagation()}
                                        onTouchStart={onLightboxTouchStart}
                                        onTouchEnd={onLightboxTouchEnd}
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ scale: 0.8, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {isVideo(images[lightboxIndex]) ? (
                                            <video
                                                src={images[lightboxIndex]}
                                                className="max-w-[95vw] max-h-[95vh] rounded-lg shadow-2xl"
                                                autoPlay
                                                muted
                                                loop
                                                playsInline
                                                preload="none"
                                                controls={false}
                                            />
                                        ) : (
                                            <img
                                                src={images[lightboxIndex]}
                                                className={`rounded-lg shadow-2xl ${lightboxIsPortrait ? 'max-h-[90vh] w-auto' : 'max-w-[95vw] max-h-[95vh] h-auto w-auto'}`}
                                                draggable={false}
                                                onLoad={onLightboxImageLoad}
                                            />
                                        )}
                                    </motion.div>

                                    {/* Next button */}
                                    <motion.button
                                        className="absolute right-4 md:right-8 text-white text-4xl p-4 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-200 z-[10000]"
                                        style={{ zIndex: 10000 }}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            lightboxNext();
                                        }}
                                        whileHover={{ scale: 1.1, x: 2 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        ›
                                    </motion.button>

                                    {/* Image counter */}
                                    <motion.div
                                        className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-medium"
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        {lightboxIndex + 1} / {images.length}
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
