const typescriptTransform = require('i18next-scanner-typescript');

module.exports = {
	input: [
		'public/**/*.{ts,tsx}',
		// Use ! to filter out files or directories
		'!public/**/*.spec.{ts,tsx)',
		'!public/assets/**',
		'!**/node_modules/**',
	],
	output: './public/assets/',
	options: {
		func: {
			list: ['tKey'],
			extensions: ['.ts', '.tsx'],
		},
		lngs: ['nl-BE'],
		ns: ['core'],
		defaultLng: 'nl-BE',
		defaultNs: 'core',
		defaultValue: '__STRING_NOT_TRANSLATED__',
		resource: {
			loadPath: 'public/assets/i18n/template.json',
			savePath: 'i18n/locales/template.json',
			jsonIndent: 2,
			lineEnding: '\n',
		},
		// nsSeparator: false, // namespace separator
		// keySeparator: false, // key separator
		// interpolation: {
		// 	prefix: '{{',
		// 	suffix: '}}',
		// },
		transform: typescriptTransform({ extensions: ['.tsx', '.ts'] }),
	},
};
