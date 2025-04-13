import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractEditorComponent } from './abstract-editor.component';

describe('AbstractEditorComponent', () => {
  let component: AbstractEditorComponent;
  let fixture: ComponentFixture<AbstractEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbstractEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbstractEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
