/**
 * @module Module API
 */
import { tKey } from '../i18next/tKey';
import { translate } from '../i18next/translate';
import { CORE_TRANSLATIONS } from '../i18next/translations.const';

import { addTranslation } from './addTranslation';
import { TranslationsAPICore, TranslationsAPIModules } from './api.types';
import { getActiveLanguage } from './getActiveLanguage';
import { getCoreTranslationFile } from './getCoreTranslationFile';
import { updateTranslation } from './updateTranslation';
import { useCoreTranslation } from './useCoreTranslation';
import { useTranslation } from './useTranslation';

const core: TranslationsAPICore = {
	getTranslationFile: (lang: string) => getCoreTranslationFile(lang),
	useTranslation: useCoreTranslation,
	CORE_TRANSLATIONS,
	tKey,
	getActiveLanguage,
};

const modules: TranslationsAPIModules = {
	addTranslation,
	updateTranslation,
	useTranslation,
	translate,
};

export { core, modules };
