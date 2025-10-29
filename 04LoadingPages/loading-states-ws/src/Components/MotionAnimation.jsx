"use client";
import { box } from "./box";
import { motion } from "motion/react";

export default function MotionAnimation() {
  return (
    <motion.div
      s
      className="w-fit"
      style={box}
      animate={{
        
        rotate: 360,
        transition: { duration: 2 },
      }}
    >
    </motion.div>
  );
}
