import { tKey } from '../i18next/tKey';
import { CORE_TRANSLATIONS } from '../i18next/translations.const';
import { TranslateFunc } from '../i18next/useTranslation';
import { TranslationMetaSchema, TranslationSchema } from '../services/interfaceTranslations';
import { I18NextTranslations, TranslationFile } from '../services/translationFiles';

import { addTranslation } from './addTranslation';
import { updateTranslation } from './updateTranslation';
import { useTranslation } from './useTranslation';

export interface TranslationsAPI {
	core: {
		getTranslationFile: (lang: string) => Promise<I18NextTranslations | null>;
		useTranslation: (lang: string) => [TranslateFunc];
		CORE_TRANSLATIONS: typeof CORE_TRANSLATIONS;
		tKey: typeof tKey;
	};
	modules: {
		addTranslation: typeof addTranslation;
		updateTranslation: typeof updateTranslation;
		useTranslation: typeof useTranslation;
	};
}

export {
	I18NextTranslations,
	TranslationFile,
	TranslationSchema,
	TranslationMetaSchema,
	TranslateFunc,
};
