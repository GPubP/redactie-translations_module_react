import { EntityUIQuery } from '@datorama/akita';

import { TranslationsModel, TranslationsState } from './translations.model';
import { translationsStore, TranslationsStore } from './translations.store';

export class TranslationsQuery extends EntityUIQuery<TranslationsState, TranslationsModel> {
	public coreTranslation$ = this.selectEntity('core');

	constructor(protected store: TranslationsStore) {
		super(store);
	}
}

export const translationsQuery = new TranslationsQuery(translationsStore);
