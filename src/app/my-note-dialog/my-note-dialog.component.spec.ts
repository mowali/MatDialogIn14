import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNoteDialogComponent } from './my-note-dialog.component';

describe('MyNoteDialogComponent', () => {
  let component: MyNoteDialogComponent;
  let fixture: ComponentFixture<MyNoteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyNoteDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyNoteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
