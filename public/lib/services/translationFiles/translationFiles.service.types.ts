export type I18NextTranslations = Record<string, string>;

export interface TranslationFile {
	[lang: string]: I18NextTranslations;
}
