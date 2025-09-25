import React from 'react';

interface FooterProps {
  onManifestoClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onManifestoClick }) => {
  const links = {
    'Framework': [
      { label: 'A Tese', href: '#thesis' },
      { label: 'A Solução', href: '#solution' },
      { label: 'Aplicações', href: '#applications' },
      { label: 'Reconhecimento', href: '#recognition' },
      { label: 'Task News', href: '#blog' },
    ],
    'Empresa': [
      { label: 'Sobre nós', href: '#' },
      { label: 'Carreiras', href: '#' },
      { label: 'Contato', href: '#' },
    ],
    'Legal': [
      { label: 'Termos de Serviço', href: '#' },
      { label: 'Política de Privacidade', href: '#' },
    ],
  };

  return (
    <footer className="bg-[#0A0E1A]" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div className="border-t border-[#A0AEC0]/20 pt-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
             <a href="#" className="flex items-center space-x-2">
              <img src="https://srv1916-files.hstgr.io/af3ba4d703c24b83/files/public_html/Nlogo%20Taskdun.png" alt="Taskdun Logo" className="h-12" />
            </a>
            <p className="text-base text-[#A0AEC0]">
              Arquitetando ecossistemas de Inteligência Artificial & Humana (IA&H).
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-3 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-[#F5F7FA] tracking-wider uppercase">Framework</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {links.Framework.map((item) => (
                    <li key={item.label}>
                      <a href={item.href} className="text-base text-[#A0AEC0] hover:text-[#F5F7FA]">
                        {item.label}
                      </a>
                    </li>
                  ))}
                  <li>
                    <button onClick={onManifestoClick} className="text-base text-[#A0AEC0] hover:text-[#F5F7FA]">
                      O Manifesto
                    </button>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-[#F5F7FA] tracking-wider uppercase">Empresa</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {links.Empresa.map((item) => (
                    <li key={item.label}>
                      <a href={item.href} className="text-base text-[#A0AEC0] hover:text-[#F5F7FA]">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
               <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-[#F5F7FA] tracking-wider uppercase">Legal</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {links.Legal.map((item) => (
                    <li key={item.label}>
                      <a href={item.href} className="text-base text-[#A0AEC0] hover:text-[#F5F7FA]">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-[#A0AEC0]/20 pt-8 md:flex md:items-center md:justify-between">
          <p className="text-base text-[#A0AEC0] md:order-1">
            &copy; {new Date().getFullYear()} Taskdun, Inc. Todos os direitos reservados.
          </p>
        </div>
        </div>
      </div>
    </footer>
  );
};
