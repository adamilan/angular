import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { UsersListComponent} from './users-list/users-list.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dialog: MatDialog) {
  }
  title = 'app';
  version = 3;
  usersDialog;

  openTestDialog() {
    this.usersDialog = this.dialog.open(UsersListComponent, {
      hasBackdrop: false
    });

    this.usersDialog
        .afterClosed()
        .pipe(filter(obj => obj && true || false))
        .subscribe(obj => {alert(JSON.stringify(obj))});

  }
}
