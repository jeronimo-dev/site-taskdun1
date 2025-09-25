import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const Spinner: React.FC = () => (
    <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#43D9C9]"></div>
    </div>
);

export const IconGeneratorSection: React.FC = () => {
    const [generatedIcon, setGeneratedIcon] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleGenerateIcon = async () => {
        setIsLoading(true);
        setError(null);
        setGeneratedIcon(null);

        try {
            if (!process.env.API_KEY) {
              throw new Error("API key not found.");
            }
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            
            const response = await ai.models.generateImages({
                model: 'imagen-4.0-generate-001',
                prompt: "Create a modern, sleek favicon based on the Taskdun brand emblem (a stylized, symmetrical 'T' that looks like a futuristic pillar). Render it in a vibrant, glowing teal (#43D9C9) against a dark navy blue background (#0A0E1A). The icon should have a subtle, clean 3D effect with soft lighting to make it pop, suggesting advanced technology and innovation. The final image should be a high-resolution square (1:1 aspect ratio), perfectly centered, and clear enough to be used as a small icon.",
                config: {
                  numberOfImages: 1,
                  outputMimeType: 'image/png',
                  aspectRatio: '1:1',
                },
            });

            const base64ImageBytes: string = response.generatedImages[0].image.imageBytes;
            const imageUrl = `data:image/png;base64,${base64ImageBytes}`;
            setGeneratedIcon(imageUrl);

        } catch (e) {
            console.error(e);
            setError('Não foi possível gerar o ícone. Por favor, tente novamente.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="icon-generator" className="py-20 sm:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-base font-semibold text-[#43D9C9] tracking-wider uppercase">Experimente a IA Criativa</h2>
                    <p className="mt-2 text-3xl sm:text-4xl font-bold text-[#F5F7FA] tracking-tight">
                        Gere um Ícone para a Marca Taskdun
                    </p>
                    <p className="mt-6 text-lg text-[#A0AEC0]">
                        Clique no botão abaixo para usar a IA generativa do Google e criar um ícone único e memorável para a Taskdun, com base em nossa identidade visual.
                    </p>
                </div>

                <div className="mt-12 flex flex-col items-center gap-8">
                    <button
                        onClick={handleGenerateIcon}
                        disabled={isLoading}
                        className="inline-block bg-[#43D9C9] text-[#0A0E1A] font-bold text-lg px-8 py-4 rounded-lg shadow-lg shadow-[#43D9C9]/20 hover:brightness-110 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
                        aria-label="Gerar ícone da marca Taskdun"
                    >
                        {isLoading ? 'Gerando...' : 'Gerar Ícone'}
                    </button>
                    
                    <div className="w-64 h-64 mt-4 bg-[#101423] rounded-2xl border border-[#A0AEC0]/20 flex items-center justify-center overflow-hidden" aria-live="polite">
                        {isLoading && <Spinner />}
                        {error && <p className="text-red-400 text-center p-4">{error}</p>}
                        {generatedIcon && !isLoading && (
                            <img src={generatedIcon} alt="Ícone gerado para Taskdun" className="w-full h-full object-cover" />
                        )}
                        {!isLoading && !error && !generatedIcon && (
                            <div className="text-center p-4 text-[#A0AEC0]">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <p className="mt-2 text-sm">Seu ícone aparecerá aqui.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
