import { api } from '../api';

import { TranslationSchema } from './interfaceTranslations.service.types';

export const getInterfaceTranslations = async (): Promise<TranslationSchema | null> => {
	try {
		const response: TranslationSchema = await api.get('translations/interface').json();

		if (!response) {
			throw new Error('Failed to get interface translations');
		}

		return response;
	} catch (err) {
		console.error(err);
		return null;
	}
};
