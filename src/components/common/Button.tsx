import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-ublue-100 text-ugray-0 hover:bg-ublue-50",
        outline:
          "border border-ublue-200 bg-background text-ublue-200 hover:bg-ublue-200/90 hover:text-ublue-200/90",
        icon: "bg-background text-ublue-200 hover:bg-ublue-200/90 hover:text-ublue-200/90",
      },

      size: {
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-11 rounded-md px-6 text-sm",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "sm",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

// import React from "react";
// import { icons } from "lucide-react";

// interface ButtonProps {
//   variant: "text" | "icon";
//   size?: "sm" | "lg";
//   outline?: boolean; // Changed from 'type' to 'outline'
//   icon?: keyof typeof icons;
//   onClick?: () => void;
//   children?: React.ReactNode;
// }

// const Icon = ({
//   name,
//   color,
//   size,
// }: {
//   name: keyof typeof icons;
//   color?: string;
//   size?: number;
// }) => {
//   const LucideIcon = icons[name];

//   return <LucideIcon color={color} size={size} />;
// };

// const Button: React.FC<ButtonProps> = ({
//   variant,
//   size = "sm",
//   outline = false, // Default outline to false
//   icon,
//   onClick,
//   children,
// }) => {
//   const textSize = size === "sm" ? "text-xs" : "text-sm";
//   const paddingY = size === "sm" ? "py-1" : "py-2";
//   const paddingX = size === "sm" ? "px-2" : "px-4";
//   const borderRadius = size === "sm" ? "rounded-md" : "rounded-lg";
//   const bgColor = outline ? "bg-transparent" : "bg-ublue-100"; // Adjust background color conditionally
//   const textColor = outline ? "text-ublue-200" : "text-white"; // Adjust text color conditionally
//   const borderColor = outline ? "border-ublue-200" : ""; // Adjust border color conditionally
//   const borderStyle = outline ? "border" : ""; // Adjust border style conditionally
//   const iconColor = outline ? "text-ublue-200" : "text-white"; // Adjust icon color conditionally

//   return (
//     <button
//       onClick={onClick}
//       className={`flex items-center justify-center focus:outline-none ${borderStyle} ${textSize} ${paddingY} ${paddingX} ${borderRadius} ${bgColor} ${textColor} ${borderColor}`}
//     >
//       {variant === "text" && children}
//       {variant === "icon" && icon && (
//         <Icon name={icon} color={iconColor} size={size === "sm" ? 20 : 24} />
//       )}
//     </button>
//   );
// };

// export default Button;
