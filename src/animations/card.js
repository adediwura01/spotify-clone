export const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },

  hover: {
    y: -6,

    transition: {
      duration: 0.2,
    },
  },

  tap: {
    scale: 0.98,
  },
};

export const playButtonVariants = {
  hidden: {
    opacity: 0,
    y: 12,
    scale: 0.9,
  },

  hover: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.25,
    },
  },
};