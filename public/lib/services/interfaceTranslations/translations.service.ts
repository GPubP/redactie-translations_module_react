import { api } from '../api';

import { TranslationsSchema } from './translations.service.types';

export const getInterfaceTranslations = async (): Promise<TranslationsSchema | null> => {
	try {
		const response: TranslationsSchema = await api.get('translations').json();

		if (!response) {
			throw new Error('Failed to get interface translations');
		}

		return response;
	} catch (err) {
		console.error(err);
		return null;
	}
};
