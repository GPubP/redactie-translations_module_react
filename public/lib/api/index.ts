import Core from '@redactie/redactie-core';

import * as API from './api';

export const registerTranslationsAPI = (): void =>
	Core.modules.exposeModuleApi('translations-module', API);

export { API };
