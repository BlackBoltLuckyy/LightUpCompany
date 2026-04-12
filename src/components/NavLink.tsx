import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
  disabledClassName?: string;
  hoverClassName?: string;
  focusClassName?: string;
  disabled?: boolean;
  variant?: "default" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  transitionDuration?: "fast" | "normal" | "slow";
}

/**
 * Enhanced NavLink component with smooth transitions and additional styling
 *
 * @param className - Base CSS classes
 * @param activeClassName - Classes applied when link is active
 * @param pendingClassName - Classes applied when navigation is pending
 * @param disabledClassName - Classes applied when link is disabled
 * @param hoverClassName - Classes applied on hover
 * @param focusClassName - Classes applied on focus
 * @param disabled - Whether the link is disabled
 * @param variant - Visual variant of the link
 * @param size - Size variant of the link
 * @param transitionDuration - Speed of transitions
 */
const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({
    className,
    activeClassName,
    pendingClassName,
    disabledClassName,
    hoverClassName,
    focusClassName,
    disabled = false,
    variant = "default",
    size = "md",
    transitionDuration = "normal",
    to,
    onClick,
    ...props
  }, ref) => {
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
      if (disabled) {
        event.preventDefault();
        return;
      }
      onClick?.(event);
    };

    const getTransitionClasses = () => {
      const durations = {
        fast: "duration-150 ease-out",
        normal: "duration-200 ease-in-out",
        slow: "duration-300 ease-in-out",
      };
      return `transition-all ${durations[transitionDuration]}`;
    };

    const getVariantClasses = () => {
      const variants = {
        default: "text-foreground hover:text-primary hover:scale-105 active:scale-95",
        ghost: "text-muted-foreground hover:text-foreground hover:bg-accent hover:shadow-sm active:shadow-inner",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:border-accent-foreground hover:shadow-md active:shadow-sm",
      };
      return variants[variant];
    };

    const getSizeClasses = () => {
      const sizes = {
        sm: "px-2 py-1 text-sm rounded-sm",
        md: "px-3 py-2 text-base rounded-md",
        lg: "px-4 py-3 text-lg rounded-lg",
      };
      return sizes[size];
    };

    return (
      <RouterNavLink
        ref={ref}
        to={to}
        onClick={handleClick}
        className={({ isActive, isPending }) =>
          cn(
            // Base styles with smooth transitions
            "inline-flex items-center justify-center font-medium",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            "disabled:pointer-events-none disabled:opacity-50",
            "transform-gpu", // Hardware acceleration for smoother animations

            // Smooth transitions
            getTransitionClasses(),

            // Variant and size styles
            getVariantClasses(),
            getSizeClasses(),

            // State-based classes
            className,
            isActive && activeClassName,
            isPending && pendingClassName,
            disabled && disabledClassName,

            // Interactive states with smooth transitions
            "hover:transform hover:scale-105 active:transform active:scale-95",
            hoverClassName && `hover:${hoverClassName}`,
            focusClassName && `focus:${focusClassName}`,

            // Disabled state
            disabled && "pointer-events-none opacity-50 cursor-not-allowed"
          )
        }
        aria-disabled={disabled}
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
