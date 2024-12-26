import React, { useState } from 'react';
import { Edit2, Check, X } from 'lucide-react';

interface EditableTextProps {
  initialText: string;
  onSave: (text: string) => void;
  className?: string;
}

export function EditableText({ initialText, onSave, className = '' }: EditableTextProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(initialText);

  const handleSave = () => {
    onSave(text);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setText(initialText);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="flex items-start gap-2">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          rows={3}
        />
        <div className="flex flex-col gap-2">
          <button
            onClick={handleSave}
            className="p-1 text-green-600 hover:text-green-700"
          >
            <Check className="h-5 w-5" />
          </button>
          <button
            onClick={handleCancel}
            className="p-1 text-red-600 hover:text-red-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative">
      <p className={className}>{text}</p>
      <button
        onClick={() => setIsEditing(true)}
        className="absolute -right-6 top-0 p-1 opacity-0 group-hover:opacity-100 transition text-gray-600 hover:text-gray-700"
      >
        <Edit2 className="h-4 w-4" />
      </button>
    </div>
  );
}