import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contato" className="py-16 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Entre em Contato</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Informações de Contato</h3>
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-blue-400" />
              <span>isabelrobotica3ano@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6 text-blue-400" />
              <span>(11) 9999-9999</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="h-6 w-6 text-blue-400" />
              <span>Bacabal, MA - Brasil</span>
            </div>
          </div>
          
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Nome</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 focus:border-blue-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 focus:border-blue-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Mensagem</label>
              <textarea 
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 focus:border-blue-400 focus:outline-none"
              ></textarea>
            </div>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}