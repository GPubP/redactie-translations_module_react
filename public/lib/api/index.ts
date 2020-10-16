import Core from '@redactie/redactie-core';

import { CORE_TRANSLATIONS } from '../i18next/translations.const';

import { TranslationsAPI } from './api.types';
import { getCoreTranslationFile } from './getCoreTranslationFile';
import { useCoreTranslation } from './useCoreTranslation';

export const registerTranslationsAPI = (): void =>
	Core.modules.exposeModuleApi('translations-module', {
		core: {
			getTranslationFile: (lang: string) => getCoreTranslationFile(lang),
			useTranslation: useCoreTranslation,
			CORE_TRANSLATIONS,
		},
		// TODO: to implement module translations
		modules: {},
	} as TranslationsAPI);
