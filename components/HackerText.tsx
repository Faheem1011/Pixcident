import React, { useState, useEffect, useRef } from 'react';

interface HackerTextProps {
  text: string;
  className?: string;
  speed?: number;
}

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

const HackerText: React.FC<HackerTextProps> = ({ text, className = "", speed = 30 }) => {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<any>(null);

  const animate = () => {
    let iteration = 0;
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(prev => 
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return LETTERS[Math.floor(Math.random() * LETTERS.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
      }

      iteration += 1 / 3;
    }, speed);
  };

  useEffect(() => {
    animate(); // Animate on mount
    return () => clearInterval(intervalRef.current);
  }, [text]);

  return (
    <span 
      className={`font-mono ${className}`} 
      onMouseEnter={animate}
    >
      {displayText}
    </span>
  );
};

export default HackerText;