import React from 'react';
import { ChevronRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="inicio" className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-white via-blue-200 to-blue-400 text-transparent bg-clip-text">
              O Futuro da Robótica Começa Aqui
            </h1>
            <p className="text-lg text-blue-100">
              Somos pioneiros em soluções robóticas avançadas, combinando inteligência 
              artificial e automação para transformar indústrias e criar um futuro mais 
              eficiente e inovador.
            </p>
            <div className="space-y-4 text-gray-300">
              <p className="glass-effect p-4 rounded-lg">
                Nossa missão é democratizar o acesso à robótica avançada, 
                desenvolvendo soluções que aumentam a produtividade e segurança 
                nos ambientes de trabalho.
              </p>
              <p className="glass-effect p-4 rounded-lg">
                Com mais de 10 anos de experiência, nossa equipe multidisciplinar 
                está na vanguarda da revolução tecnológica.
              </p>
            </div>
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-full flex items-center space-x-2 transition-all transform hover:scale-105 shadow-lg">
              <span>Saiba mais</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          <div className="md:w-1/2 animate-fade-in" style={{animationDelay: '0.3s'}}>
            <img 
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80"
              alt="Robô industrial"
              className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}