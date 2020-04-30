import { TranslateFunc } from '../i18next/useTranslation';
import { TranslationMetaSchema, TranslationSchema } from '../services/interfaceTranslations';
import { I18NextTranslations, TranslationFile } from '../services/translationFiles';

export interface TranslationsAPI {
	core: {
		getTranslationFile: (lang: string) => Promise<I18NextTranslations | null>;
		useTranslation: (lang: string) => [TranslateFunc];
	};
	modules: {
		registerTranslation?: (module: string, poFile: string) => Promise<TranslationSchema>;
		getModuleTranslationFile?: (module: string, lang: string) => Promise<TranslationFile>;
		useModuleTranslation?: (module: string, lang: string) => [TranslateFunc];
	};
}

export {
	I18NextTranslations,
	TranslationFile,
	TranslationSchema,
	TranslationMetaSchema,
	TranslateFunc,
};
