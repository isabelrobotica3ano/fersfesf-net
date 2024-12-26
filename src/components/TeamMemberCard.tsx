import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import { EditableText } from './EditableText';

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  instagram?: string;
  linkedin?: string;
  email?: string;
  onBioChange?: (text: string) => void;
}

export function TeamMemberCard({
  name,
  role,
  bio,
  image,
  instagram,
  linkedin,
  email,
  onBioChange
}: TeamMemberCardProps) {
  return (
    <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold text-center mb-1">{name}</h3>
      <p className="text-blue-500 text-center mb-3">{role}</p>
      <EditableText
        initialText={bio}
        onSave={onBioChange || (() => {})}
        className="text-gray-600 text-center mb-4"
      />
      <div className="flex justify-center gap-4">
        {instagram && (
          <a
            href={`https://instagram.com/${instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-700"
          >
            <Instagram className="h-5 w-5" />
          </a>
        )}
        {linkedin && (
          <a
            href={`https://linkedin.com/in/${linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        )}
        {email && (
          <a
            href={`mailto:${email}`}
            className="text-gray-600 hover:text-gray-700"
          >
            <Mail className="h-5 w-5" />
          </a>
        )}
      </div>
    </div>
  );
}