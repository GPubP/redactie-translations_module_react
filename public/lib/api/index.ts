import Core from '@redactie/redactie-core';

import { tKey } from '../i18next/tKey';
import { translate } from '../i18next/translate';
import { CORE_TRANSLATIONS } from '../i18next/translations.const';

import { addTranslation } from './addTranslation';
import { TranslationsAPI } from './api.types';
import { getCoreTranslationFile } from './getCoreTranslationFile';
import { updateTranslation } from './updateTranslation';
import { useCoreTranslation } from './useCoreTranslation';
import { useTranslation } from './useTranslation';

const API: TranslationsAPI = {
	core: {
		getTranslationFile: (lang: string) => getCoreTranslationFile(lang),
		useTranslation: useCoreTranslation,
		CORE_TRANSLATIONS,
		tKey,
	},
	modules: {
		addTranslation,
		updateTranslation,
		useTranslation,
		translate,
	},
};

export const registerTranslationsAPI = (): void =>
	Core.modules.exposeModuleApi('translations-module', API);

export { API };
