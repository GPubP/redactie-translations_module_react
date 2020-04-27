import { EntityState } from '@datorama/akita';

import { TranslationSchema } from '../../services/interfaceTranslations';

export interface InterfaceTranslationModel extends TranslationSchema {
	id: string;
}

export type InterfaceTranslationsState = EntityState<InterfaceTranslationModel, string>;
