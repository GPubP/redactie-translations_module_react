export interface TranslationsSchema {
	uuid?: string;
	meta: {
		label: string;
		slug: Record<string, string>;
		description?: string;
		theme?: string;
		lastEditor?: string;
		status?: string;
		published?: boolean;
		createdAt?: string;
		lastModified?: string;
	};
}
