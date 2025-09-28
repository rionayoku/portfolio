import React from 'react';

const contactInfo = [
    { icon: 'fa-envelope', title: 'Email', detail: 'riona.yoku@gmail.com' },
    { icon: 'fa-phone', title: 'Phone/WhatsApp', detail: '+62 821 9091 4552', link: 'https://wa.me/6282190914552' },
    { icon: 'fa-map-marker-alt', title: 'Location', detail: 'Jayapura, Papua' },
];

const Contact: React.FC = () => {
    return (
        <section className="py-16 lg:py-20 relative">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-[30px]">
                <div className="text-center mb-12">
                    <h2 className="section-title">Contact Information</h2>                    
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
                    {contactInfo.map((item, index) => (
                        <div key={index} className="group bg-white/5 border border-white/10 rounded-2xl px-6 py-10 lg:p-12 text-center transition-all duration-300 relative overflow-hidden [transform:perspective(1000px)_rotateX(5deg)] hover:[transform:perspective(1000px)_rotateX(0deg)_translateY(-10px)] hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/10 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-gradient-to-r before:from-cyan-400 before:to-violet-500 before:scale-x-0 before:origin-left before:transition-all before:duration-500 group-hover:before:scale-x-100">
                            <div className="w-20 h-20 bg-gradient-to-tr from-[#00d9ff] to-[#8b5cf6] rounded-[20px] flex items-center justify-center text-3xl text-[#050714] mx-auto mb-6 transition-all duration-300 group-hover:scale-110">
                                <i className={`fa-solid ${item.icon}`}></i>
                            </div>
                            <div className="text-center">
                                <h3 className="font-['Poppins'] text-xl mb-4 text-[#e0e6ed] uppercase tracking-[1px]">{item.title}</h3>
                                {item.link ? (
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-[#64748b] text-xl hover:text-cyan-400 transition-colors">
                                        {item.detail}
                                    </a>
                                ) : (
                                    <p className="text-[#64748b] text-xl">{item.detail}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;
