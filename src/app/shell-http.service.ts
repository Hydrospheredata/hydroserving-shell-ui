import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

@Injectable({ providedIn: 'root' })
export class ShellHttpService {
  constructor(private http: HttpClient) {}

  get<T>(url: string, params?: any) {
    return this.http.get<T>(this.fullUrl(url), { params });
  }

  post<T>(url: string, body: any) {
    return this.http.post<T>(url, body);
  }

  private fullUrl(url: string): string {
    return `${environment.host}:${environment.port}/${url}`;
  }
}
