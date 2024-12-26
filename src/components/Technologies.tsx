import React from 'react';
import { Cpu, Brain, Cog, Rocket } from 'lucide-react';

export function Technologies() {
  const technologies = [
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Automação Industrial",
      description: "Soluções avançadas para otimizar processos industriais"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Inteligência Artificial",
      description: "Sistemas inteligentes e aprendizado de máquina"
    },
    {
      icon: <Cog className="h-8 w-8" />,
      title: "Robótica Avançada",
      description: "Desenvolvimento de robôs de última geração"
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Inovação Tecnológica",
      description: "Pesquisa e desenvolvimento de novas tecnologias"
    }
  ];

  return (
    <section id="tecnologias" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nossas Tecnologias</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition">
              <div className="text-blue-500 mb-4">{tech.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
              <p className="text-gray-600">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}