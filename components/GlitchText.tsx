import React from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: React.ElementType;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = "", as: Tag = 'span' }) => {
  return (
    <Tag className={`glitch-wrapper relative ${className}`} data-text={text}>
      {text}
    </Tag>
  );
};

export default GlitchText;