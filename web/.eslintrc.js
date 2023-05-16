module.exports = {
	env: {
		node: true,
		browser: true,
		es2021: true,
	},
	parser: "@typescript-eslint/parser",
	extends: [
		"next",
		"@actualsize/eslint-config",
		"prettier"
	],
	plugins: [
		"import-quotes"
	],
	rules: {
		"react/no-unescaped-entities": "off",
		"unicorn/prefer-export-from": "off",
		"unicorn/no-null": "off",
		"unicorn/prefer-optional-catch-binding": "off",
		"unicorn/explicit-length-check": "off",
		"unicorn/no-negated-condition": "off",
		"import-quotes/import-quotes": [1, "double"]
	},
	parserOptions: {
		project: "./tsconfig.json",
		ecmaVersion: 2022,
	}
}
