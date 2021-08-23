import { I18NextTranslations } from '../services/translationFiles';
import { translationsService } from '../store/translations';

export const updateTranslation = (
	id: string,
	lang: string,
	translation: I18NextTranslations
): void => translationsService.updateTranslation(id, lang, translation);
