import { EntityState } from '@datorama/akita';

import { TranslationFile } from '../../services/translationFiles';

export interface TranslationsModel {
	id: string;
	translation: TranslationFile;
}

export type TranslationsState = EntityState<TranslationsModel, string>;

export const createInitialTranslationsState = (): TranslationsState => ({});
