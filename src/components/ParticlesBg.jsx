import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBg() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: false,
        particles: {
  number: { value: 80 },
  color: { value: "#ff0000" },
  links: {
    enable: true,
    color: "#ff0000",
    distance: 120,
    opacity: 1,
    width: 2,
  },
  move: {
    enable: true,
    speed: 3,
  },
  opacity: { value: 1 },
  size: { value: 4 },
},
        background: {
          color: "transparent",
        },
      }}
      className="absolute inset-0 w-full h-full"
    />
  );
}