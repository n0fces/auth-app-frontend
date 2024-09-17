/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
	semi: true,
	singleQuote: true,
	bracketSpacing: true,
	useTabs: true,
	arrowParens: 'always',
	trailingComma: 'all',
	bracketSameLine: true,
	overrides: [
		{
			files: '*.svg',
			options: {
				parser: 'html',
			},
		},
	],
};

export default config;
