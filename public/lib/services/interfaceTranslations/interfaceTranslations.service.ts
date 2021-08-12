import { api } from '../api';

import {
	TranslationSchema,
	TranslationSchemaResponse,
} from './interfaceTranslations.service.types';

export const getInterfaceTranslations = async (): Promise<TranslationSchema | null> => {
	try {
		const response: TranslationSchemaResponse = await api
			.get('translations', {
				searchParams: {
					interface: true,
				},
			})
			.json();

		if (!response) {
			throw new Error('Failed to get interface translations');
		}

		return response?._embedded[0];
	} catch (err) {
		return null;
	}
};
