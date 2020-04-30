import { getInterfaceTranslations } from '../../services/interfaceTranslations';

import { InterfaceTranslationModel } from './interfaceTranslations.model';
import { interfaceTranslationQuery } from './interfaceTranslations.query';
import {
	interfaceTranslationsStore,
	InterfaceTranslationsStore,
} from './interfaceTranslations.store';

export class InterfaceTranslationService {
	constructor(private store: InterfaceTranslationsStore) {}

	public async setCoreTranslation(): Promise<void> {
		const interfaceTranslation = await getInterfaceTranslations();

		if (!interfaceTranslation) {
			// TODO: maybe do something?
			return;
		}

		this.store.add({ ...interfaceTranslation, id: 'core' });
	}

	public getCoreTranslation(): Promise<InterfaceTranslationModel> {
		return interfaceTranslationQuery.core$.toPromise();
	}
}

export const interfaceTranslationService = new InterfaceTranslationService(
	interfaceTranslationsStore
);
