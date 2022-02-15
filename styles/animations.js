export const easer = [0.6, -0.05, 0.01, 0.9];
export const fadeInUp = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easer,
    },
  },
};

export const heightChange = {
  initial: {
    height: 0,
    opacity: 0,
  },
  animate: {
    height: "100%",
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easer,
    },
  },
};

export const fadeInSide = {
  initial: {
    x: 150,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easer,
    },
  },
  exit: {
    x: -150,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: easer,
    },
  },
};

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};
