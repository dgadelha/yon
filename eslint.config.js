import eslint from "@eslint/js";
import jsdoc from "eslint-plugin-jsdoc";
import prettier from "eslint-plugin-prettier/recommended";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import unicorn from "eslint-plugin-unicorn";

export default [
	{
		env: {
			browser: true,
		},
		ignores: ["node_modules/*", "dist/*"],
	},
	eslint.configs.recommended,
	jsdoc.configs["flat/recommended"],
	unicorn.configs["flat/all"],
	prettier,
	{
		plugins: {
			"react-hooks": reactHooks,
		},
		rules: reactHooks.configs.recommended.rules,
	},
	{
		plugins: {
			"react-refresh": reactRefresh,
		},
		rules: {
			"react-refresh/only-export-components": "warn",
		},
	},
	{
		rules: {
			"unicorn/no-null": "off",
			"sort-imports": "off",
		},
	},
];
