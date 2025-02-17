import React, { useEffect, useMemo, useState } from "react";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import {
  Container,
  ISourceOptions,
  MoveDirection,
  OutMode,
  InteractivityDetect,
  DivType,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

type CenterMode = "percent" | "precise";

const Background: React.FC = () => {
  const [init, setInit] = useState<boolean>(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    //console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      autoPlay: true,
      background: {
        color: { value: "#1a1a1a" },
        opacity: 1,
      },
      backgroundMask: {
        composite: "destination-out" as GlobalCompositeOperation,
        cover: {
          opacity: 1,
          color: { value: "" },
        },
        enable: false,
      },
      fullScreen: { enable: true, zIndex: 0 },
      detectRetina: true,
      fpsLimit: 120,
      interactivity: {
        detectsOn: "window" as InteractivityDetect,
        events: {
          onClick: { enable: false, mode: [] },
          onDiv: {
            selectors: [],
            enable: false,
            mode: ["push"],
            type: "circle" as DivType,
          },
          onHover: {
            enable: false,
            mode: [],
            parallax: { enable: false, force: 2, smooth: 10 },
          },
          resize: { delay: 0.5, enable: true },
        },
      },
      particles: {
        move: {
          direction: "bottom" as MoveDirection,
          enable: true,
          speed: 1,
        },
        number: {
          density: { enable: true, width: 1920, height: 1080 },
          value: 85, 
        },
        opacity: {
          value: .4,
          random: true,
          animation: { enable: true, speed: 1, minimumValue: 0.1 },
        },
        shape: { type: "circle" },
        size: {
          value: { min: 4, max: 10 },
          animation: {
            enable: true,
            speed: 2,
            minimumValue: 1,
            sync: false
          }
        },
      },
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
    }),
    []
  );

  if (init) {
    return <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />;
  }

  return null;
};

export default Background;
