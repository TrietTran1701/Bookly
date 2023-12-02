export const outer_con_variants = {
  open: {
    opacity: 1,
    transition: {
      delay: 0.2,
    },
  },
  closed: {
    opacity: 0,
    transition: {
      stiffness: 10,
      damping: 10,
    },
  },
};

export const con_variants = {
  open: {
    transform: 'translate(0%)',
  },
  closed: {
    transform: 'translate(100%)',
    transition: {
      delay: 0.28,
      type: 'spring',
      stiffness: 800,
      damping: 40,
    },
  },
};

export const ul_variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

export const li_variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
