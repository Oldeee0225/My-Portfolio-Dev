import { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const mobileVariants: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0 } },
};

export const viewportConfig = {
  once: true,
  margin: "-10% 0px", // Triggers slightly before the element is fully in view, but ensures it doesn't wait too long
  amount: 0.2, // Requires 20% of the element to be visible
};
