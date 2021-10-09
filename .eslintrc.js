module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'plugin:vue/essential',
		'@vue/standard'
	],
	parserOptions: {
		parser: 'babel-eslint'
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'indent': ['error', 'tab'],
		'no-tabs': ['error', { 'allowIndentationTabs': true }],
		'comma-dangle': ['error', 'always-multiline'],
		'semi': ['error', 'always'],
		'no-else-return': 'error',
		'default-case': 'error',
		'no-lonely-if': 'error',
	}
}
