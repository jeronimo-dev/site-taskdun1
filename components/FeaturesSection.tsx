import React, { useEffect } from 'react';

const steps = [
    {
        name: '1. Diagnóstico e Extração',
        subtitle: 'O Task Mapping',
        description: 'Através de uma metodologia de diagnóstico profundo, nós extraímos e codificamos o conhecimento "tácito" — a intuição, a experiência, os padrões — dos melhores especialistas de cada setor.',
    },
    {
        name: '2. Síntese Estratégica',
        subtitle: 'O "Cérebro" Dunner',
        description: 'Nossa IA Estratégica central, o Dunner, sintetiza esse conhecimento com vastas bases de dados e frameworks globais, forjando um P.E.N.S.E. — um blueprint estratégico para a disrupção.',
    },
    {
        name: '3. Execução Orquestrada',
        subtitle: 'Os "Gems" Especialistas',
        description: 'O blueprint aciona uma legião de IAs especialistas (nossos "Gems"), cada uma mestra em seu domínio, para executar o plano com velocidade e precisão sobre-humanas.',
    },
];

export const ThesisSolutionSection: React.FC = () => {
  useEffect(() => {
    const styleId = 'blueprint-animation-style';
    if (document.getElementById(styleId)) return;

    const style = document.createElement('style');
    style.id = styleId;
    style.innerHTML = `
      @keyframes pulse-glow {
        0%, 100% {
          text-shadow: 0 0 3px rgba(67, 217, 201, 0.4);
        }
        50% {
          text-shadow: 0 0 10px rgba(67, 217, 201, 0.8), 0 0 16px rgba(67, 217, 201, 0.6);
        }
      }
      .blueprint-glow {
        animation: pulse-glow 3s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      const existingStyle = document.getElementById(styleId);
      if (existingStyle) {
        document.head.removeChild(existingStyle);
      }
    };
  }, []);

  return (
    <>
      {/* Thesis Section */}
      <section id="thesis" className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-last lg:order-first">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F7FA] tracking-tight text-center lg:text-left">
                        O Teto da Genialidade Humana.
                    </h2>
                    <p className="mt-6 text-lg text-[#A0AEC0] text-center lg:text-left">
                        Em toda indústria, da saúde à logística, o crescimento encontra um limite. Esse limite não é a tecnologia ou o capital. <strong className="text-[#F5F7FA]">É a largura de banda do gênio humano.</strong> Um único estrategista brilhante, um engenheiro, um médico... só pode estar em um lugar, resolvendo um problema de cada vez. A genialidade, por natureza, não escala.
                    </p>
                    <p className="mt-4 text-lg font-semibold text-[#F5F7FA] text-center lg:text-left">Até agora.</p>
                </div>
                <div className="flex justify-center">
                    <img 
                        src="https://srv1916-files.hstgr.io/a348851f00e7054e/api/preview/big/public_html/Pics/TASK1.png?auth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJsb2NhbGUiOiJlbl9HQiIsInZpZXdNb2RlIjoibGlzdCIsInNpbmdsZUNsaWNrIjpmYWxzZSwicGVybSI6eyJhZG1pbiI6ZmFsc2UsImV4ZWN1dGUiOmZhbHNlLCJjcmVhdGUiOnRydWUsInJlbmFtZSI6dHJ1ZSwibW9kaWZ5Ijp0cnVlLCJkZWxldGUiOnRydWUsInNoYXJlIjpmYWxzZSwiZG93bmxvYWQiOnRydWV9LCJjb21tYW5kcyI6W10sImxvY2tQYXNzd29yZCI6dHJ1ZSwiaGlkZURvdGZpbGVzIjpmYWxzZSwiZGF0ZUZvcm1hdCI6ZmFsc2V9LCJpc3MiOiJGaWxlIEJyb3dzZXIiLCJleHAiOjE3NTg3ODU5NTQsImlhdCI6MTc1ODc3ODc1NH0.IJr3m-EL3isQGabokuHdarMQtyEAE5jbzHBI65WC3nk&inline=true&key=1758758430589" 
                        alt="Cérebro brilhante representando a genialidade contida, lutando para escapar de uma estrutura geométrica." 
                        className="rounded-2xl shadow-lg w-full max-w-md object-cover aspect-square border border-[#A0AEC0]/20"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 sm:py-28 bg-[#101423]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-base font-semibold text-[#43D9C9] tracking-wider uppercase">A Solução</h2>
            <p className="mt-2 text-3xl sm:text-4xl font-bold text-[#F5F7FA] tracking-tight">
              O Framework IA&H: Codificando a Expertise, Escalando a Visão.
            </p>
            <p className="mt-6 text-lg text-[#A0AEC0]">
              Nós desenvolvemos um framework universal para resolver este problema. É um processo de três etapas que transforma a expertise de um especialista em um <strong className="text-[#F5F7FA]">ativo digital escalável.</strong>
            </p>
          </div>

          <div className="my-16 flex justify-center">
            <img 
                src="https://srv1916-files.hstgr.io/a348851f00e7054e/api/preview/big/public_html/Pics/TASK2.png?auth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJsb2NhbGUiOiJlbl9HQiIsInZpZXdNb2RlIjoibGlzdCIsInNpbmdsZUNsaWNrIjpmYWxzZSwicGVybSI6eyJhZG1pbiI6ZmFsc2UsImV4ZWN1dGUiOmZhbHNlLCJjcmVhdGUiOnRydWUsInJlbmFtZSI6dHJ1ZSwibW9kaWZ5Ijp0cnVlLCJkZWxldGUiOnRydWUsInNoYXJlIjpmYWxzZSwiZG93bmxvYWQiOnRydWV9LCJjb21tYW5kcyI6W10sImxvY2tQYXNzd29yZCI6dHJ1ZSwiaGlkZURvdGZpbGVzIjpmYWxzZSwiZGF0ZUZvcm1hdCI6ZmFsc2V9LCJpc3MiOiJGaWxlIEJyb3dzZXIiLCJleHAiOjE3NTg3ODU5NTQsImlhdCI6MTc1ODc3ODc1NH0.IJr3m-EL3isQGabokuHdarMQtyEAE5jbzHBI65WC3nk&inline=true&key=1758758430539" 
                alt="Visualização da simbiose entre a inteligência humana e a artificial, formando uma nova entidade de energia." 
                className="rounded-2xl shadow-lg max-w-3xl w-full object-cover aspect-video border border-[#A0AEC0]/20"
                loading="lazy"
            />
          </div>

          <div className="mt-16">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {steps.map((step, index) => (
                <div key={step.name} className="p-8 bg-[#0A0E1A] rounded-2xl border border-[#A0AEC0]/20 shadow-lg">
                    <h3 className="text-xl font-semibold text-[#F5F7FA]">{step.name}</h3>
                    <p className="mt-1 text-sm font-medium text-[#43D9C9]">{step.subtitle}</p>
                    <p className={`mt-4 text-base text-[#A0AEC0] ${index === 1 ? 'blueprint-glow' : ''}`}>
                      {step.description}
                    </p>
                </div>
              ))}
            </div>
          </div>
           <div className="mt-16 text-center max-w-4xl mx-auto">
                <p className="text-2xl font-semibold text-[#F5F7FA]">O resultado? Nós não automatizamos tarefas. <span className="text-[#43D9C9]">Nós industrializamos a genialidade.</span></p>
            </div>
        </div>
      </section>
    </>
  );
};