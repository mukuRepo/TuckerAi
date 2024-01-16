import React, { useEffect, useRef } from 'react';

interface ParticleSliderProps {
  logoSrc: string;
}

const ParticleSlider3: React.FC<ParticleSliderProps> = ({ logoSrc }) => {
  const logoRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const init = () => {
      const logoElement = logoRef.current;
      const canvasElement = canvasRef.current;

      if (!logoElement || !canvasElement) return;

      const logoImage = new Image();
      logoImage.src = logoSrc || '';

      logoImage.onload = () => {
        const psScript = document.createElement('script');
        psScript.src = 'https://particleslider.com/js/particleslider/current/particleslider.js';
        psScript.setAttribute('type', 'text/javascript');
        document.body.appendChild(psScript);
        psScript.onload = () => {
          //@ts-ignore
          const ps = new window.ParticleSlider({
            ptlGap: 0,
            ptlSize: 1,
            width: window.innerWidth,
            height: window.innerHeight,
            restless: false,
            canvas: canvasElement,
            color: '#00ff19',
          });
        };
      };
    };

    const logoElement = logoRef.current;
    if (logoElement) {
      init();
    }
  }, [logoSrc]);

  return (
    <div id="particle-slider">
      <div className="slides">
        <div ref={logoRef} id="first-slide" className="slide" data-src={logoSrc}></div>
      </div>
      <canvas ref={canvasRef} className="draw"></canvas>
    </div>
  );
};

export default ParticleSlider3;
