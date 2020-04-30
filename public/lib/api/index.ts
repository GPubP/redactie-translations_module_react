import Core from '@redactie/redactie-core';

import { TranslationsAPI } from './api.types';
import { getCoreTranslationFile } from './getCoreTranslationFile';
import { useCoreTranslation } from './useCoreTranslation';

export const registerTranslationsAPI = (): void =>
	Core.modules.exposeModuleApi('translations-module', {
		core: {
			getTranslationFile: (lang: string) => getCoreTranslationFile(lang),
			useTranslation: useCoreTranslation,
		},
		// TODO: to implement module translations
		modules: {},
	} as TranslationsAPI);
