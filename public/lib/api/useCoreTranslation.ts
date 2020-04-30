import { TranslateFunc, useTranslation } from '../i18next/useTranslation';

export const useCoreTranslation = (lang: string): [TranslateFunc] => useTranslation('core', lang);
