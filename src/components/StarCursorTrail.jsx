import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles"; // loads all shapes/effects

export const StarCursorTrail = () => {
  const [init, setInit] = useState(false);

  // Initialize the engine once
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesOptions = {
  fpsLimit: 120,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "trail", 
      },
    },
    modes: {
      trail: {
        delay: 0.1, 
        quantity: 1, 
        pauseOnStop: true,
      },
    },
  },
  particles: {
    number: {
      value: 0, 
    },
    shape: {
      type: "star",
    },
    color: {
      value: "#000000",
    },
    opacity: {
      value: { min: 0, max: 1 },
      animation: {
        enable: true,
        speed: 2,
        startValue: "max",
        destroy: "min", 
      },
    },
    size: {
      value: { min: 2, max: 4 },
    },
    move: {
      enable: true,
      speed: 1, 
      direction: "none",
      outModes: "destroy",
    },
  },
  detectRetina: true,
};

  return init ? (
    <Particles id="tsparticles" options={particlesOptions} />
  ) : null;
};