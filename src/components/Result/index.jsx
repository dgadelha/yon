import clsx from "clsx";
import Button from "../Button";
import s from "./style.module.scss";

/**
 * @typedef {import('react').BaseHTMLAttributes} BaseHTMLAttributes
 */

/**
 * @typedef {Object} ResultProps
 * @property {"0" | "1" | null} data
 * @property {() => void} onReset
 */

/**
 * @param {ResultProps & BaseHTMLAttributes} props
 */
export default function Result(props) {
	const { className, onReset, data, ...rest } = props;

	return (
		<main className={clsx(s.result, className)} {...rest}>
			<span className="spacer" />

			<div
				className={clsx(s.resultBox, {
					[s.resultYes]: data === "1",
					[s.resultNo]: data === "0",
					[s.resultError]: data === null,
				})}>
				{data === "1" ? "YES" : data === "0" ? "NO" : "ERROR"}
			</div>

			<span className="spacer" />

			<Button onClick={onReset} size="md">
				GO BACK
			</Button>
		</main>
	);
}
