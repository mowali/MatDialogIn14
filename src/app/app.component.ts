import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MyNoteDialogComponent } from './my-note-dialog/my-note-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private dialog: MatDialog) {
  }

  title = 'Angular15Sample';
  
  public addNote(e: any) {
    if (e) { e.preventDefault(); e.stopPropagation(); }
    this.dialog.open(MyNoteDialogComponent, {});
    console.log('opening a dialog click');
  }
}
