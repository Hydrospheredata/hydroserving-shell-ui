import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { HS_BASE_URL } from './base_url.token';

@Injectable({ providedIn: 'root' })
export class ShellHttpService {
  constructor(
    private http: HttpClient,
    @Inject(HS_BASE_URL) private baseUrl: string,
  ) {}

  get<T>(url: string, params?: any) {
    return this.http.get<T>(this.fullUrl(url), { params });
  }

  post<T>(url: string, body: any) {
    return this.http.post<T>(this.fullUrl(url), body);
  }

  private fullUrl(url: string): string {
    return `${this.baseUrl}${url}`;
  }
}
