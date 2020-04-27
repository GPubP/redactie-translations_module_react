import i18next from 'i18next';

import { TranslationsModel, translationsQuery } from '../store/translations';

/**
 * i18nInstance of translations module
 */
export const i18nInstance = i18next.createInstance(
	{
		fallbackLng: 'nl',
		defaultNS: 'core',
	},
	err => {
		if (err) {
			console.error(err);
			throw err;
		}
		/**
		 * Listen for translation store changes and update i18ninstance accordingly
		 */
		translationsQuery.selectAll().subscribe((translations: TranslationsModel[]) =>
			translations.forEach(translation => {
				Object.keys(translation.translation).forEach(lang =>
					i18nInstance.addResourceBundle(
						lang,
						translation.id,
						translation.translation[lang]
					)
				);
			})
		);
	}
);
