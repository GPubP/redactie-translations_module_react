import { useEffect, useState } from 'react';

import { i18nInstance } from './instance';

export type TranslateFunc = (keys: string | string[]) => string;
export type UseTranslation = (module: string, lang: string) => [TranslateFunc];

const getI18nInstance = (module: string, lang: string) => {
	return (): TranslateFunc => keys =>
		i18nInstance.t(keys, {
			lng: lang,
			ns: module,
		});
};

export const useTranslation: UseTranslation = (module, lang) => {
	const [transF, setTransF] = useState<TranslateFunc>();

	useEffect(() => {
		const handler = (): void => setTransF(getI18nInstance(module, lang));

		// Listen for i18nInstance resource changes
		(i18nInstance as any).store.on('added', handler);

		// Remove change listeners
		return () => {
			(i18nInstance as any).store.off('added', handler);
		};
	}, [lang, module]);

	return [transF || getI18nInstance(module, lang)()];
};
