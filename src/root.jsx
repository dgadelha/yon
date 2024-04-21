import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./root.scss";

// @ts-expect-error - really expected
createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
