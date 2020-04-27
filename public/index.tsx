import { registerTranslationsAPI } from './lib/api';
import { interfaceTranslationService } from './lib/store/interfaceTranslations';

interfaceTranslationService.setCoreTranslation();

registerTranslationsAPI();
