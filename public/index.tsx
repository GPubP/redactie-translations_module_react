import { registerTranslationsAPI } from './lib/api';
import { setupCoreTranslations } from './lib/helpers';

setupCoreTranslations();
registerTranslationsAPI();

export * from './lib/api/api.types';
