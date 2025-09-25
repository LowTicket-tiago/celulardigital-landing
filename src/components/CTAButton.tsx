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

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.open('https://checkout4.xgrow.com/pt/53cc08d4-9b86-4d95-8b52-de4c6c37bf5b/OTczNDA=', '_blank');
    }
  };

  return (
    <Button
      onClick={handleClick}
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