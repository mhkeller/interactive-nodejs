module.exports = {
	extends: [
		'semistandard'
	],
	rules: {
		'arrow-parens': ['error', 'as-needed'],
		'no-tabs': ['error', { allowIndentationTabs: true }],
		quotes: ['error', 'single', { allowTemplateLiterals: true }],
		indent: ['error', 'tab'],
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: true
			}
		],
		camelcase: 0
	}
};
