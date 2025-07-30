import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";

const WaveAnimation = () => {
  // Device detection
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);

  // Refs for performance
  const waveContainerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const dotsRef = useRef([]);
  const lastTimeRef = useRef(0);
  const fpsRef = useRef(0);

  // State management
  const [isPaused] = useState(false); // Removed setIsPaused

  // Memoized configuration based on device
  const config = useMemo(
    () => ({
      lines: isMobile ? 3 : 5, // Reduced lines for mobile
      dotsPerLine: isMobile ? 15 : 35, // Reduced dots per line for mobile
      dotSize: isMobile ? 2 : 2,
      baseSpeed: 0.5,
      waveSpeed: isMobile ? 0.001 : 0.001,
      amplitudeRange: isMobile ? [50, 100] : [50, 120], // Adjusted amplitude for mobile
      spacing: isMobile ? 25 : 35,
      referenceWidth: 1920,
      maxFPS: 30,
      touchRadius: isMobile ? 60 :90,
      minOpacity: 0.4,
      maxOpacity: 1,
    }),
    [isMobile]
  );

  // Memoized color scheme
  const lineColors = useMemo(
    () => [
      { color: "#7F00FF", glow: "#9F3FFF" },
      { color: "#4ECDC4", glow: "#6EDDE4" },
      { color: "#FF61D2", glow: "#FF81F2" },
      { color: "#4CAF50", glow: "#6CBF70" },
      { color: "#FFD700", glow: "#FFE720" },
      { color: "#FF6B6B", glow: "#FF8B8B" },
      { color: "#40E0D0", glow: "#60FFF0" },
    ],
    []
  );

  // Performance optimization - speed adjustment
  const getSpeedAdjustment = useCallback(
    (screenWidth) => {
      return (
        (screenWidth / config.referenceWidth)
      );
    },
    [config.referenceWidth]
  );

  // Enhanced dot creation with performance considerations
  const createDot = useCallback(
    (lineIndex, position, existingDot = null) => {
      let dot;
      if (existingDot) {
        dot = existingDot.element;
      } else {
        dot = document.createElement("div");
        dot.classList.add("wave-dot");
        waveContainerRef.current?.appendChild(dot);
      }

      const { color, glow } = lineColors[lineIndex % lineColors.length];

      // Apply styles efficiently
      Object.assign(dot.style, {
        backgroundColor: color,
        boxShadow: `0 0 8px ${glow}`,
        width: `${config.dotSize}px`,
        height: `${config.dotSize}px`,
        borderRadius: "50%",
        position: "absolute",
        willChange: "transform, opacity",
      });

      const amplitude =
        config.amplitudeRange[0] +
        Math.random() * (config.amplitudeRange[1] - config.amplitudeRange[0]);

      return {
        element: dot,
        x: position,
        y: window.innerHeight / 3 + lineIndex * config.spacing,
        length: 0.004,
        amplitude,
        offset: lineIndex * (Math.PI / 3),
        speed: config.waveSpeed * (1 + Math.random() * 0.2),
        originalX: position,
        targetAmplitude: amplitude,
      };
    },
    [config, lineColors]
  );

  // Main animation loop with optimizations
  const animate = useCallback(
    (timestamp) => {
      if (isPaused) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      // FPS control
      const elapsed = timestamp - lastTimeRef.current;
      if (elapsed < 1000 / config.maxFPS) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }
      lastTimeRef.current = timestamp;
      fpsRef.current = 1000 / elapsed;

      const screenWidth = window.innerWidth;
      const speedAdjustment = getSpeedAdjustment(screenWidth);

      dotsRef.current.forEach((lineDots) => {
        lineDots.forEach((dot) => {
          const adjustedSpeed = config.baseSpeed * speedAdjustment;
          dot.x -= adjustedSpeed;

          if (dot.x + config.dotSize < 0) {
            dot.x = screenWidth;
          }

          const primaryWave =
            Math.sin(dot.x * dot.length + timestamp * dot.speed + dot.offset) *
            dot.amplitude;

          const newY = dot.y + primaryWave;

          // Batch transform updates
          dot.element.style.transform = `translate(${dot.x}px, ${newY}px)`;
        });
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    },
    [config, isPaused, getSpeedAdjustment]
  );

  // Initialize and handle device detection
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
    };

    // Initialize dots
    if (waveContainerRef.current) {
      const screenWidth = window.innerWidth;
      const dotSpacing = screenWidth / config.dotsPerLine;

      dotsRef.current = Array(config.lines)
        .fill()
        .map((_, lineIndex) =>
          Array(config.dotsPerLine)
            .fill()
            .map((_, dotIndex) => {
              const x = dotIndex * dotSpacing;
              return createDot(lineIndex, x);
            })
        );

      // Start animation
      animationFrameRef.current = requestAnimationFrame(animate);
    }

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener("resize", handleResize);
      dotsRef.current.forEach((lineDots) => {
        lineDots.forEach((dot) => dot.element.remove());
      });
      dotsRef.current = [];
    };
  }, [config, animate, createDot]);

  return (
    <div className="">
      <div ref={waveContainerRef} className="z-[0] relative top-[30%]" />
    </div>
  );
};

export default WaveAnimation;
