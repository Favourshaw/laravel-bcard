
import React, { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus, FiPlusCircle, FiMinusCircle } from "react-icons/fi";

interface FaqItemProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: ReactNode;
}

const FaqItem: React.FC<FaqItemProps> = ({
  title,
  isOpen,
  onToggle,
  children,
}) => {
  return (
    <div className="border-b  border-b-[#EAECF0] py-6 my-6">
      <button
        onClick={onToggle}
        className="w-full flex text-primary justify-between items-center text-left text-base md:text-lg font-bold"
      >
        <span>{title}</span>
        <span className="text-xl">{isOpen ? <FiMinusCircle /> : <FiPlusCircle />}</span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-2 text-base text-gray-500 ">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FaqItem;
