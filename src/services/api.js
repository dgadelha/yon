import { useCallback, useState } from "react";

/**
 * RANDOM.ORG API hook
 */
export default function useApi() {
	const [data, setData] = useState(/** @type {string?} */ (null));
	const [isIdle, setIsIdle] = useState(true);
	const [isLoading, setIsLoading] = useState(false);
	const [isCompleted, setIsCompleted] = useState(false);

	const mutateAsync = useCallback(async () => {
		setIsIdle(false);
		setIsLoading(true);

		try {
			const response = await fetch(
				"https://www.random.org/integers/?num=1&min=0&max=1&col=1&base=10&format=plain&rnd=new",
			)
				.then(response => response.text().then(text => text.trim()))
				.catch(() => null);

			setData(response);
		} catch {
			setData(null);
		} finally {
			setIsLoading(false);
			setIsCompleted(true);
		}
	}, []);

	const reset = useCallback(() => {
		setData(null);
		setIsIdle(true);
		setIsLoading(false);
		setIsCompleted(false);
	}, []);

	return {
		data,
		isCompleted,
		isIdle,
		isLoading,
		mutateAsync,
		reset,
	};
}
