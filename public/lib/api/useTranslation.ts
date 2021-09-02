import { useTranslation as i18nextUseTranslation, TranslateFunc } from '../i18next/useTranslation';

export const useTranslation = (id: string, lang: string): [TranslateFunc] =>
	i18nextUseTranslation(id, lang);
