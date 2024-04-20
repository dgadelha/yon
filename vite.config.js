import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import sassDts from "vite-plugin-sass-dts";

// https://vitejs.dev/config/
export default defineConfig({
	css: {
		modules: {
			localsConvention: "camelCase",
		},
		preprocessorOptions: {
			scss: { additionalData: `@import "src/styles/mixins";` },
		},
	},
	plugins: [react(), sassDts({ enabledMode: ["development", "production"] })],
});
