import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { Interceptors } from './core/OpenAPI';
import {  } from './core/';

import { PetService } from './services.gen';
import { StoreService } from './services.gen';
import { UserService } from './services.gen';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class test {

	public readonly pet: PetService;
	public readonly store: StoreService;
	public readonly user: UserService;

	public readonly request: BaseHttpRequest;

	constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = ) {
		this.request = new HttpRequest({
			BASE: config?.BASE ?? 'https://petstore.swagger.io/v2',
			VERSION: config?.VERSION ?? '1.0.7',
			WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
			CREDENTIALS: config?.CREDENTIALS ?? 'include',
			TOKEN: config?.TOKEN,
			USERNAME: config?.USERNAME,
			PASSWORD: config?.PASSWORD,
			HEADERS: config?.HEADERS,
			ENCODE_PATH: config?.ENCODE_PATH,
			interceptors: {
				request: config?.interceptors?.request ?? new Interceptors(),
				response: config?.interceptors?.response ?? new Interceptors(),
      },
		});

		this.pet = new PetService(this.request);
		this.store = new StoreService(this.request);
		this.user = new UserService(this.request);
	}
}
