import { stringify } from 'query-string';

import { api } from '../api';

import { TranslationFile } from './translationFiles.service.types';

export const getInterfaceTranslationFile = async (
	uuid: string,
	lang: string,
	type = 'json'
): Promise<TranslationFile | null> => {
	try {
		const response: TranslationFile = await api
			.get(`translations/download/${uuid}?${stringify({ lang, type })}`)
			.json();

		if (!response) {
			throw new Error('Failed to get translation file');
		}

		return response;
	} catch (err) {
		console.error(err);
		return null;
	}
};
