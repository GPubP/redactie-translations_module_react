import { tKey } from './tKey';

const CORE_TRANSLATIONS = Object.freeze({
	// ------- GENERAL TRANSLATIONS -------
	'GENERAL_SYSTEM-NAME': tKey('GENERAL_SYSTEM-NAME', 'Systeemnaam'),
	GENERAL_COPY: tKey('GENERAL_COPY', 'Kopieer'),

	// ------- ROUTING TRANSLATIONS -------
	ROUTING_UPDATE: tKey('ROUTING_UPDATE', 'bewerken'),
	ROUTING_CREATE: tKey('ROUTING_CREATE', 'aanmaken'),

	// ------- FILTER TRANSLATIONS -------
	FILTER_TITLE: tKey('FILTER_TITLE', 'Filter'),
	FILTER_CLEAR: tKey('FILTER_CLEAR', 'Alles leegmaken'),
	FILTER_APPLY: tKey('FILTER_APPLY', 'Toepassen'),

	// ------- STATUS TRANSLATIONS -------
	STATUS_TITLE: tKey('STATUS_TITLE', 'Status'),
	STATUS_ACTIVE: tKey('STATUS_ACTIVE', 'Actief'),
	'STATUS_NON-ACTIVE': tKey('STATUS_NON-ACTIVE', 'Niet actief'),

	// ------- REMOVE-CARD TRANSLATIONS -------
	REMOVE_TITLE: tKey('REMOVE_TITLE', 'Verwijder'),

	// ------- BUTTON TRANSLATIONS -------
	'BUTTON_CREATE-NEW': tKey('BUTTON_CREATE-NEW', 'Nieuw maken'),
	BUTTON_SAVE: tKey('BUTTON_SAVE', 'Bewaren'),
	'BUTTON_SAVE-NEXT': tKey('BUTTON_SAVE-NEXT', 'Bewaar en ga verder'),
	BUTTON_NEXT: tKey('BUTTON_NEXT', 'Ga verder'),
	BUTTON_CANCEL: tKey('BUTTON_CANCEL', 'Annuleer'),
	BUTTON_ADD: tKey('BUTTON_ADD', 'Toevoegen'),
	'BUTTON_ADD-SECTION': tKey('BUTTON_ADD-SECTION', 'Sectie toevoegen'),
	BUTTON_ACTIVATE: tKey('BUTTON_ACTIVATE', 'Activeren'),
	BUTTON_DEACTIVATE: tKey('BUTTON_DEACTIVATE', 'Deactiveren'),
	BUTTON_REMOVE: tKey('BUTTON_REMOVE', 'Verwijderen'),
	BUTTON_ARCHIVE: tKey('BUTTON_ARCHIVE', 'Archiveren'),
	BUTTON_BACK: tKey('BUTTON_BACK', 'Terug'),
	BUTTON_UPDATE: tKey('BUTTON_UPDATE', 'Wijzig'),
	'BUTTON_BACK-TO-OVERVIEW': tKey('BUTTON_BACK-TO-OVERVIEW', 'Terug naar overzicht'),

	// ------- TABLE TRANSLATIONS -------
	TABLE_RESULT: tKey('TABLE_RESULT', 'Resultaten'),
	TABLE_NAME: tKey('TABLE_NAME', 'Naam'),
	TABLE_TYPE: tKey('TABLE_TYPE', 'Type'),
	TABLE_DESCRIPTION: tKey('TABLE_DESCRIPTION', 'Beschrijving'),
	'TABLE_LAST-MODIFIED': tKey('TABLE_LAST-MODIFIED', 'Laatst bewerkt op'),
	TABLE_AUTHOR: tKey('TABLE_AUTHOR', 'Auteur'),
	TABLE_STATUS: tKey('TABLE_STATUS', 'Status'),
	TABLE_ONLINE: tKey('TABLE_ONLINE', 'Online'),
	'TABLE_NO-RESULT': tKey(
		'TABLE_NO-RESULT',
		'Er zijn geen resultaten voor de ingestelde filters'
	),
	'TABLE_NO-DESCRIPTION': tKey('TABLE_NO-DESCRIPTION', 'Geen beschrijving'),
	'TABLE_NO-ITEMS': tKey('TABLE_NO-ITEMS', 'Er zijn geen items om weer te geven'),

	// ------- MODAL TRANSLATIONS -------
	'MODAL_CONFIRM-ARCHIVE': tKey('MODAL_CONFIRM-ARCHIVE', 'Archiveren'),
	MODAL_CANCEL: tKey('MODAL_CANCEL', 'Annuleer'),
	'MODAL_CONFIRM-REMOVE': tKey('MODAL_CONFIRM-REMOVE', 'Ja, verwijder'),
	'MODAL_TITLE-REMOVE': tKey('MODAL_TITLE-REMOVE', 'Verwijderen?'),

	// ------- VALIDATION TRANSLATIONS -------
	VALIDATION_REQUIRED: tKey('VALIDATION_REQUIRED', 'Dit veld is verplicht'),
});

export { CORE_TRANSLATIONS };
