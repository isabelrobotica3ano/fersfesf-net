import React from 'react';
import { TeamMemberCard } from './TeamMemberCard';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  instagram?: string;
  linkedin?: string;
  email?: string;
}

export function Team() {
  const team: TeamMember[] = [
    {
      name: "Ana Silva",
      role: "Engenheira de Robótica",
      bio: "Especialista em robótica industrial com 8 anos de experiência em automação.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
      instagram: "ana.robotech",
    },
    {
      name: "Carlos Santos",
      role: "Desenvolvedor de IA",
      bio: "Pesquisador em inteligência artificial aplicada à robótica autônoma.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      instagram: "carlos.ai.robotech",
    },
    {
      name: "Júlia Costa",
      role: "Especialista em Drones",
      bio: "Pioneira no desenvolvimento de sistemas autônomos para drones.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
      instagram: "julia.drones",
    }
  ];

  return (
    <section id="equipe" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nossa Equipe</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <TeamMemberCard
              key={index}
              {...member}
              onBioChange={(newBio) => console.log(`Bio updated for ${member.name}:`, newBio)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}