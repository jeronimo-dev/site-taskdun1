import React from 'react';

const applications = [
    {
        title: 'MARKETING (Taskdun PRO)',
        problem: 'A "Maldição do Criador".',
        solution: 'Reduzimos ciclos de campanha de 30 dias para minutos, com um aumento médio de 300% na conversão.',
        status: 'MVP validado. Lançamento Q4/2025.',
        statusColor: 'text-[#43D9C9]',
    },
    {
        title: 'LOGÍSTICA (Taskdun LOG)',
        problem: 'Ineficiência na cadeia de suprimentos.',
        solution: 'Otimização de rotas em tempo real e manutenção preditiva de frotas.',
        status: 'Potencial: Redução de até 22% nos custos operacionais.',
        statusColor: 'text-[#FFA800]',
    },
    {
        title: 'SAÚDE (Taskdun MED)',
        problem: 'Diagnósticos caros e inacessíveis.',
        solution: 'Assistentes de IA para médicos, acelerando a análise de exames e a identificação de padrões em dados de pacientes.',
        status: 'Potencial: Aumentar a capacidade de diagnóstico de um médico em até 5X.',
        statusColor: 'text-[#FFA800]',
    },
];

export const ApplicationsSection: React.FC = () => {
  return (
    <section id="applications" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-base font-semibold text-[#43D9C9] tracking-wider uppercase">Aplicações</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-bold text-[#F5F7FA] tracking-tight">
            Um Sistema Operacional para a Disrupção.
          </p>
           <p className="mt-6 text-lg text-[#A0AEC0]">
             Nosso framework não está limitado a um único nicho. Ele é um <strong className="text-[#F5F7FA]">sistema operacional universal</strong> para resolver problemas complexos.
          </p>
        </div>

        <div className="my-16 flex justify-center">
            <img 
                src="https://srv1916-files.hstgr.io/a348851f00e7054e/api/preview/big/public_html/Pics/TASK3.png?auth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJsb2NhbGUiOiJlbl9HQiIsInZpZXdNb2RlIjoibGlzdCIsInNpbmdsZUNsaWNrIjpmYWxzZSwicGVybSI6eyJhZG1pbiI6ZmFsc2UsImV4ZWN1dGUiOmZhbHNlLCJjcmVhdGUiOnRydWUsInJlbmFtZSI6dHJ1ZSwibW9kaWZ5Ijp0cnVlLCJkZWxldGUiOnRydWUsInNoYXJlIjpmYWxzZSwiZG93bmxvYWQiOnRydWV9LCJjb21tYW5kcyI6W10sImxvY2tQYXNzd29yZCI6dHJ1ZSwiaGlkZURvdGZpbGVzIjpmYWxzZSwiZGF0ZUZvcm1hdCI6ZmFsc2V9LCJpc3MiOiJGaWxlIEJyb3dzZXIiLCJleHAiOjE3NTg3ODU5NTQsImlhdCI6MTc1ODc3ODc1NH0.IJr3m-EL3isQGabokuHdarMQtyEAE5jbzHBI65WC3nk&inline=true&key=1758758430547"
                alt="Visão cósmica com uma estrela central se conectando a diferentes planetas holográficos, representando a aplicabilidade universal do framework em diversos setores."
                className="rounded-2xl shadow-lg max-w-3xl w-full object-cover aspect-video border border-[#A0AEC0]/20"
                loading="lazy"
            />
        </div>

        <div className="mt-16 grid lg:grid-cols-3 gap-8">
            {applications.map((app) => (
              <div key={app.title} className="group relative p-8 bg-[#101423] rounded-2xl border border-[#A0AEC0]/20 transition-all duration-300 transform hover:scale-[1.02] hover:border-[#43D9C9]/50 hover:shadow-2xl hover:shadow-[#43D9C9]/20">
                  <h3 className="text-xl font-bold text-[#F5F7FA]">{app.title}</h3>
                  <div className="mt-6 space-y-4">
                      <div>
                          <p className="text-sm font-medium text-[#A0AEC0]">Problema:</p>
                          <p className="mt-1 text-base text-[#F5F7FA]">{app.problem}</p>
                      </div>
                      <div>
                          <p className="text-sm font-medium text-[#A0AEC0]">Solução:</p>
                          <p className="mt-1 text-base text-[#F5F7FA]">{app.solution}</p>
                      </div>
                       <div>
                          <p className="text-sm font-medium text-[#A0AEC0]">Status:</p>
                          <p className={`mt-1 text-base font-semibold ${app.statusColor}`}>{app.status}</p>
                      </div>
                  </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};