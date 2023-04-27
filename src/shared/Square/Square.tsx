import React, {ButtonHTMLAttributes, memo, ReactNode} from 'react';
import { Button as ButtonBootstrap } from "react-bootstrap"


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	children?: ReactNode;
	variant?: string;
}

export const Button = memo((props: ButtonProps) => {
	const {className, children, variant} = props;

	return (
		<ButtonBootstrap
			className={className}
			variant={variant}
		>
			{children}
		</ButtonBootstrap>
	);
})

