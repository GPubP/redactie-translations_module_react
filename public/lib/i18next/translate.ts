import { i18nInstance } from './instance';

export const translate = (module: string, lang: string, key: string): string => {
	return i18nInstance.getResource(lang, module, key);
};
