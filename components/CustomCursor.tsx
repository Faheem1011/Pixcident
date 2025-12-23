import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        // Check if hovering over clickable elements
        if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button') || target.closest('.cursor-pointer')) {
            setIsHovering(true);
        } else {
            setIsHovering(false);
        }
    }

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
        {/* Main Dot */}
        <motion.div
            className="fixed top-0 left-0 w-3 h-3 bg-brand-orange rounded-full pointer-events-none z-[100] mix-blend-difference"
            animate={{
                x: mousePosition.x - 6,
                y: mousePosition.y - 6,
                scale: isClicking ? 0.8 : (isHovering ? 0 : 1)
            }}
            transition={{
                type: "tween",
                ease: "backOut",
                duration: 0.1
            }}
        />
        
        {/* Ring Follower */}
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 border border-brand-orange rounded-full pointer-events-none z-[100] mix-blend-difference"
            animate={{
                x: mousePosition.x - 16,
                y: mousePosition.y - 16,
                scale: isClicking ? 1.5 : (isHovering ? 2.5 : 1),
                opacity: isHovering ? 0.5 : 1,
                backgroundColor: isHovering ? 'rgba(255, 85, 0, 0.2)' : 'transparent',
                borderColor: isClicking ? '#fff' : '#FF5500'
            }}
            transition={{
                type: "spring",
                stiffness: 150,
                damping: 15,
                mass: 0.5
            }}
        />
    </>
  );
};

export default CustomCursor;