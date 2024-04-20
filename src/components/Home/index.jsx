import clsx from "clsx";
import Button from "../Button";
import s from "./style.module.scss";

/**
 * @typedef {import('react').BaseHTMLAttributes} BaseHTMLAttributes
 */

/**
 * @typedef {Object} HomeProps
 * @property {() => Promise} onStart
 */

/**
 * @param {HomeProps & BaseHTMLAttributes} props
 */
export default function Home(props) {
	const { className, onStart, ...rest } = props;

	return (
		<main className={clsx(s.home, className)} {...rest}>
			<span className="spacer" />
			<h1 className={s.title}>YoN</h1>
			<h2 className={s.subtitle}>Yes or No?</h2>
			<h3 className={s.cta}>Get Started</h3>

			<div className="spacer" />

			<Button onClick={onStart} size="lg">
				START
			</Button>
		</main>
	);
}
