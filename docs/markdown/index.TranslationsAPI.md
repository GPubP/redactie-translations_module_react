# Interface: TranslationsAPI

[index](../wiki/index).TranslationsAPI

## Table of contents

### Properties

- [core](../wiki/index.TranslationsAPI#core-1)
- [modules](../wiki/index.TranslationsAPI#modules-1)

## Properties

### core

• **core**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CORE_TRANSLATIONS` | `Readonly`<{ `BUTTON_ACTIVATE`: `string` ; `BUTTON_ADD`: `string` ; `BUTTON_ADD-SECTION`: `string` ; `BUTTON_ARCHIVE`: `string` ; `BUTTON_BACK`: `string` ; `BUTTON_BACK-TO-OVERVIEW`: `string` ; `BUTTON_CANCEL`: `string` ; `BUTTON_CREATE-NEW`: `string` ; `BUTTON_DEACTIVATE`: `string` ; `BUTTON_NEXT`: `string` ; `BUTTON_REMOVE`: `string` ; `BUTTON_SAVE`: `string` ; `BUTTON_SAVE-NEXT`: `string` ; `BUTTON_UPDATE`: `string` ; `CONFIRM`: `string` ; `DESCRIPTION`: `string` ; `EXAMPLE`: `string` ; `FILTER_APPLY`: `string` ; `FILTER_CLEAR`: `string` ; `FILTER_TITLE`: `string` ; `GENERAL_COPY`: `string` ; `GENERAL_SYSTEM-NAME`: `string` ; `MODAL_CANCEL`: `string` ; `MODAL_CONFIRM`: `string` ; `MODAL_CONFIRM-ARCHIVE`: `string` ; `MODAL_CONFIRM-REMOVE`: `string` ; `MODAL_TITLE-REMOVE`: `string` ; `REMOVE_TITLE`: `string` ; `ROUTING_CREATE`: `string` ; `ROUTING_UPDATE`: `string` ; `STATUS_ACTIVE`: `string` ; `STATUS_NON-ACTIVE`: `string` ; `STATUS_TITLE`: `string` ; `TABLE_AUTHOR`: `string` ; `TABLE_DESCRIPTION`: `string` ; `TABLE_LAST-MODIFIED`: `string` ; `TABLE_NAME`: `string` ; `TABLE_NO-DESCRIPTION`: `string` ; `TABLE_NO-ITEMS`: `string` ; `TABLE_NO-RESULT`: `string` ; `TABLE_ONLINE`: `string` ; `TABLE_RESULT`: `string` ; `TABLE_STATUS`: `string` ; `TABLE_TYPE`: `string` ; `VALIDATION_REQUIRED`: `string`  }\> |
| `tKey` | (`key`: `string`, `defaultValue`: `string`) => `string` |
| `getTranslationFile` | (`lang`: `string`) => `Promise`<``null`` \| [`I18NextTranslations`](../wiki/index#i18nexttranslations-1)\> |
| `useTranslation` | (`lang`: `string`) => [[`TranslateFunc`](../wiki/index#translatefunc-1)] |

#### Defined in

lib/api/api.types.ts:13

___

### modules

• **modules**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addTranslation` | (`id`: `string`, `lang`: `string`, `translation`: [`I18NextTranslations`](../wiki/index#i18nexttranslations-1)) => `void` |
| `translate` | (`module`: `string`, `lang`: `string`, `key`: `string`) => `string` |
| `updateTranslation` | (`id`: `string`, `lang`: `string`, `translation`: [`I18NextTranslations`](../wiki/index#i18nexttranslations-1)) => `void` |
| `useTranslation` | (`id`: `string`, `lang`: `string`) => [[`TranslateFunc`](../wiki/index#translatefunc-1)] |

#### Defined in

lib/api/api.types.ts:19
