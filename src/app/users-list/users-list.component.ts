import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatFormField } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  version = 1;
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<UsersListComponent>
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstname: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
      lastname: ['', [<any>Validators.required]]
    })
  }

  submit(form) {
    if(!form.valid) return;
    this.dialogRef.close(form.value);
  }

}
