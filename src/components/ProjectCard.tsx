import React from 'react';
import { Instagram } from 'lucide-react';
import { ImageGallery } from './ImageGallery';
import { EditableText } from './EditableText';

interface ProjectCardProps {
  title: string;
  description: string;
  images: string[];
  instagramHandle?: string;
  onDescriptionChange?: (text: string) => void;
}

export function ProjectCard({
  title,
  description,
  images,
  instagramHandle,
  onDescriptionChange
}: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
      <ImageGallery images={images} alt={title} />
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          {instagramHandle && (
            <a
              href={`https://instagram.com/${instagramHandle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-pink-600 hover:text-pink-700"
            >
              <Instagram className="h-5 w-5" />
              <span className="text-sm">@{instagramHandle}</span>
            </a>
          )}
        </div>
        <EditableText
          initialText={description}
          onSave={onDescriptionChange || (() => {})}
          className="text-gray-600"
        />
      </div>
    </div>
  );
}