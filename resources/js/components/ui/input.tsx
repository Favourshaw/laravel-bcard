import * as React from "react";
import { motion, MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type InputProps = React.ComponentProps<"input"> & MotionProps;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <motion.input
        type={type}
        data-slot="input"
        ref={ref}
        whileFocus={{ scale: 1.01 }}
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={cn(
          "border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex  w-full  rounded-md border bg-transparent px-3 py-3 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 text-text",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
