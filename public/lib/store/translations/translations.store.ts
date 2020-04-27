import { EntityStore, StoreConfig } from '@datorama/akita';

import {
	createInitialTranslationsState,
	TranslationsModel,
	TranslationsState,
} from './translations.model';

@StoreConfig({ name: 'translations', idKey: 'id' })
export class TranslationsStore extends EntityStore<TranslationsState, TranslationsModel> {
	constructor() {
		super(createInitialTranslationsState());
	}
}

export const translationsStore = new TranslationsStore();
