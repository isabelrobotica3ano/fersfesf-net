import React from 'react';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  const projects = [
    {
      title: "Robótica Industrial",
      description: "Automação de linhas de produção com robôs inteligentes",
      images: [
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1624379149613-bfd7898ad49b?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80"
      ],
      instagramHandle: "robotech.industrial"
    },
    {
      title: "Drones Autônomos",
      description: "Desenvolvimento de drones para inspeção e monitoramento",
      images: [
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&q=80"
      ],
      instagramHandle: "robotech.drones"
    },
    {
      title: "Robôs Colaborativos",
      description: "Sistemas robóticos para trabalho conjunto com humanos",
      images: [
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80"
      ],
      instagramHandle: "robotech.colab"
    },
    {
      title: "Inteligência Artificial",
      description: "Sistemas de IA aplicados à robótica e automação",
      images: [
        "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80"
      ],
      instagramHandle: "robotech.ai"
    }
  ];

  return (
    <section id="projetos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projetos em Destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              images={project.images}
              instagramHandle={project.instagramHandle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}