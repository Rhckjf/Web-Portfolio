"use client";

import { motion } from "framer-motion";

export function MovingGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-black pointer-events-none">
      
      {/* Huge Glowing Ambient Lights */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[60vw] h-[60vh] rounded-full bg-violet-600/30 blur-[120px]"
        animate={{
          x: [0, 100, 0, -100, 0],
          y: [0, -50, 50, -50, 0],
          scale: [1, 1.1, 0.9, 1.1, 1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[60vw] h-[60vh] rounded-full bg-blue-600/20 blur-[120px]"
        animate={{
          x: [0, -100, 0, 100, 0],
          y: [0, 50, -50, 50, 0],
          scale: [1, 0.9, 1.1, 0.9, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* 3D Grid Floor */}
      <div 
        className="absolute inset-0"
        style={{ perspective: "1000px" }}
      >
        <motion.div 
          className="absolute w-[300vw] h-[300vh] left-[-100vw] top-[-50vh]"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(139, 92, 246, 0.5) 2px, transparent 2px), linear-gradient(to bottom, rgba(139, 92, 246, 0.5) 2px, transparent 2px)",
            backgroundSize: "80px 80px",
            transformOrigin: "center top",
            transform: "rotateX(75deg)",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "0px 80px"]
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Soft fade at the top horizon */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black/50 to-black pointer-events-none" />
      </div>
    </div>
  );
}
