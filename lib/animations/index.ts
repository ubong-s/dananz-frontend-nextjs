import { Variants } from 'framer-motion';

const easing = [0.6, -0.05, 0.01, 0.99];

export const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
    rotate: 60,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      delay: 0.7,
      duration: 0.2,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
};

export const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const fadeIn: Variants = {
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

export const fadeInUp: Variants = {
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

export const fadeInDown: Variants = {
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

export const collapse: Variants = {
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

export const stagger: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.3,
    },
  },
};
