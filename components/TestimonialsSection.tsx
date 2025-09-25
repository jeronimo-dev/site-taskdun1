

import React from 'react';

const testimonials = [
  {
    quote: 'Taskdun transformou a maneira como nossa equipe trabalha. A colaboração nunca foi tão fácil e transparente. Estamos entregando projetos 25% mais rápido!',
    author: 'Juliana Costa',
    role: 'Gerente de Projetos na InovaTech',
    avatar: './assets/images/avatar-juliana.png',
  },
  {
    quote: 'A simplicidade dos quadros Kanban e a clareza dos relatórios nos deram uma visão completa do nosso fluxo de trabalho. É uma ferramenta indispensável para nós.',
    author: 'Ricardo Alves',
    role: 'CEO da Creative Solutions',
    avatar: './assets/images/avatar-ricardo.png',
  },
  {
    quote: 'Finalmente uma ferramenta que é poderosa sem ser complicada. A curva de aprendizado foi mínima e os resultados foram imediatos. Recomendo a todos!',
    author: 'Fernanda Lima',
    role: 'Líder de Marketing na Digital Growth',
    avatar: './assets/images/avatar-fernanda.png',
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wider uppercase">Depoimentos</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Amado por equipes em todo o mundo
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.author} className="p-8 bg-white rounded-2xl shadow-lg flex flex-col">
              <blockquote className="flex-grow text-slate-700">
                <svg width="40" height="32" viewBox="0 0 40 32" fill="currentColor" className="text-slate-200" aria-hidden="true">
                  <path d="M0 16.14C0 6.02 5.34 0 13.43 0c5.1 0 8.04 2.36 8.04 6.14 0 3.78-2.58 6.4-5.34 6.4-1.12 0-1.88-.34-2.26-1.12.94-1.3 1.5-2.96 1.5-4.88 0-4.14-3.4-7.58-7.78-7.58C3.15 5.1.8 9.08.8 13.5c0 6.94 4.54 11.24 10.12 11.24.28 0 .56 0 .84-.02-1.3 3.58-4.24 6.78-8.22 8.28L3.55 32 0 28.56V16.14zm20 0C20 6.02 25.34 0 33.43 0c5.1 0 8.04 2.36 8.04 6.14 0 3.78-2.58 6.4-5.34 6.4-1.12 0-1.88-.34-2.26-1.12.94-1.3 1.5-2.96 1.5-4.88 0-4.14-3.4-7.58-7.78-7.58C23.15 5.1 20.8 9.08 20.8 13.5c0 6.94 4.54 11.24 10.12 11.24.28 0 .56 0 .84-.02-1.3 3.58-4.24 6.78-8.22 8.28L23.55 32 20 28.56V16.14z"></path>
                </svg>
                <p className="mt-4 text-lg">"{testimonial.quote}"</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center">
                <img className="h-12 w-12 rounded-full object-cover" src={testimonial.avatar} alt={testimonial.author} />
                <div className="ml-4">
                  <div className="text-base font-bold text-slate-900">{testimonial.author}</div>
                  <div className="text-sm text-slate-600">{testimonial.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};