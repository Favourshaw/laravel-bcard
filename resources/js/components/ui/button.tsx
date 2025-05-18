import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { motion, type MotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 text-[16px] whitespace-nowrap rounded-md font-medium transition-[color,box-shadow] border border-primary disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-white shadow-xs hover:bg-white hover:text-primary",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-white text-primary shadow-xs hover:text-white hover:bg-primary",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "py-[10px] px-[18px] has-[>svg]:px-3",
        sm: "py-[8px] px-[14px] has-[>svg]:px-3 text-sm",
        full: "py-[10px] px-[18px] w-full",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> &
  MotionProps

const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  whileHover,
  whileTap,
  transition,
  ...props
}) => {
  return (
    <motion.button
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      whileHover={whileHover ?? { scale: 1.03 }}
      whileTap={whileTap ?? { scale: 0.97 }}
      transition={transition ?? { type: "spring", stiffness: 300 }}
      {...props}
    />
  )
}

export { Button, buttonVariants }
