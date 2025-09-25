import React from 'react';

const EcosystemVisual: React.FC = () => {
  React.useEffect(() => {
    const styleId = 'ecosystem-animation-style';
    if (document.getElementById(styleId)) return;
    const style = document.createElement('style');
    style.id = styleId;
    style.innerHTML = `
      @keyframes radar-sweep {
        0% { r: 0; opacity: 0.7; }
        100% { r: 90; opacity: 0; }
      }
      .radar-ring {
        animation: radar-sweep 3s infinite linear;
        stroke: #43D9C9;
        stroke-width: 0.5;
        fill: none;
      }
      @keyframes node-pulse {
        0%, 100% { transform: scale(1); opacity: 0.9; }
        50% { transform: scale(1.08); opacity: 1; }
      }
      .central-node {
        animation: node-pulse 4s ease-in-out infinite;
        transform-origin: center;
      }
      @keyframes sat-node-pulse {
        0%, 100% { opacity: 0.7; }
        50% { opacity: 1; }
      }
      .satellite-node {
         animation: sat-node-pulse 3s ease-in-out infinite;
      }
       @keyframes data-flow {
        to { stroke-dashoffset: -20; }
      }
      .data-line {
        stroke-dasharray: 2 4;
        stroke-dashoffset: 0;
        animation: data-flow 1.5s linear infinite;
      }
    `;
    document.head.appendChild(style);
  }, []);

  const nodes = [
    { cx: 160, cy: 100 },
    { cx: 130, cy: 152 },
    { cx: 70, cy: 152 },
    { cx: 40, cy: 100 },
    { cx: 70, cy: 48 },
    { cx: 130, cy: 48 },
  ];

  return (
    <div className="flex items-center justify-center h-full" aria-label="Visualização animada de um ecossistema de inteligência artificial e humana">
      <svg width="60%" height="60%" viewBox="0 0 200 200" className="overflow-visible opacity-80">
        <defs>
          <filter id="enhanced-effect" x="-50%" y="-50%" width="200%" height="200%">
            {/* Efeito de ondulação de fundo */}
            <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="1" result="turbulence">
               <animate 
                 attributeName="baseFrequency" 
                 dur="10s" 
                 values="0.02;0.03;0.02" 
                 repeatCount="indefinite" />
            </feTurbulence>
            
            {/* O deslocamento principal agora pulsa sutilmente, criando um efeito de 'respiração' */}
            <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="1.5" result="distorted">
              <animate 
                attributeName="scale" 
                dur="7s" 
                values="1.5;2.5;1.5" 
                repeatCount="indefinite"
                calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"
                />
            </feDisplacementMap>
            
            {/* O deslocamento da aberração cromática também pulsa para manter a consistência */}
            <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="2.5" result="distorted_fringe">
               <animate 
                attributeName="scale" 
                dur="7s" 
                values="2.5;3.5;2.5" 
                repeatCount="indefinite"
                calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"
                />
            </feDisplacementMap>
            
            {/* Isola a 'franja' para a aberração cromática */}
            <feComposite in="distorted" in2="distorted_fringe" operator="xor" result="fringe" />
            
            {/* Colore a franja com a cor da marca */}
            <feFlood flood-color="#43D9C9" result="fringe_color"/>
            <feComposite in="fringe_color" in2="fringe" operator="in" result="colored_fringe" />

            {/* O efeito de brilho agora também pulsa para maior impacto */}
            <feGaussianBlur in="distorted" stdDeviation="3" result="blur">
               <animate 
                attributeName="stdDeviation" 
                dur="4s" 
                values="3;5;3" 
                repeatCount="indefinite" 
                calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"
                />
            </feGaussianBlur>

            {/* Combinação final: brilho pulsante + franja colorida + distorção principal nítida */}
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="colored_fringe" />
              <feMergeNode in="distorted" /> 
            </feMerge>
          </filter>
        </defs>

        {/* Anéis de Radar (mantidos nítidos, sem filtro) */}
        <g>
          <circle cx="100" cy="100" r="0" className="radar-ring" style={{ animationDelay: '0s' }} />
          <circle cx="100" cy="100" r="0" className="radar-ring" style={{ animationDelay: '1s' }} />
          <circle cx="100" cy="100" r="0" className="radar-ring" style={{ animationDelay: '2s' }} />
        </g>
        
        {/* Aplicar o filtro aprimorado ao grupo que contém linhas e nós */}
        <g filter="url(#enhanced-effect)">
            {/* Linhas de Conexão */}
            <g stroke="#A0AEC0" strokeWidth="0.5" strokeOpacity="0.5">
              {nodes.map((node, i) => (
                <line key={`line-c-${i}`} x1="100" y1="100" x2={node.cx} y2={node.cy} className="data-line" style={{animationDelay: `${i * 0.2}s`}}/>
              ))}
              <line x1={nodes[0].cx} y1={nodes[0].cy} x2={nodes[1].cx} y2={nodes[1].cy} />
              <line x1={nodes[2].cx} y1={nodes[2].cy} x2={nodes[3].cx} y2={nodes[3].cy} />
              <line x1={nodes[4].cx} y1={nodes[4].cy} x2={nodes[5].cx} y2={nodes[5].cy} />
            </g>
            
            {/* Nós */}
            <g>
              {/* Nó Central */}
              <circle cx="100" cy="100" r="12" fill="#43D9C9" className="central-node" />
              <circle cx="100" cy="100" r="12" stroke="#F5F7FA" strokeWidth="1" fill="none" className="central-node" />

              {/* Nós Satélites */}
              {nodes.map((node, i) => (
                <circle key={`node-${i}`} cx={node.cx} cy={node.cy} r="5" fill="#43D9C9" className="satellite-node" style={{ animationDelay: `${i * 0.3}s` }}/>
              ))}
            </g>
        </g>
      </svg>
    </div>
  );
};

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
       <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#43D9C9]/5 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#A0AEC0]/5 rounded-full filter blur-3xl opacity-20"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-base font-semibold text-[#43D9C9] tracking-wider uppercase">Uma empresa DeepTech & Google for Startups</p>
        <h1 className="mt-4 text-4xl md:text-6xl font-bold text-[#F5F7FA] tracking-tight leading-tight">
          <span className="block">Nós Não Criamos IAs.</span>
          <span className="block">Nós Arquitetamos Ecossistemas de Inteligência.</span>
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-[#A0AEC0]">
          A próxima evolução do trabalho não será a máquina substituindo o humano. Será a simbiose entre eles. Nós construímos essa simbiose.
        </p>
        
        <div className="mt-16">
            <div className="relative w-full max-w-5xl mx-auto h-96 rounded-2xl p-1 border border-white/10 bg-black/20 shadow-2xl backdrop-blur-sm">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <EcosystemVisual />
            </div>
        </div>
      </div>
    </section>
  );
};

// Adicionando um estilo para o padrão de grade, já que não podemos editar tailwind.config.js
const style = document.createElement('style');
style.innerHTML = `
.bg-grid-pattern {
  background-image: linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px);
  background-size: 20px 20px;
}
`;
document.head.appendChild(style);