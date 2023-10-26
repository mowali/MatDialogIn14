import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'my-note-dialog',
  templateUrl: './my-note-dialog.component.html',
  styleUrls: ['./my-note-dialog.component.sass']
})
export class MyNoteDialogComponent {

  form = new FormGroup({});
  options = [];
  fields: FormlyFieldConfig[] = [
    {
      fieldGroup: [
        {
          key: 'IsImportant',
          type: 'checkbox',
          templateOptions: {
            label: 'Is Important',
            placeholder: 'Is Important'
          }
        },
        {
          key: 'Value',
          type: 'textarea',
          templateOptions: {
            label: 'Note (min=1, max=1000)',
            placeholder: 'Note',
            rows: 10,
            minLength: 1,
            maxLength: 1000,
            required: true
          }
        }
      ]
    }
  ];
  constructor(private dialog: MatDialogRef<MyNoteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    }
}
