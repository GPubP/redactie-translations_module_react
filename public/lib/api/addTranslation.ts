import { I18NextTranslations } from '../services/translationFiles';
import { translationsService } from '../store/translations';

export const addTranslation = (id: string, lang: string, translation: I18NextTranslations): void =>
	translationsService.addTranslation(id, lang, translation);
