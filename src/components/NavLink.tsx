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
}

/**
 * Enhanced NavLink component with additional styling and state support
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

    const getVariantClasses = () => {
      const variants = {
        default: "text-foreground hover:text-primary transition-colors",
        ghost: "text-muted-foreground hover:text-foreground hover:bg-accent transition-colors",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors",
      };
      return variants[variant];
    };

    const getSizeClasses = () => {
      const sizes = {
        sm: "px-2 py-1 text-sm",
        md: "px-3 py-2 text-base",
        lg: "px-4 py-3 text-lg",
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
            // Base styles
            "inline-flex items-center justify-center rounded-md font-medium",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            "disabled:pointer-events-none disabled:opacity-50",

            // Variant and size styles
            getVariantClasses(),
            getSizeClasses(),

            // State-based classes
            className,
            isActive && activeClassName,
            isPending && pendingClassName,
            disabled && disabledClassName,
            hoverClassName && `hover:${hoverClassName}`,
            focusClassName && `focus:${focusClassName}`,

            // Disabled state
            disabled && "pointer-events-none opacity-50"
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
