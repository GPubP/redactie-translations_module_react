import { registerTranslationsAPI } from './lib/api';
import { CORE_TRANSLATIONS } from './lib/i18next/translations.const';
import { interfaceTranslationService } from './lib/store/interfaceTranslations';
import { translationsService } from './lib/store/translations';

interfaceTranslationService
	.setCoreTranslation()
	.then(() => translationsService.getCoreTranslationFile('nl_BE'));

registerTranslationsAPI();

export * from './lib/api/api.types';

export { CORE_TRANSLATIONS };
