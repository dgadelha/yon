import { includeIgnoreFile } from "@eslint/compat";
import eslint from "@eslint/js";
import jsdoc from "eslint-plugin-jsdoc";
import prettier from "eslint-plugin-prettier/recommended";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import unicorn from "eslint-plugin-unicorn";
import { URL, fileURLToPath } from "node:url";

const gitignorePath = fileURLToPath(new URL(".gitignore", import.meta.url));

export default [
	includeIgnoreFile(gitignorePath, "Imported .gitignore patterns"),
	{
		languageOptions: {
			globals: {
				fetch: true,
			},
		},
	},
	eslint.configs.recommended,
	jsdoc.configs["flat/recommended"],
	unicorn.configs.all,
	prettier,
	{
		plugins: {
			"react-hooks": reactHooks,
		},
		rules: reactHooks.configs.recommended.rules,
	},
	{
		plugins: { "react-refresh": reactRefresh },
		rules: { "react-refresh/only-export-components": "warn" },
	},
	{
		rules: {
			"jsdoc/require-returns": "off",
			"sort-imports": "off",
			"unicorn/no-null": "off",
		},
	},
];
