# Interface: TranslationsAPICore

[index](../wiki/index).TranslationsAPICore

## Table of contents

### Properties

- [CORE\_TRANSLATIONS](../wiki/index.TranslationsAPICore#core_translations)
- [tKey](../wiki/index.TranslationsAPICore#tkey)

### Methods

- [getTranslationFile](../wiki/index.TranslationsAPICore#gettranslationfile)
- [useTranslation](../wiki/index.TranslationsAPICore#usetranslation)

## Properties

### CORE\_TRANSLATIONS

• **CORE\_TRANSLATIONS**: `Readonly`<{ `BUTTON_ACTIVATE`: `string` ; `BUTTON_ADD`: `string` ; `BUTTON_ADD-SECTION`: `string` ; `BUTTON_ARCHIVE`: `string` ; `BUTTON_BACK`: `string` ; `BUTTON_BACK-TO-OVERVIEW`: `string` ; `BUTTON_CANCEL`: `string` ; `BUTTON_CREATE-NEW`: `string` ; `BUTTON_DEACTIVATE`: `string` ; `BUTTON_NEXT`: `string` ; `BUTTON_REMOVE`: `string` ; `BUTTON_SAVE`: `string` ; `BUTTON_SAVE-NEXT`: `string` ; `BUTTON_UPDATE`: `string` ; `CONFIRM`: `string` ; `DESCRIPTION`: `string` ; `EXAMPLE`: `string` ; `FILTER_APPLY`: `string` ; `FILTER_CLEAR`: `string` ; `FILTER_TITLE`: `string` ; `GENERAL_COPY`: `string` ; `GENERAL_SYSTEM-NAME`: `string` ; `MODAL_CANCEL`: `string` ; `MODAL_CONFIRM`: `string` ; `MODAL_CONFIRM-ARCHIVE`: `string` ; `MODAL_CONFIRM-REMOVE`: `string` ; `MODAL_TITLE-REMOVE`: `string` ; `REMOVE_TITLE`: `string` ; `ROUTING_CREATE`: `string` ; `ROUTING_UPDATE`: `string` ; `STATUS_ACTIVE`: `string` ; `STATUS_NON-ACTIVE`: `string` ; `STATUS_TITLE`: `string` ; `TABLE_AUTHOR`: `string` ; `TABLE_DESCRIPTION`: `string` ; `TABLE_LAST-MODIFIED`: `string` ; `TABLE_NAME`: `string` ; `TABLE_NO-DESCRIPTION`: `string` ; `TABLE_NO-ITEMS`: `string` ; `TABLE_NO-RESULT`: `string` ; `TABLE_ONLINE`: `string` ; `TABLE_RESULT`: `string` ; `TABLE_STATUS`: `string` ; `TABLE_TYPE`: `string` ; `VALIDATION_REQUIRED`: `string`  }\>

#### Defined in

lib/api/api.types.ts:15

___

### tKey

• **tKey**: (`key`: `string`, `defaultValue`: `string`) => `string`

#### Type declaration

▸ (`key`, `defaultValue`): `string`

**`function`** tKey Dummy function so i18next-scanner kan pick up from code. Enables exporting constants

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | key to match in translation file |
| `defaultValue` | `string` | value in default translation file |

##### Returns

`string`

#### Defined in

lib/api/api.types.ts:16

## Methods

### getTranslationFile

▸ **getTranslationFile**(`lang`): `Promise`<``null`` \| [`I18NextTranslations`](../wiki/index#i18nexttranslations)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `lang` | `string` |

#### Returns

`Promise`<``null`` \| [`I18NextTranslations`](../wiki/index#i18nexttranslations)\>

#### Defined in

lib/api/api.types.ts:13

___

### useTranslation

▸ **useTranslation**(`lang`): [[`TranslateFunc`](../wiki/index#translatefunc)]

#### Parameters

| Name | Type |
| :------ | :------ |
| `lang` | `string` |

#### Returns

[[`TranslateFunc`](../wiki/index#translatefunc)]

#### Defined in

lib/api/api.types.ts:14
