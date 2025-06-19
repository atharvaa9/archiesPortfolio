"use client"

import { motion } from "framer-motion"

export default function WaveBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.svg
        className="absolute bottom-0 left-0 w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <defs>
          <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="rgb(147, 197, 253)" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        <motion.path
          d="M0,400 C300,300 600,500 1200,400 L1200,800 L0,800 Z"
          fill="url(#wave-gradient)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        <motion.path
          d="M0,500 C400,400 800,600 1200,500 L1200,800 L0,800 Z"
          fill="url(#wave-gradient)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
        />
      </motion.svg>
    </div>
  )
}
