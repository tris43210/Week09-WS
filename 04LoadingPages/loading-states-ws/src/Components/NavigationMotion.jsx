"use client";
import { motion } from "motion/react";

export default function NavigationMotion({ children }) {
  return (
    
      <motion.nav className="w-screen flex justify-around"
      whileTap={{ scale: 1.1 }}
      >
        {children}
      </motion.nav>
      
    
  );
}
