import Core from '@redactie/redactie-core';
import { stringify } from 'query-string';

import { api } from '../api';

import { I18NextTranslations } from './translationFiles.service.types';

const CoreConfig = Core.config.getValue('core') || {};

export const getInterfaceTranslationFile = async (
	uuid: string,
	lang: string,
	type = 'json'
): Promise<I18NextTranslations | null> => {
	try {
		const t = CoreConfig.tenantId;

		const response: I18NextTranslations = await api
			.get(`translations/${uuid}/download?${stringify({ lang, type, t })}`)
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
