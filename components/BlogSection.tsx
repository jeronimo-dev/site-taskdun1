import React from 'react';

export const BlogSection: React.FC = () => {
  // TODO: Substitua a URL abaixo pela URL do seu blog WordPress.
  const blogUrl = "https://taskdun.com/tasknews";

  return (
    <section id="blog" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-base font-semibold text-[#43D9C9] tracking-wider uppercase">Task News</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-bold text-[#F5F7FA] tracking-tight">
            Nossos Insights sobre IA&H, Inovação e o Futuro do Trabalho.
          </p>
          <p className="mt-6 text-lg text-[#A0AEC0]">
            Explore nossos artigos, estudos de caso e análises sobre como estamos moldando a próxima geração de ecossistemas de inteligência.
          </p>
        </div>

        <div className="mt-16">
          <div className="relative w-full h-[600px] md:h-[800px] rounded-2xl p-1 border border-white/10 bg-black/20 shadow-2xl backdrop-blur-sm">
             <iframe
                className="w-full h-full rounded-[14px] border-0"
                src={blogUrl}
                title="Blog Task News"
                allow="fullscreen"
                sandbox="allow-scripts allow-same-origin allow-popups"
             ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};