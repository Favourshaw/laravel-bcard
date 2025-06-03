import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface PersonalProps {
  skills?: string[];
}

const AnimatedSkills = ({ skills = [] }: PersonalProps) => {
  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    if (skills.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [skills]);

  return (
    <div className="flex items-center">
      <span className="text-blue-500 min-h-[24px]">
        <AnimatePresence mode="wait">
          <motion.span
            key={skills[currentSkill]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            {skills[currentSkill]}
          </motion.span>
        </AnimatePresence>
      </span>
    </div>
  );
};

export default AnimatedSkills;
