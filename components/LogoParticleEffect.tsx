import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  initialX: number;
  initialY: number;
  displacementX: number;
  displacementY: number;
  color: string;
}

const ParticleImage: React.FC<{ imageSrc: string }> = ({ imageSrc }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particles: Particle[] = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    if (canvas && context) {
      const image = new Image();
      image.src = imageSrc;

      image.onload = () => {
        const width = image.width;
        const height = image.height;

        // Set canvas size to match the image size
        canvas.width = width;
        canvas.height = height;

        // Draw the image on the canvas
        context.drawImage(image, 0, 0, width, height);

        // Get image data to extract pixel information
        const imageData = context.getImageData(0, 0, width, height);

        // Iterate through pixel data to create particles
        for (let x = 0; x < width; x += 5) {
          for (let y = 0; y < height; y += 5) {
            const index = (y * width + x) * 4; // Calculate the index in the pixel data array
            const color = `rgba(${imageData.data[index]}, ${imageData.data[index + 1]}, ${imageData.data[index + 2]}, ${imageData.data[index + 3] / 255})`;

            particles.push({
              x,
              y,
              initialX: x,
              initialY: y,
              displacementX: 0,
              displacementY: 0,
              color,
            });
          }
        }

        // Add event listener for mouse hover
        canvas.addEventListener('mousemove', handleMouseMove);
      };
    }

    return () => {
      // Cleanup event listener
      canvas?.removeEventListener('mousemove', handleMouseMove);
    };
  }, [imageSrc]);

  const handleMouseMove = (event: MouseEvent) => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    if (canvas && context) {
      // Clear the canvas
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Update particle positions based on mouse hover
      const mouseX = event.clientX - canvas.getBoundingClientRect().left;
      const mouseY = event.clientY - canvas.getBoundingClientRect().top;

      particles.forEach((particle) => {
        particle.displacementX = (mouseX - particle.initialX) * 0.05;
        particle.displacementY = (mouseY - particle.initialY) * 0.05;

        // Draw particles on the canvas
        context.fillStyle = particle.color;
        context.fillRect(particle.x + particle.displacementX, particle.y + particle.displacementY, 3, 3);
      });
    }
  };

  return (
    <canvas ref={canvasRef} className="w-2/3" />
  );
};

export default ParticleImage;
