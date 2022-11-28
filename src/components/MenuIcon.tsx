import React, { useEffect, useRef, useState } from "react";
import menuIcon from "react-useanimations/lib/menu3";
import lottie, { AnimationItem } from "lottie-web";

interface Props {
  open: boolean;
  onChange: (open: boolean) => void;
}

export default function MenuIcon({ open, onChange }: Props) {
  const animationContainer = useRef<HTMLDivElement | null>(null);
  const [animation, setAnimation] = useState<AnimationItem | undefined>();

  useEffect(() => {
    if (animationContainer.current) {
      const animation = lottie.loadAnimation({
        container: animationContainer.current,
        animationData: menuIcon.animationData,
        renderer: "svg",
        autoplay: false,
        loop: false,
      });
      animation.setSpeed(4);
      setAnimation(animation);
    }
  }, []);

  useEffect(() => {
    if (animation) {
      animation.setDirection(open ? 1 : -1);
      animation.play();
    }
  }, [open]);

  return (
    <div
      className="menu-icon"
      onClick={() => onChange(!open)}
      ref={animationContainer}
    ></div>
  );
}
