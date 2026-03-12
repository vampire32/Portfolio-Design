import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link" | "glass";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    
    const variants = {
      default: "bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-primary/40",
      outline: "border-2 border-primary/50 text-primary hover:bg-primary/10",
      ghost: "hover:bg-white/5 text-foreground",
      link: "text-primary underline-offset-4 hover:underline",
      glass: "bg-white/5 backdrop-blur-sm border border-white/10 text-foreground hover:bg-white/10"
    };

    const sizes = {
      default: "h-11 px-6 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-14 rounded-xl px-8 text-lg",
      icon: "h-10 w-10",
    };

    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-95",
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
