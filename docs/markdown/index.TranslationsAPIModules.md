# Interface: TranslationsAPIModules

[index](../wiki/index).TranslationsAPIModules

## Table of contents

### Properties

- [addTranslation](../wiki/index.TranslationsAPIModules#addtranslation-1)
- [translate](../wiki/index.TranslationsAPIModules#translate-1)
- [updateTranslation](../wiki/index.TranslationsAPIModules#updatetranslation-1)
- [useTranslation](../wiki/index.TranslationsAPIModules#usetranslation-1)

## Properties

### addTranslation

• **addTranslation**: (`id`: `string`, `lang`: `string`, `translation`: [`I18NextTranslations`](../wiki/index#i18nexttranslations-1)) => `void`

#### Type declaration

▸ (`id`, `lang`, `translation`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `lang` | `string` |
| `translation` | [`I18NextTranslations`](../wiki/index#i18nexttranslations-1) |

##### Returns

`void`

#### Defined in

lib/api/api.types.ts:20

___

### translate

• **translate**: (`module`: `string`, `lang`: `string`, `key`: `string`) => `string`

#### Type declaration

▸ (`module`, `lang`, `key`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `module` | `string` |
| `lang` | `string` |
| `key` | `string` |

##### Returns

`string`

#### Defined in

lib/api/api.types.ts:23

___

### updateTranslation

• **updateTranslation**: (`id`: `string`, `lang`: `string`, `translation`: [`I18NextTranslations`](../wiki/index#i18nexttranslations-1)) => `void`

#### Type declaration

▸ (`id`, `lang`, `translation`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `lang` | `string` |
| `translation` | [`I18NextTranslations`](../wiki/index#i18nexttranslations-1) |

##### Returns

`void`

#### Defined in

lib/api/api.types.ts:21

___

### useTranslation

• **useTranslation**: (`id`: `string`, `lang`: `string`) => [[`TranslateFunc`](../wiki/index#translatefunc-1)]

#### Type declaration

▸ (`id`, `lang`): [[`TranslateFunc`](../wiki/index#translatefunc-1)]

##### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `lang` | `string` |

##### Returns

[[`TranslateFunc`](../wiki/index#translatefunc-1)]

#### Defined in

lib/api/api.types.ts:22
