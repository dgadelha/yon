import { useMutation } from "@tanstack/react-query";
import clsx from "clsx";
import Header from "./components/Header";
import Home from "./components/Home";
import Result from "./components/Result";
import s from "./styles/app.module.scss";

function App() {
	const yesNo = useMutation({
		async mutationFn() {
			return fetch("https://www.random.org/integers/?num=1&min=0&max=1&col=1&base=10&format=plain&rnd=new")
				.then(response =>
					response
						.text()
						.then(text => text.trim())
						.then(result => new Promise(resolve => setTimeout(() => resolve(result), 500))),
				)
				.catch(() => null);
		},
	});

	return (
		<div className={clsx("container", s.content)}>
			<Header />

			{yesNo.isSuccess && <Result data={yesNo.data} onReset={yesNo.reset} />}
			{yesNo.isIdle && <Home onStart={() => yesNo.mutateAsync()} />}
			{yesNo.isPending && <img className={s.loading} src="/images/loading.gif" alt="Loading" />}
		</div>
	);
}

export default App;
