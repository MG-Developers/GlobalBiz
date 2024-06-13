import { motion } from "framer-motion";

export const FadeIn = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit="hidden"
      viewport={{ margin: "100% 0px -180px 0px" }}
    >
      {children}
    </motion.div>
  );
};
