export interface Project {
    shortLabel: string;
    title: string;
    techStack: string;
    longDescription: (string | { main: string; features: string[] })[];
    images: string[];
}

export const projectsData: Project[] = [
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
            new URL('../../images/TTC/zabbix-dashboard.png', import.meta.url).href,
            new URL('../../images/TTC/Cacti.png', import.meta.url).href,
            new URL('../../images/TTC/network-topology.png', import.meta.url).href,
            new URL('../../images/TTC/cacti1.png', import.meta.url).href
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
            'Configured and managed MikroTik RouterOS devices in production networks.'
        ],
        images: [
            new URL('../../images/Mamberamo/jyp-sarmi-mamberamo_optimized.mp4', import.meta.url).href,
            new URL('../../images/Mamberamo/mi.jpeg', import.meta.url).href,
            new URL('../../images/Mamberamo/Sarmi-Burmeso.png', import.meta.url).href,
            new URL('../../images/Mamberamo/ptt.jpg', import.meta.url).href,
            new URL('../../images/Mamberamo/mountain3towerinstallation.jpeg', import.meta.url).href,
            new URL('../../images/Mamberamo/Burmeso2.png', import.meta.url).href,
            new URL('../../images/Mamberamo/mountain2towerinstallation.jpeg', import.meta.url).href,
            new URL('../../images/Mamberamo/ptt-tower-burmeso1.jpg', import.meta.url).href,
            new URL('../../images/Mamberamo/ptt-tower-burmeso2.jpg', import.meta.url).href,
            new URL('../../images/Mamberamo/mountain1towerinstallationShelter.jpg', import.meta.url).href,
            new URL('../../images/Mamberamo/mountain4towerinstallation.jpg', import.meta.url).href,
            new URL('../../images/Mamberamo/mountain5towerinstallation.jpg', import.meta.url).href,
            new URL('../../images/Mamberamo/mountain6towerinstallation.jpg', import.meta.url).href
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
            new URL('../../images/cctv-project/cctvss_optimized.mp4', import.meta.url).href,
            new URL('../../images/cctv-project/networkdiagram.jpg', import.meta.url).href
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
            new URL('../../images/YongsuProject/yongsu.png', import.meta.url).href,
            new URL('../../images/YongsuProject/yongsu2.png', import.meta.url).href,
            new URL('../../images/YongsuProject/yongsucliff.png', import.meta.url).href,
            new URL('../../images/YongsuProject/yongsucliff2.png', import.meta.url).href,
            new URL('../../images/YongsuProject/heli1.png', import.meta.url).href,
            new URL('../../images/YongsuProject/heli2.png', import.meta.url).href,
            new URL('../../images/YongsuProject/heli3.png', import.meta.url).href,
            new URL('../../images/YongsuProject/heli4.png', import.meta.url).href,
            new URL('../../images/YongsuProject/heli5.png', import.meta.url).href,
            new URL('../../images/YongsuProject/heli6.png', import.meta.url).href,
            new URL('../../images/YongsuProject/heli7.png', import.meta.url).href,
            new URL('../../images/YongsuProject/heli8.png', import.meta.url).href,
            new URL('../../images/YongsuProject/heli9.png', import.meta.url).href,
            new URL('../../images/YongsuProject/heli10.png', import.meta.url).href,
            new URL('../../images/YongsuProject/dormena.png', import.meta.url).href
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
            new URL('../../images/TVRI/1.jpeg', import.meta.url).href,
            new URL('../../images/TVRI/2.jpeg', import.meta.url).href,
            new URL('../../images/TVRI/3.jpeg', import.meta.url).href,
            new URL('../../images/TVRI/4.jpeg', import.meta.url).href,
            new URL('../../images/TVRI/5.jpeg', import.meta.url).href,
            new URL('../../images/TVRI/6.jpeg', import.meta.url).href,
            new URL('../../images/TVRI/7.jpeg', import.meta.url).href,
            new URL('../../images/TVRI/mi6.jpeg', import.meta.url).href
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
            new URL('../../images/IBM/50thfloorIBM.jpg', import.meta.url).href,
            new URL('../../images/IBM/lobbyIBM.jpg', import.meta.url).href
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
            new URL('../../images/ProjectPBBkabJYp/pbbkabjyp1.jpg', import.meta.url).href,
            new URL('../../images/ProjectPBBkabJYp/pbbkabjyp2.jpg', import.meta.url).href,
            new URL('../../images/ProjectPBBkabJYp/pbbkabjyp3.jpg', import.meta.url).href,
            new URL('../../images/ProjectPBBkabJYp/pbbkabjyp4.jpg', import.meta.url).href,
            new URL('../../images/ProjectPBBkabJYp/pbbkabjyp5.jpg', import.meta.url).href
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
            new URL('../../images/WIFI-Installations/wifi-analyzer.jpeg', import.meta.url).href,
            new URL('../../images/WIFI-Installations/wifi-dish.jpeg', import.meta.url).href,
            new URL('../../images/WIFI-Installations/wifi-dish2.jpeg', import.meta.url).href,
            new URL('../../images/WIFI-Installations/wifi-dish3.jpeg', import.meta.url).href,
            new URL('../../images/WIFI-Installations/site1.jpeg', import.meta.url).href,
            new URL('../../images/WIFI-Installations/router-mikrotik.jpeg', import.meta.url).href
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
            new URL('../../images/HotelAstonJYP/astonHotel.jpg', import.meta.url).href
        ]
    },
];
