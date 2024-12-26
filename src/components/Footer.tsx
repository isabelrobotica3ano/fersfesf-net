import React from 'react';
import { Bot, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  const socialLinks = {
    instagram: "pires.xz",
    email: "isabelrobotica3ano@gmail.com"
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Bot className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-200 text-transparent bg-clip-text">
                Isabel Robotica
              </span>
            </div>
            <p className="text-gray-300">
              Inovando o futuro através da robótica e automação inteligente.
            </p>
            <div className="flex space-x-6">
              <a
                href={`https://instagram.com/${socialLinks.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300 transform hover:scale-110 transition-all"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href={`mailto:${socialLinks.email}`}
                className="text-gray-400 hover:text-gray-300 transform hover:scale-110 transition-all"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-blue-200 text-transparent bg-clip-text">
              Contato
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors group">
                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>{socialLinks.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors group">
                <Phone className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors group">
                <MapPin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>Bacabal, MA - Brasil</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-blue-200 text-transparent bg-clip-text">
              Newsletter
            </h3>
            <p className="text-gray-300">
              Fique por dentro das últimas novidades em robótica e automação.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="w-full px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 focus:outline-none transition-all placeholder-gray-500"
              />
              <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-2 rounded-lg transition-all transform hover:scale-105 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 focus:outline-none">
                Inscrever
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Isabel Robotica. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}