import { registerTranslationsAPI } from './lib/api';
import { interfaceTranslationService } from './lib/store/interfaceTranslations';
import { translationsService } from './lib/store/translations';

interfaceTranslationService
	.setCoreTranslation()
	.then(() => translationsService.getCoreTranslationFile('nl_BE'));

registerTranslationsAPI();
