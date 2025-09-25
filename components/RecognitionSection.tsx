import React from 'react';
import { CheckIcon } from './Icons';

const timeline = [
    {
        timeframe: 'Mês 1 | Semanas 1-2',
        title: 'Concepção e Arquitetura do Framework IA&H',
        description: 'Definição da tese central e desenho da arquitetura para escalar a genialidade humana, estabelecendo as bases para o Dunner e os Gems especialistas.',
    },
    {
        timeframe: 'Mês 1 | Semanas 3-4',
        title: 'Desenvolvimento do MVP Backend',
        description: 'Construção e teste do núcleo da solução na Vertex AI, provando a viabilidade do fluxo de extração, síntese e execução em tempo recorde.',
    },
    {
        timeframe: 'Mês 2 | Semanas 5-7',
        title: 'Validação e Reconhecimento pelo Google',
        description: 'Aceitos no programa Google for Startups e recebemos o selo Google Cloud Developer, validando nossa tecnologia e visão de mercado por gigantes da indústria.',
    },
    {
        timeframe: 'Mês 2 | Semana 8',
        title: 'Lançamento e Integração do Ecossistema',
        description: 'Finalização do frontend e início da integração para trazer o poder do ecossistema IA&H para nossos primeiros parceiros e clientes.',
    },
];

export const RecognitionSection: React.FC = () => {
    return (
        <section id="recognition" className="py-20 sm:py-28 bg-[#101423]/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-base font-semibold text-[#43D9C9] tracking-wider uppercase text-center lg:text-left">Nossa Jornada</h2>
                        <p className="mt-2 text-3xl sm:text-4xl font-bold text-[#F5F7FA] tracking-tight text-center lg:text-left">
                            Da Visão à Validação em 2 Meses
                        </p>
                        <p className="mt-6 text-lg text-[#A0AEC0] text-center lg:text-left">
                            Nossa jornada, de uma visão audaciosa a uma solução robusta validada pelo Google, reflete nosso compromisso com a agilidade, a excelência e a inovação disruptiva.
                        </p>
                    </div>
                     <div className="flex justify-center">
                        <img 
                            src="https://srv1916-files.hstgr.io/a348851f00e7054e/api/preview/big/public_html/Pics/TASK4.png?auth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJsb2NhbGUiOiJlbl9HQiIsInZpZXdNb2RlIjoibGlzdCIsInNpbmdsZUNsaWNrIjpmYWxzZSwicGVybSI6eyJhZG1pbiI6ZmFsc2UsImV4ZWN1dGUiOmZhbHNlLCJjcmVhdGUiOnRydWUsInJlbmFtZSI6dHJ1ZSwibW9kaWZ5Ijp0cnVlLCJkZWxldGUiOnRydWUsInNoYXJlIjpmYWxzZSwiZG93bmxvYWQiOnRydWV9LCJjb21tYW5kcyI6W10sImxvY2tQYXNzd29yZCI6dHJ1ZSwiaGlkZURvdGZpbGVzIjpmYWxzZSwiZGF0ZUZvcm1hdCI6ZmFsc2V9LCJpc3MiOiJGaWxlIEJyb3dzZXIiLCJleHAiOjE3NTg3ODU5NTQsImlhdCI6MTc1ODc3ODc1NH0.IJr3m-EL3isQGabokuHdarMQtyEAE5jbzHBI65WC3nk&inline=true&key=1758758430394"
                            alt="Placa de metal com o logo da Taskdun ao lado de uma placa do Google for Startups, simbolizando prestígio e reconhecimento."
                            className="rounded-2xl shadow-lg w-full max-w-md object-cover aspect-square border border-[#A0AEC0]/20"
                            loading="lazy"
                        />
                    </div>
                </div>

                <div className="mt-20 max-w-3xl mx-auto">
                    <div className="relative">
                        {/* A linha vertical que conecta os pontos */}
                        <div className="absolute left-5 top-5 h-full w-0.5 bg-[#A0AEC0]/20" aria-hidden="true"></div>
                        
                        {timeline.map((item, index) => (
                            <div key={item.title} className="relative pl-14 pb-12">
                                {/* O ponto/ícone na linha do tempo */}
                                <div className="absolute left-0 top-0">
                                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#0A0E1A] border-2 border-[#43D9C9]">
                                        <CheckIcon className="h-5 w-5 text-[#43D9C9]" />
                                    </div>
                                </div>
                                
                                {/* O conteúdo do marco */}
                                <div className="p-6 bg-[#0A0E1A] rounded-2xl border border-[#A0AEC0]/20 shadow-lg">
                                    <p className="text-sm font-semibold text-[#43D9C9]">{item.timeframe}</p>
                                    <h3 className="mt-2 text-xl font-bold text-[#F5F7FA]">{item.title}</h3>
                                    <p className="mt-3 text-base text-[#A0AEC0]">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};