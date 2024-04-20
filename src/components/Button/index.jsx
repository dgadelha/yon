import clsx from "clsx";
import s from "./style.module.scss";

/**
 * @typedef {import('react').ButtonHTMLAttributes} ButtonHTMLAttributes
 * @typedef {import('react').ReactNode} ReactNode
 */

/**
 * @typedef {Object} ButtonProps
 * @property {ReactNode} [children] - The children of the button
 * @property {string} [label] - The label of the button
 * @property {"primary" | "secondary"} [variant] - The variant of the button
 * @property {"md" | "lg"} [size] - The size of the button
 */

/**
 * @param {ButtonProps & ButtonHTMLAttributes} props
 */
export default function Button(props) {
	const { label = "Button", variant = "primary", size = "md", className, children, ...rest } = props;

	return (
		<button
			className={clsx(s.button, className, {
				[s.buttonPrimary]: variant === "primary",
				[s.buttonSecondary]: variant === "secondary",
				[s.buttonMd]: size === "md",
				[s.buttonLg]: size === "lg",
			})}
			{...rest}>
			{children}
		</button>
	);
}
