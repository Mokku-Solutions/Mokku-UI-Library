import React from 'react';
import { cn } from '../../../utils/utils';
import { ContainerProps, containerVariants } from './container-props';

const Container: React.FC<ContainerProps> = ({ children, variant, className, ...props }) => {
	return (
		<div className={cn(containerVariants({ variant }), className)} {...props}>
			{children}
		</div>
	);
};

export default Container;
