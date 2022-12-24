const easing = [0.6, -0.05, 0.01, 0.99];

export const fadeIn = {
  initial: {
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: easing,
    },
  },
};

export const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

export const fadeInDown = {
  initial: {
    y: -60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

export const collapse = {
  open: {
    opacity: 1,
    height: 'auto',
    transition: { duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] },
  },
  collapsed: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] },
  },
};

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.3,
    },
  },
};
