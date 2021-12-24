import { environment } from '../environments/environment';
import { InjectionToken } from '@angular/core';

export const HS_BASE_URL = new InjectionToken<string>('');
export const HS_ABSOLUTE_URL = new InjectionToken<string>('absolute url');

export function hsBaseUrlFactory(baseHref: string = ''): string {
  return environment.production
    ? `${baseHref}`
    : `${environment.host}${
        environment.port ? ':' + environment.port : ''
      }${baseHref}`;
}

export function hsAbsoluteUrlFactory(baseHref: string = ''): string {
  return environment.production
    ? urlForProduction(baseHref)
    : urlForDeveloping(baseHref);
}

function urlForProduction(baseHref: string = '') {
  const { protocol, hostname, port } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}${baseHref}`;
}

function urlForDeveloping(baseHref: string = '') {
  const { host, port } = environment;

  return `${host}${port ? ':' + port : ''}${baseHref}`;
}
