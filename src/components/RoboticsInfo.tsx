import React from 'react';
import { Brain, Cpu, Shield, Zap } from 'lucide-react';

export function RoboticsInfo() {
  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Inteligência Artificial Avançada",
      description: "Nossos robôs utilizam algoritmos de IA de última geração para aprendizado contínuo e tomada de decisões autônoma."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Segurança Integrada",
      description: "Sistemas robustos de segurança garantem operação confiável e proteção tanto para operadores quanto para equipamentos."
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Processamento em Tempo Real",
      description: "Capacidade de processamento ultrarrápido permite respostas instantâneas e adaptação dinâmica a mudanças."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Eficiência Energética",
      description: "Tecnologias eco-friendly e otimização de consumo energético para operação sustentável."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">Inovação em Robótica</h2>
          <p className="text-gray-600 mb-4">
            A robótica moderna está revolucionando a forma como interagimos com a tecnologia. 
            Nossos sistemas combinam mecânica de precisão, eletrônica avançada e software 
            inteligente para criar soluções que impulsionam a indústria 4.0.
          </p>
          <p className="text-gray-600">
            Com foco em inovação contínua, desenvolvemos robôs que não apenas executam 
            tarefas, mas aprendem e se adaptam ao ambiente, colaborando de forma 
            segura com humanos e outros sistemas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition">
              <div className="text-blue-500 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}