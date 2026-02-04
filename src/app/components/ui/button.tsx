import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-base font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-gold focus-visible:ring-gold/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shadow-lg premium-title bg-white/80 backdrop-blur border border-gold",
  {
    variants: {
      variant: {
        default: "bg-gold text-primary-foreground hover:bg-gold/90 border-gold",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 border-gold",
        outline:
          "border-2 border-gold bg-white/70 text-gold hover:bg-gold/10 hover:text-gold dark:bg-input/30 dark:border-gold dark:hover:bg-input/50",
        secondary:
          "bg-white/80 text-gold border-gold hover:bg-gold/10 hover:text-gold",
        ghost:
          "hover:bg-gold/20 hover:text-gold dark:hover:bg-gold/30",
        link: "text-gold underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }), "premium-title shadow-md transition-transform hover:scale-[1.03]")}
      {...props}
    />
  );
}

export { Button, buttonVariants };
