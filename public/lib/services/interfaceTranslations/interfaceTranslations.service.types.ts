export interface TranslationMetaSchema {
	_id: string;
	lastModified: string;
	language: string;
	json: string;
	po: string;
	active: boolean;
}

export interface TranslationSchema {
	_id: string;
	lastModified: string;
	interface: boolean;
	name: string;
	translations: TranslationMetaSchema[];
	uuid: string;
}
