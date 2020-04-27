import { i18nInstance } from './instance';

export type TranslateFunc = (keys: string | string[]) => string;
export type UseTranslation = (module: string, lang: string) => [TranslateFunc];

export const useTranslation: UseTranslation = (module, lang) => {
	const trans: TranslateFunc = keys =>
		i18nInstance.t(keys, {
			lng: lang,
			ns: module,
		});

	return [trans];
};
