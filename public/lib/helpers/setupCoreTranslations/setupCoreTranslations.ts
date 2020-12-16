import Core from '@redactie/redactie-core';

import { interfaceTranslationService } from '../../store/interfaceTranslations';
import { translationsService } from '../../store/translations';

import { CORE_TRANSLATION_LOADER } from './setupCoreTranslations.const';

export const setupCoreTranslations = (): void => {
	Core.loader.addLoader({ ...CORE_TRANSLATION_LOADER });

	interfaceTranslationService
		.setCoreTranslation()
		.then(() => translationsService.getCoreTranslationFile('nl_BE'))
		.finally(() => Core.loader.setLoading(CORE_TRANSLATION_LOADER.key, false));
};
