import { Injectable } from '@angular/core';
import { ShellHttpService } from 'src/app/shell-http.service';
import { environment } from '@environments/environment';
import { combineLatest, Observable } from 'rxjs';
import { Report } from '@app/features/report/state/report.model';
import { map, switchMap } from 'rxjs/operators';
import * as _ from 'lodash';

@Injectable({ providedIn: 'root' })
export class ReportsService {
  constructor(private http: ShellHttpService) {}

  apiUrl = environment.apiUrl;

  getFileNames(modelName: string, modelVersion: number): Observable<string[]> {
    return this.http.get<string[]>(
      `${this.apiUrl}/model/${modelName}/${modelVersion}/reports`,
    );
  }

  getReports(params: {
    modelName: string;
    modelVersion: number;
    file: string;
  }): Observable<Report[]> {
    return this.http.get<Report[]>(`${this.apiUrl}/report`, params);
  }

  getAllReports(modelName: string, modelVersion: number): Observable<Report[]> {
    return this.getFileNames(modelName, modelVersion).pipe(
      switchMap(fileNames =>
        combineLatest(
          fileNames.map(fileName =>
            this.getReports({ modelName, modelVersion, file: fileName }),
          ),
        ),
      ),
      map(reports => _.flatten(reports)),
    );
  }
}
