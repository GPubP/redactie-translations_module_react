import { EntityUIQuery } from '@datorama/akita';

import { InterfaceTranslationsState } from './interfaceTranslations.model';
import {
	interfaceTranslationsStore,
	InterfaceTranslationsStore,
} from './interfaceTranslations.store';

export class InterfaceTranslationQuery extends EntityUIQuery<InterfaceTranslationsState> {
	public core$ = this.selectEntity('core');

	constructor(protected store: InterfaceTranslationsStore) {
		super(store);
	}
}

export const interfaceTranslationQuery = new InterfaceTranslationQuery(interfaceTranslationsStore);
