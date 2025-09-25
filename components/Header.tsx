import React, { useState } from 'react';
import { MenuIcon, CloseIcon } from './Icons';

interface HeaderProps {
  onManifestoClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onManifestoClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#thesis', label: 'A Tese' },
    { href: '#solution', label: 'A Solução' },
    { href: '#applications', label: 'Aplicações' },
    { href: '#recognition', label: 'Reconhecimento' },
    { href: '#blog', label: 'Task News' },
  ];

  return (
    <header className="bg-[#0A0E1A]/80 backdrop-blur-md sticky top-0 z-50 border-b border-[#A0AEC0]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center space-x-2">
              <img src="https://srv1916-files.hstgr.io/a348851f00e7054e/api/preview/big/public_html/Pics/Nlogo%20Taskdun.png?auth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJsb2NhbGUiOiJlbl9HQiIsInZpZXdNb2RlIjoibGlzdCIsInNpbmdsZUNsaWNrIjpmYWxzZSwicGVybSI6eyJhZG1pbiI6ZmFsc2UsImV4ZWN1dGUiOmZhbHNlLCJjcmVhdGUiOnRydWUsInJlbmFtZSI6dHJ1ZSwibW9kaWZ5Ijp0cnVlLCJkZWxldGUiOnRydWUsInNoYXJlIjpmYWxzZSwiZG93bmxvYWQiOnRydWV9LCJjb21tYW5kcyI6W10sImxvY2tQYXNzd29yZCI6dHJ1ZSwiaGlkZURvdGZpbGVzIjpmYWxzZSwiZGF0ZUZvcm1hdCI6ZmFsc2V9LCJpc3MiOiJGaWxlIEJyb3dzZXIiLCJleHAiOjE3NTg3ODU5NTQsImlhdCI6MTc1ODc3ODc1NH0.IJr3m-EL3isQGabokuHdarMQtyEAE5jbzHBI65WC3nk&inline=true&key=1758759869913" alt="Taskdun Logo" className="h-10" />
            </a>
          </div>
          <div className="hidden md:block">
            <nav className="flex items-center space-x-10">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="font-medium text-[#A0AEC0] hover:text-[#F5F7FA] transition-colors">
                  {link.label}
                </a>
              ))}
              <button onClick={onManifestoClick} className="font-medium text-[#A0AEC0] hover:text-[#F5F7FA] transition-colors">
                O Manifesto
              </button>
            </nav>
          </div>
          <div className="hidden md:block">
            <a href="#" className="inline-block bg-[#43D9C9] text-[#0A0E1A] font-bold px-5 py-2 rounded-lg hover:brightness-110 transition-all duration-300 transform hover:scale-105">
              Fale Conosco
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#A0AEC0] hover:text-[#F5F7FA] hover:bg-[#101423] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#43D9C9]"
            >
              <span className="sr-only">Abrir menu</span>
              {isMenuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-[#0A0E1A] shadow-lg z-40 border-b border-[#A0AEC0]/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="block px-3 py-2 rounded-md text-base font-medium text-[#A0AEC0] hover:text-[#F5F7FA] hover:bg-[#101423] transition-colors">
                {link.label}
              </a>
            ))}
             <button onClick={() => { onManifestoClick(); setIsMenuOpen(false); }} className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-[#A0AEC0] hover:text-[#F5F7FA] hover:bg-[#101423] transition-colors">
                O Manifesto
              </button>
          </div>
          <div className="pt-4 pb-4 border-t border-[#A0AEC0]/20">
            <div className="flex flex-col items-center px-5">
               <a href="#" className="w-full text-center bg-[#43D9C9] text-[#0A0E1A] font-bold px-5 py-3 rounded-lg hover:brightness-110 transition-colors">
                Fale Conosco
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};