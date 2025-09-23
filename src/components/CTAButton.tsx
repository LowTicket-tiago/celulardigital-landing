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
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl"
  };

  return (
    <Button
      onClick={onClick}
      className={cn(
        "gradient-neon text-black font-bold neon-glow transition-bounce hover:scale-105",
        "shadow-lg hover:shadow-xl",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </Button>
  );
};