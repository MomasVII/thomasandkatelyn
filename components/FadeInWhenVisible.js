import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { fadeInUp } from "../styles/animations";

function FadeInWhenVisible({ children, delay }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{
        ease: "easeInOut",
        delay: delay,
        duration: 1,
      }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 30 },
      }}
    >
      {children}
    </motion.div>
  );
}

//Export the above so we can impoprt it on another page.
export default FadeInWhenVisible;
