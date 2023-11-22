import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { Container, Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

import particlesConfig from './config/particles-config';

const ParticleComponent: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log(container);
  }, []);

  return (
     // @ts-ignore
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
       // @ts-ignore
      options={particlesConfig}
    />
  );
};

export default ParticleComponent;
