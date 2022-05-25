# Interface: TranslationsAPIModules

[index](../wiki/index).TranslationsAPIModules

## Table of contents

### Properties

- [addTranslation](../wiki/index.TranslationsAPIModules#addtranslation)
- [translate](../wiki/index.TranslationsAPIModules#translate)
- [updateTranslation](../wiki/index.TranslationsAPIModules#updatetranslation)
- [useTranslation](../wiki/index.TranslationsAPIModules#usetranslation)

## Properties

### addTranslation

• **addTranslation**: (`id`: `string`, `lang`: `string`, `translation`: [`I18NextTranslations`](../wiki/index#i18nexttranslations)) => `void`

#### Type declaration

▸ (`id`, `lang`, `translation`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `lang` | `string` |
| `translation` | [`I18NextTranslations`](../wiki/index#i18nexttranslations) |

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

• **updateTranslation**: (`id`: `string`, `lang`: `string`, `translation`: [`I18NextTranslations`](../wiki/index#i18nexttranslations)) => `void`

#### Type declaration

▸ (`id`, `lang`, `translation`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `lang` | `string` |
| `translation` | [`I18NextTranslations`](../wiki/index#i18nexttranslations) |

##### Returns

`void`

#### Defined in

lib/api/api.types.ts:21

___

### useTranslation

• **useTranslation**: (`id`: `string`, `lang`: `string`) => [[`TranslateFunc`](../wiki/index#translatefunc)]

#### Type declaration

▸ (`id`, `lang`): [[`TranslateFunc`](../wiki/index#translatefunc)]

##### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `lang` | `string` |

##### Returns

[[`TranslateFunc`](../wiki/index#translatefunc)]

#### Defined in

lib/api/api.types.ts:22
