import { OrderBy, SearchParams } from './api.service.types';

export const DEFAULT_SEARCH_PARAMS: SearchParams = {
	lang: 'nl',
};

export const DEFAULT_SORTING: OrderBy = {
	key: 'name',
	order: 'asc',
};
