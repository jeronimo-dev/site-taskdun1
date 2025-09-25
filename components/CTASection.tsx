import React, { useState, useEffect, useRef, useMemo } from 'react';
import { manifestoData } from './manifestoData';

const useOnScreen = (ref: React.RefObject<HTMLElement>, threshold = 0.3) => {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIntersecting(true);
                }
            },
            { threshold }
        );
        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [ref, threshold]);

    return isIntersecting;
};

const ParticleBackground: React.FC = () => {
    const particles = useMemo(() => {
        return Array.from({ length: 50 }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            size: `${Math.random() * 2 + 1}px`,
            duration: `${Math.random() * 20 + 15}s`,
            delay: `${Math.random() * -30}s`,
        }));
    }, []);

    return (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden" aria-hidden="true">
            {particles.map(p => (
                <div
                    key={p.id}
                    className="absolute bottom-0 rounded-full bg-[#43D9C9] opacity-30 animate-float"
                    style={{
                        left: p.left,
                        width: p.size,
                        height: p.size,
                        animationDuration: p.duration,
                        animationDelay: p.delay,
                    }}
                ></div>
            ))}
        </div>
    );
};

const PrincipleSection: React.FC<{ principle: typeof manifestoData.manifesto.principles[0] }> = ({ principle }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref);

    return (
        <div ref={ref} className={`min-h-screen flex items-center justify-center p-8 transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center max-w-4xl mx-auto">
                <h3 className="font-montserrat text-3xl md:text-4xl font-bold" style={{ color: '#E6C66E' }}>{principle.title}</h3>
                <p className="mt-4 text-xl md:text-2xl text-[#F5F7FA] font-lora">{principle.subtitle}</p>
                <p className="mt-8 text-lg md:text-xl text-[#A0AEC0] font-lora text-justify leading-relaxed">{principle.text}</p>
            </div>
        </div>
    );
};

export const ManifestoSection: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref);

    return (
        <>
            <style>{`
                @keyframes float {
                    0% { transform: translateY(0); opacity: 0.3; }
                    100% { transform: translateY(-100vh); opacity: 0; }
                }
                .animate-float { animation-name: float; animation-timing-function: linear; animation-iteration-count: infinite; }
                .font-montserrat { font-family: 'Montserrat', sans-serif; }
                .font-lora { font-family: 'Lora', serif; }
            `}</style>
            <section id="manifesto" className="bg-[#05080D] text-[#F5F7FA] relative overflow-hidden py-20 sm:py-28">
                <ParticleBackground />
                <div className="relative z-10">
                    <div ref={ref} className={`text-center max-w-4xl mx-auto transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-[#F5F7FA] tracking-tight">{manifestoData.manifesto.title}</h2>
                        <p className="mt-4 text-xl md:text-2xl font-lora" style={{ color: '#43D9C9' }}>{manifestoData.manifesto.subtitle}</p>
                    </div>

                    <div className="mt-20">
                        {manifestoData.manifesto.principles.map(p => <PrincipleSection key={p.id} principle={p} />)}
                    </div>
                    
                    <div className={`min-h-screen flex items-center justify-center p-8`}>
                       <div className="text-center max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight font-montserrat">
                                O Futuro do Trabalho é uma Conversa.
                            </h2>
                            <p className="mt-6 text-lg text-[#A0AEC0] font-lora leading-relaxed">
                                Nós acreditamos em um futuro onde a tecnologia não substitui a intuição humana, mas a <strong className="text-[#F5F7FA]">amplifica</strong>. Um futuro onde o "trabalho" se torna a colaboração criativa entre mentes humanas visionárias e IAs executoras de elite.
                            </p>
                            <p className="mt-8 text-xl font-semibold text-[#F5F7FA] font-lora">É o futuro que estamos construindo. Junte-se ao Novo Movimento.</p>
                            <div className="mt-10">
                                <a
                                    href="#"
                                    className="inline-block bg-[#43D9C9] text-[#0A0E1A] font-bold text-lg px-8 py-4 rounded-lg shadow-lg shadow-[#43D9C9]/20 hover:brightness-110 transition-all duration-300 transform hover:scale-105"
                                >
                                    Fale Conosco
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};