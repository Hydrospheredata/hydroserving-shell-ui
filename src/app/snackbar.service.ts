import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private matSnackBar: MatSnackBar) {}

  showMessage(message: string) {
    this.matSnackBar.open(message, undefined, {
      duration: 2000,
      panelClass: 'snackbar',
    });
  }
}
