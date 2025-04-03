import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof containerVariants> {
	children: React.ReactNode;
	className?: string;
}

export const containerVariants = cva('m-auto', {
	variants: {
		variant: {
			large: 'w-[95%]',
			normal: 'w-[90%]',
			small: 'w-[80%]',
			full: 'w-full',
		},
	},
	defaultVariants: {
		variant: 'normal',
	},
});
