import { I18NextTranslations } from '../services/translationFiles';
import { translationsService } from '../store/translations';

export const getCoreTranslationFile = (lang: string): Promise<I18NextTranslations | null> =>
	translationsService.getCoreTranslationFile(lang);
