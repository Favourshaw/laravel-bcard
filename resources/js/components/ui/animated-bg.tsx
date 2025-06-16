import { motion } from 'framer-motion';

interface AnimatedBgProps {
  primaryColor: string; // example: "#1e3a8a"
}

const AnimatedBg = ({ primaryColor }: AnimatedBgProps) => {
  return (
    <div className="fixed inset-0 z-10 overflow-hidden">
      {/* Gradient background with dynamic primary color */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom right, black, ${primaryColor}, indigo)`
        }}
      />

      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div
        className="absolute top-3/4 right-1/4 w-48 h-48 bg-pink-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 60, 0],
          y: [0, 80, -40, 0],
          scale: [1, 0.8, 1.3, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div
        className="absolute top-1/2 right-1/3 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 60, -80, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="absolute inset-0 bg-transparent opacity-30" />
    </div>
  );
};

export default AnimatedBg;
