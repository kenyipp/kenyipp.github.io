module.exports = {
	extends: [
		"next",
		"eslint:recommended",
		"plugin:react/recommended",
		"eslint-config-airbnb-base",
		"airbnb-typescript",
		"prettier"
	],
	env: {
		es2021: true,
		node: true
	},
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		project: ["./tsconfig.json"]
	},
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint", "prettier"],
	rules: {
		"react/react-in-jsx-scope": "off",
		"import/prefer-default-export": "off",
		"no-tabs": ["off"],
		"max-len": ["off"],
		"no-await-in-loop": "off",
		"react/jsx-filename-extension": "off",
		"class-methods-use-this": "off",
		"no-param-reassign": "off",
		"@next/next/no-page-custom-font": "off",
		"react-hooks/exhaustive-deps": "off",

		"@typescript-eslint/quotes": ["error", "double"],
		"@typescript-eslint/comma-dangle": "off",
		"@typescript-eslint/no-namespace": "off",
		"@typescript-eslint/no-shadow": "off",
		"@typescript-eslint/no-non-null-assertion": "off",
		// A better practice is to define all needed variables and test data towards the end of the test suite,
		// so the one interested in seeing tests does not have to scroll down and look for them.
		// One should be able to see the test cases right away and if interested in their setup and implementation,
		// scroll down and search within the file.
		"@typescript-eslint/no-use-before-define": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/lines-between-class-members": [
			"error",
			"always",
			{ exceptAfterSingleLine: true }
		],
		"prettier/prettier": [
			//or whatever plugin that is causing the clash
			"error",
			{
				tabWidth: 4
			}
		],
		"global-require": "off",
		"@typescript-eslint/no-var-requires": "off"
	},
	overrides: [
		{
			files: ["*.spec.{js,ts}"],
			env: {
				mocha: true,
				node: true
			},
			rules: {
				"no-unused-expressions": "off",
				"@typescript-eslint/no-unused-expressions": "off",
				"@typescript-eslint/no-throw-literal": "off"
			}
		}
	]
};
