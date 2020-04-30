import { EntityStore, StoreConfig } from '@datorama/akita';

import {
	InterfaceTranslationModel,
	InterfaceTranslationsState,
} from './interfaceTranslations.model';

export const createInitialInterfaceTranslationsState = (): InterfaceTranslationsState => ({});

@StoreConfig({ name: 'interface-translations', idKey: 'id' })
export class InterfaceTranslationsStore extends EntityStore<
	InterfaceTranslationsState,
	InterfaceTranslationModel
> {
	constructor() {
		super(createInitialInterfaceTranslationsState());
	}
}

export const interfaceTranslationsStore = new InterfaceTranslationsStore();
