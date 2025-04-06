import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

export const containerVariants = cva("m-auto", {
	variants: {
		variant: {
			large: "w-[95%]",
			normal: "w-[90%]",
			small: "w-[80%]",
			full: "w-full",
		},
	},
	defaultVariants: {
		variant: "normal",
	},
});

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof containerVariants> {}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
	({ className, children, variant, ...props }, ref) => {
		return (
			<div ref={ref} className={cn(containerVariants({ variant }), className)} {...props}>
				{children}
			</div>
		);
	}
);

Container.displayName = "Container";
