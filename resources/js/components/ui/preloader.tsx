"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SpinnerDotted } from "spinners-react";
const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
    >
      <SpinnerDotted size={150} color="#069a41" />
    </motion.div>
  );
};

export default Preloader;
