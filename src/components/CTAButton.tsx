import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "lg" | "xl";
  onClick?: () => void;
}

export const CTAButton = ({ children, className, size = "lg", onClick }: CTAButtonProps) => {
  const sizeClasses = {
    default: "px-4 py-3 text-sm sm:text-base",
    lg: "px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg",
    xl: "px-6 py-4 sm:px-10 sm:py-5 text-lg sm:text-xl"
  };

  return (
    <Button
      onClick={onClick}
      className={cn(
        "gradient-neon text-black font-bold neon-glow transition-bounce hover:scale-105",
        "shadow-lg hover:shadow-xl rounded-lg min-h-[48px] touch-manipulation",
        "active:scale-95 transition-all duration-200",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </Button>
  );
};