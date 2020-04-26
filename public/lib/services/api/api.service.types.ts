export interface OrderBy {
	key: string;
	order: 'asc' | 'desc';
}

export interface SearchParams {
	lang?: string;
}

export interface ResponseMeta {
	limit: number;
	skip: number;
	total: number;
	moreResults: boolean;
}
