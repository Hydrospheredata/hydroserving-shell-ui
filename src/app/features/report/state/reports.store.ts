import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { Report } from '@app/features/report/state/report.model';

export interface ReportsState {
  reports: Report[] | any;
}

export function createInitialState(): ReportsState {
  return {
    reports: [],
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'report' })
export class ReportsStore extends Store<ReportsState> {
  constructor() {
    super(createInitialState());
  }
}
