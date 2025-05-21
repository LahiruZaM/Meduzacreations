
import { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
      
      // Track hover on links, buttons and any clickable elements
      const clickables = document.querySelectorAll('a, button, [role="button"]');
      clickables.forEach(element => {
        element.addEventListener('mouseenter', onLinkMouseEnter);
        element.addEventListener('mouseleave', onLinkMouseLeave);
      });
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      
      // Clean up link listeners
      const clickables = document.querySelectorAll('a, button, [role="button"]');
      clickables.forEach(element => {
        element.removeEventListener('mouseenter', onLinkMouseEnter);
        element.removeEventListener('mouseleave', onLinkMouseLeave);
      });
    };
    
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    const onMouseEnter = () => {
      setHidden(false);
    };
    
    const onMouseLeave = () => {
      setHidden(true);
    };
    
    const onMouseDown = () => {
      setClicked(true);
    };
    
    const onMouseUp = () => {
      setClicked(false);
    };
    
    const onLinkMouseEnter = () => {
      setLinkHovered(true);
    };
    
    const onLinkMouseLeave = () => {
      setLinkHovered(false);
    };

    // Only add the cursor on desktop devices
    if (window.matchMedia('(pointer: fine)').matches) {
      addEventListeners();
      // Unhide cursor after a brief delay so it doesn't flash at [0,0]
      setTimeout(() => setHidden(false), 500);
      
      return () => {
        removeEventListeners();
      };
    }
  }, []);

  if (typeof window === 'undefined' || !window.matchMedia('(pointer: fine)').matches) {
    return null;
  }

  return (
    <>
      <div 
        className="cursor-dot" 
        style={{
          left: `${position.x}px`, 
          top: `${position.y}px`,
          opacity: hidden ? 0 : 1,
          transform: `translate(-50%, -50%) scale(${clicked ? 0.8 : 1})`,
        }}
      />
      <div 
        className="cursor-outline" 
        style={{
          left: `${position.x}px`, 
          top: `${position.y}px`,
          opacity: hidden ? 0 : 1,
          transform: `translate(-50%, -50%) scale(${clicked ? 0.8 : 1}) ${linkHovered ? 'scale(1.5)' : ''}`,
          transition: 'opacity 0.15s ease-in-out, transform 0.15s ease-in-out',
        }}
      />
    </>
  );
};

export default CustomCursor;
