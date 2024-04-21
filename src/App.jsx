import clsx from "clsx";
import Header from "./components/Header";
import Home from "./components/Home";
import Result from "./components/Result";
import useApi from "./services/api";
import s from "./styles/app.module.scss";

function App() {
	const yesNo = useApi();

	return (
		<div className={clsx("container", s.content)}>
			<Header />

			{yesNo.isCompleted && <Result data={yesNo.data} onReset={yesNo.reset} />}
			{yesNo.isIdle && <Home onStart={() => yesNo.mutateAsync()} />}
			{yesNo.isLoading && <img className={s.loading} src="/images/loading.webp" alt="Loading" />}
		</div>
	);
}

export default App;
