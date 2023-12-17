import React from "react";
import { useSpring, animated } from "react-spring";

const BackgroundAnimation = () => {
  const backgroundProps = useSpring({
    from: { opacity: 0, transform: "scale(1.1)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { duration: 1000 },
  });

  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      <animated.div
        style={{
          ...backgroundProps,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "linear-gradient(45deg, #3498db, #2ecc71)",
        }}
      />
      <div className="rotating-objects">
        <div className="object" />
        <div className="object" />
        <div className="object" />
        {/* Добавьте столько объектов, сколько вам нужно */}
      </div>
    </div>
  );
};

export default BackgroundAnimation;
