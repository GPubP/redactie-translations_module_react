import { tKey } from './tKey';

const CORE_TRANSLATIONS = {
	// ------- GENERAL TRANSLATIONS -------
	'GENERAL_SYSTEM-NAME': tKey('GENERAL_SYSTEM-NAME', 'Systeemnaam'),

	// ------- ROUTING TRANSLATIONS -------
	ROUTING_UPDATE: tKey('ROUTING_UPDATE', 'beheer'),
	ROUTING_CREATE: tKey('ROUTING_CREATE', 'aanmaken'),

	// ------- FILTER TRANSLATIONS -------
	FILTER_TITLE: tKey('FILTER_TITLE', 'Filter'),
	FILTER_CLEAR: tKey('FILTER_CLEAR', 'Alles leegmaken'),
	FILTER_APPLY: tKey('FILTER_APPLY', 'Toepassen'),

	// ------- STATUS TRANSLATIONS -------
	STATUS_TITLE: tKey('STATUS_TITLE', 'Status'),
	STATUS_ACTIVE: tKey('STATUS_ACTIVE', 'Actief'),
	'STATUS_NON-ACTIVE': tKey('STATUS_NON-ACTIVE', 'Niet actief'),

	// ------- BUTTON TRANSLATIONS -------
	'BUTTON_CREATE-NEW': tKey('BUTTON_CREATE-NEW', 'Nieuw maken'),
	BUTTON_SAVE: tKey('BUTTON_SAVE', 'Bewaar'),
	'BUTTON_SAVE-NEXT': tKey('BUTTON_SAVE-NEXT', 'Bewaar en ga verder'),
	BUTTON_CANCEL: tKey('BUTTON_CANCEL', 'Annuleer'),
	BUTTON_ADD: tKey('BUTTON_ADD', 'Toevoegen'),
	'BUTTON_ADD-SECTION': tKey('BUTTON_ADD-SECTION', 'Sectie toevoegen'),
	BUTTON_ACTIVATE: tKey('BUTTON_ACTIVATE', 'Activeren'),
	BUTTON_DEACTIVATE: tKey('BUTTON_DEACTIVATE', 'Deactiveren'),

	// ------- TABLE TRANSLATIONS -------
	TABLE_RESULT: tKey('TABLE_RESULT', 'Activeren'),
	TABLE_NAME: tKey('TABLE_NAME', 'Deactiveren'),
	TABLE_TYPE: tKey('TABLE_TYPE', 'Type'),
	TABLE_DESCRIPTION: tKey('TABLE_DESCRIPTION', 'Beschrijving'),
	'TABLE_LAST-MODIFIED': tKey('TABLE_LAST-MODIFIED', 'Laatst bijgewerkt'),
	TABLE_AUTHOR: tKey('TABLE_AUTHOR', 'Auteur'),
	TABLE_STATUS: tKey('TABLE_STATUS', 'Status'),
	TABLE_ONLINE: tKey('TABLE_ONLINE', 'Online'),
};

console.log(CORE_TRANSLATIONS);

Object.freeze(CORE_TRANSLATIONS);

export { CORE_TRANSLATIONS };
