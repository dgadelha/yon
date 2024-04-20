import s from "./style.module.scss";

export default function Header() {
	return (
		<header className={s.header}>
			<span className={s.headerText}>
				<span className={s.headerTitle}>YoN</span>
				<span className={s.headerSubtitle}>Yes or No?</span>
			</span>
		</header>
	);
}
