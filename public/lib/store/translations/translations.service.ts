import { first } from 'rxjs/operators';

import { getInterfaceTranslationFile, I18NextTranslations } from '../../services/translationFiles';
import { interfaceTranslationQuery } from '../interfaceTranslations';

import { translationsQuery } from './translations.query';
import { translationsStore, TranslationsStore } from './translations.store';

export class TranslationsService {
	constructor(private store: TranslationsStore) {}

	public async getCoreTranslationFile(lang: string): Promise<I18NextTranslations | null> {
		const translation = await translationsQuery.coreTranslation$.pipe(first()).toPromise();

		if (translation?.translation?.[lang]) {
			return translation.translation[lang];
		}

		const coreInterfaceTranslation = await interfaceTranslationQuery.core$
			.pipe(first())
			.toPromise();

		console.log(coreInterfaceTranslation);

		const translationFile = await getInterfaceTranslationFile(
			coreInterfaceTranslation.uuid,
			lang
		);

		console.log(translationFile);

		if (!translationFile) {
			return null;
		}

		translation
			? this.updateTranslation('core', lang, translationFile[lang])
			: this.addTranslation('core', lang, translationFile[lang]);

		return translationFile[lang] as I18NextTranslations;
	}

	private updateTranslation(id: string, lang: string, translation: I18NextTranslations): void {
		this.store.update(id, {
			id,
			translation: {
				[lang]: translation,
			},
		});
	}

	private addTranslation(id: string, lang: string, translation: I18NextTranslations): void {
		this.store.add({
			id,
			translation: {
				[lang]: translation,
			},
		});
	}
}

export const translationsService = new TranslationsService(translationsStore);
