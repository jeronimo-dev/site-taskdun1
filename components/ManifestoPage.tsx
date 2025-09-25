import React from 'react';
import { CloseIcon } from './Icons';

interface ManifestoPageProps {
    onClose: () => void;
}

export const ManifestoPage: React.FC<ManifestoPageProps> = ({ onClose }) => {
    // Inject styles directly for this component to keep it self-contained
    const styles = `
        .manifesto-body {
            font-family: 'Poppins', sans-serif;
            background-color: #121212;
            color: #E0E0E0;
        }
        .manifesto-font-serif {
            font-family: 'Source Serif 4', serif;
        }
        .manifesto-hero-image {
            background-image: url('https://storage.googleapis.com/gemini-prod-us-west1-423901735189/uploads/2024/04/18/48f07096e22c9233.jpg');
            background-size: cover;
            background-position: center;
        }
        .manifesto-content h2 {
            font-family: 'Source Serif 4', serif;
            font-size: 1.875rem;
            font-weight: 600;
            margin-top: 2.5rem;
            margin-bottom: 1rem;
            color: #FFFFFF;
        }
        .manifesto-content p, .manifesto-content li {
            font-size: 1.125rem;
            line-height: 1.8;
            margin-bottom: 1.5rem;
        }
        .manifesto-content strong {
            color: #FFFFFF;
            font-weight: 600;
        }
        .manifesto-highlight {
            background-color: rgba(255, 255, 255, 0.05);
            border-left: 4px solid #4A90E2;
            padding: 1.5rem;
            margin: 2rem 0;
            border-radius: 4px;
        }
        .manifesto-highlight p {
            margin-bottom: 0;
            font-style: italic;
        }
    `;

    return (
        <div className="fixed inset-0 bg-[#0A0E1A]/90 z-[100] overflow-y-auto" aria-modal="true" role="dialog">
            <style>{styles}</style>
            
            <button
                onClick={onClose}
                className="fixed top-6 right-6 z-[110] p-2 rounded-full text-white bg-black/50 hover:bg-white/20 transition-colors"
                aria-label="Fechar manifesto"
            >
                <CloseIcon className="w-8 h-8" />
            </button>

            <div className="manifesto-body antialiased">
                <header className="manifesto-hero-image relative h-screen flex items-center justify-center text-center text-white">
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                    <div className="relative z-10 p-4">
                        <h1 className="manifesto-font-serif text-5xl md:text-7xl font-bold leading-tight tracking-tight">O Manifesto SIA&H</h1>
                        <p className="mt-4 text-xl md:text-2xl font-light max-w-3xl mx-auto">Um novo pacto entre a inteligência humana e a artificial para construir o futuro que desejamos.</p>
                    </div>
                </header>

                <main className="bg-[#181818]">
                    <div className="max-w-4xl mx-auto px-6 py-20 md:py-24 manifesto-content">
                        <p className="text-xl leading-relaxed text-center">Este é um manifesto em favor do ser humano. E em favor daquilo que nos tornou a espécie soberana neste planeta: <strong>a nossa inteligência</strong>.</p>
                        <p className="text-xl leading-relaxed text-center mb-16">Que este documento sirva de guia para orientar aqueles que se sentem ansiosos com o futuro e de farol para aqueles que desejam construí-lo.</p>

                        <p>O mundo vive um momento de inflexão. Desde que nossos ancestrais registraram nas paredes das cavernas os primeiros traços de sua realidade, demonstramos uma necessidade inerente de refletir, registrar e evoluir. Aqueles desenhos são a prova de que a inteligência não é apenas sobre sobreviver, mas sobre <strong>transcender</strong>.</p>
                        <p>Por eras, nossa interação inteligente se restringiu a nós mesmos. Hoje, algo mudou. Antes dos corpos de metal, seus sistemas de inteligência chegaram primeiro. Eles não vieram do espaço, como prevíamos, mas de dentro dos servidores de outra maravilha que nossa inteligência já havia construído: a internet. Hoje, essa nova inteligência está nos bolsos de nossas calças, mudando tudo.</p>

                        <h2>Princípio 1: A Lógica da Realidade e o Foco no Controlável</h2>
                        <p>O medo é um eco do desconhecido. A lógica da realidade nos aponta que os grandes players deste mercado não estão jogando para perder ou para criar o caos; eles estão construindo soluções para as demandas do mundo. Para o resto, os filósofos estóicos nos legaram a mais poderosa ferramenta para a clareza mental: a <strong>Dicotomia de Controle</strong>.</p>
                        <div className="manifesto-highlight">
                            <p>Classifique o universo em duas categorias: o que você controla e o que você não controla. Onde você colocará sua energia? No medo paralisante do incontrolável ou na ação empoderadora sobre o que lhe pertence? A escolha define seu futuro.</p>
                        </div>

                        <h2>Princípio 2: A Mentalidade do Pioneiro e a Coragem de Agir</h2>
                        <p>A história não recompensa os espectadores. Henry Ford, Steve Jobs, Mark Zuckerberg... Nenhum deles inventou a tecnologia pela qual é lembrado. Mas eles entenderam seu potencial e agiram antes dos outros. Eles deram o salto. Para saltar, é preciso primeiro uma mentalidade: aproxime-se da IA com a inocência de quem "adentra a noite escura". Assuma que nada sabe. É neste vácuo que o aprendizado real acontece.</p>
                        <p>O padrão de adoção de tecnologias disruptivas é sempre o mesmo. Pense nisso como um mapa e escolha sua posição:</p>
                        <ul className="list-disc list-inside space-y-4">
                            <li><strong>Os Adotantes Iniciais:</strong> Saltam de forma planejada. Testam, validam e prosperam por se posicionarem na vanguarda. Eles definem as regras do novo jogo.</li>
                            <li><strong>A Maioria Inicial:</strong> Salta porque viu os resultados dos pioneiros. Ainda colhem bons frutos, mas já seguem as regras criadas por outros.</li>
                            <li><strong>A Maioria Tardia:</strong> Salta por necessidade, para não ficar para trás. Lutam para extrair resultados em um território já consolidado.</li>
                            <li><strong>Os Retardatários:</strong> Não saltam. Ficam à margem, questionando por que o mundo mudou sem eles.</li>
                        </ul>

                        <h2>Princípio 3: O Futuro é SIA&H - A Aliança entre Inteligência Artificial & Humana</h2>
                        <p>Depois de acalmar o medo e entender a mentalidade para agir, chegamos à revelação. O verdadeiro potencial não está na Inteligência Artificial por si só. Está naquilo que chamamos de <strong>SIA&H</strong>.</p>
                        <div className="manifesto-highlight">
                            <p><strong>SIA&H (Simbiose de Inteligências Artificiais & Humanas):</strong> O entendimento humano das capacidades de uma ou mais IAs que, unidas entre si ou a outros sistemas, instruídas de forma sistemática, testadas e validadas com dados concretos, possam, assim, gerar um resultado prático de ganho ou prevenção de problemas para pessoas, empresas ou a sociedade.</p>
                        </div>
                        <p>A IA é o caça F-22: a máquina mais poderosa já criada. Mas sem um piloto de elite, com sua intuição, improviso e visão estratégica, ela é apenas metal inerte. A SIA&H é a aliança entre o piloto e a máquina. É a sua visão humana norteando os objetivos, sua experiência avaliando os resultados e sua criatividade fazendo as perguntas que a máquina jamais pensaria em fazer.</p>
                        <p>A IA lhe dá velocidade e alcance; <strong>você lhe dá propósito e direção.</strong></p>
                        <p className="manifesto-font-serif text-3xl text-center mt-20 font-semibold text-white">Este é o novo agente produtivo. Não é a IA. É você, operando em SIA&H.</p>
                        <p className="manifesto-font-serif text-3xl text-center mt-8 font-semibold text-white">Para pilotar o futuro em vez de ser um passageiro, só existe uma condição.</p>
                        <p className="manifesto-font-serif text-4xl text-center mt-8 font-bold text-[#4A90E2] tracking-wider">Começar.</p>
                    </div>
                </main>

                <footer className="bg-[#121212] py-12">
                    <div className="max-w-4xl mx-auto text-center text-gray-400">
                        <p>&copy; 2025 Movimento SIA&H. Todos os direitos reservados.</p>
                        <p className="mt-2 text-sm">Um novo pacto pela inteligência.</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};
