import { EntityStore, StoreConfig } from '@datorama/akita';

import { TranslationsModel, TranslationsState } from './translations.model';

export const createInitialTranslationsState = (): TranslationsState => ({
	activeField: null,
	fields: [],
});

@StoreConfig({ name: 'translations' })
export class TranslationsStore extends EntityStore<TranslationsState, TranslationsModel> {
	constructor() {
		super(createInitialTranslationsState());
	}
}

export const translationsStore = new TranslationsStore();
