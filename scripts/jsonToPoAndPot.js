const { readFileSync, writeFileSync } = require('fs');

const { i18nextToPot, i18nextToPo } = require('i18next-conv');
const dir = './public/assets/i18n/locales';

function save(target) {
	return result => {
		writeFileSync(target, result);
	};
}

const source = dir + '/template.json';

i18nextToPot('nl_BE', readFileSync(source), {
	ctxSeparator: '__',
	noDate: true,
}).then(save(dir + '/template.pot'));

i18nextToPo('nl_BE', readFileSync(source), {
	ctxSeparator: '__',
	noDate: true,
	language: 'nl_BE',
}).then(save(dir + '/template.po'));
